#!/usr/bin/env bash
# release.sh <version> — bump every version point of a release in one command.
#
# Three releases in a row shipped with project(VERSION ...) still on 1.4.0,
# and values-stage.yaml carried image pins for GHCR tags that never existed:
# the release version lives in too many files to bump by hand. This script
# edits all of them, verifies the result with check-version-sync.sh, and
# leaves the commit to the human.
#
# What a release touches:
#   human-written (this script only VERIFIES it):
#     CHANGELOG.md                     '## [<version>] — YYYY-MM-DD' heading on
#                                      top (promote the [Unreleased] content)
#   bumped by this script:
#     CMakeLists.txt                   project(VERSION ...) — the baked version
#                                      Core::version() / GET /health report
#     helm/cpp-env/values.yaml         3 image-tag pins (api, worker, frontend)
#     helm/cpp-env/values-demo.yaml    3 image-tag pins
#     helm/cpp-env/values-stage.yaml   3 image-tag pins
#     helm/{cpp-api,cpp-worker,cpp-frontend,cpp-env}/Chart.yaml
#                                      appVersion (default tag for standalone
#                                      installs + app.kubernetes.io/version)
#
# Deliberately NOT touched: vcpkg.json "version" (the Dockerfile keys the
# dependency-install layer on that manifest — bumping it rebuilds ~29 packages
# and blows CI timeouts) and the charts' packaging "version:" fields.
#
# The script commits nothing and tags nothing. It prints the diff and the
# next steps; the v<version> tag on master is what triggers release.yml.
#
# Usage: ./scripts/release.sh 1.6.0
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(cd -- "$SCRIPT_DIR/.." && pwd)"

die() {
    echo "release.sh: $*" >&2
    exit 1
}

command -v python3 >/dev/null 2>&1 || die "python3 required"

[ $# -eq 1 ] || die "usage: ./scripts/release.sh <version>   (e.g. 1.6.0)"
new_version="$1"

# --- validate: strict x.y.z semver ------------------------------------------
# Plain x.y.z only: release.yml strips the tag's leading v, GHCR carries the
# unprefixed form, and the helm pins are unprefixed on purpose (a v-prefixed
# pin pulls a tag that does not exist — cyber-accountant 80996a7).
case "$new_version" in
*[!0-9.]* | *..* | .* | *.) die "'$new_version' is not plain x.y.z semver (no v prefix, no pre-release)" ;;
esac
dots="${new_version//[0-9]/}"
[ "$dots" = ".." ] || die "'$new_version' is not plain x.y.z semver (need exactly three numeric fields)"

# --- validate: monotonic ------------------------------------------------------
current_version="$(sed -n 's/^project(.*VERSION[[:space:]]\{1,\}\([0-9][0-9.]*\).*/\1/p' \
    "$REPO/CMakeLists.txt" | head -1)"
[ -n "$current_version" ] || die "could not parse project(VERSION ...) from CMakeLists.txt"

python3 - "$current_version" "$new_version" <<'PY' || die "new version $new_version must be strictly greater than the current $current_version"
import sys
cur, new = (tuple(int(p) for p in a.split(".")) for a in sys.argv[1:3])
sys.exit(0 if new > cur else 1)
PY

# --- validate: the CHANGELOG heading exists (content is human-written) -------
newest_released="$(sed -n 's/^## \[\([0-9][0-9.]*\)\].*/\1/p' "$REPO/CHANGELOG.md" | head -1)"
if [ "$newest_released" != "$new_version" ]; then
    {
        echo "release.sh: CHANGELOG.md's newest release heading is [${newest_released:-none}]," \
            "not [$new_version]."
        echo ""
        echo "The changelog content is written by a human, not by this script."
        echo "Before re-running:"
        echo "  1. open CHANGELOG.md"
        echo "  2. retitle the '## [Unreleased]' section to:"
        echo "       ## [$new_version] — $(date +%Y-%m-%d)"
        echo "  3. add a fresh empty '## [Unreleased]' heading above it"
    } >&2
    exit 1
fi

# --- edit every version point (counted substitutions) ------------------------
# Each edit counts its own substitutions and fails loudly on the wrong count —
# a pattern that silently stops matching is exactly how version points drift.
bump() {
    # bump <file> <python-regex> <replacement> <expected-count>
    python3 - "$REPO/$1" "$2" "$3" "$4" <<'PY'
import re, sys
path, pattern, repl, expected = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4])
with open(path, encoding="utf-8") as fh:
    text = fh.read()
text, n = re.subn(pattern, repl, text)
if n != expected:
    sys.exit("release.sh: %s: replaced %d occurrence(s) of %r — expected exactly %d"
             % (path, n, pattern, expected))
with open(path, "w", encoding="utf-8") as fh:
    fh.write(text)
PY
}

bump CMakeLists.txt \
    '(?m)^(project\(.*VERSION[ \t]+)[0-9][0-9.]*' "\\g<1>$new_version" 1
echo "  bumped CMakeLists.txt        project(VERSION $new_version)"

for overlay in values.yaml values-demo.yaml values-stage.yaml; do
    bump "helm/cpp-env/$overlay" \
        '(?m)^([ \t]*tag:[ \t]*")[0-9][0-9.]*(")' "\\g<1>$new_version\\g<2>" 3
    echo "  bumped helm/cpp-env/$overlay  3 image-tag pins -> $new_version"
done

for chart in cpp-api cpp-worker cpp-frontend cpp-env; do
    bump "helm/$chart/Chart.yaml" \
        '(?m)^(appVersion:[ \t]*")[^"]*(")' "\\g<1>$new_version\\g<2>" 1
    echo "  bumped helm/$chart/Chart.yaml  appVersion -> $new_version"
done

# --- verify ------------------------------------------------------------------
echo ""
"$SCRIPT_DIR/check-version-sync.sh"

# --- show the human what happened and what is next ---------------------------
echo ""
git -C "$REPO" --no-pager diff --stat -- \
    CMakeLists.txt helm/cpp-env helm/cpp-api/Chart.yaml \
    helm/cpp-worker/Chart.yaml helm/cpp-frontend/Chart.yaml
cat <<EOF

Next steps (nothing has been committed):
  1. review:  git diff
  2. commit everything (changelog + bumps) as ONE commit:
       git commit -am 'chore(release): $new_version — <one-line summary>'
  3. after it lands on master, tag to trigger release.yml:
       git tag v$new_version && git push origin v$new_version
EOF
