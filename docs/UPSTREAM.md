# Staying in sync with the template (and giving fixes back)

Every downstream repo audited in August 2026 (three production forks) had NO
sync mechanism with this template — and each independently re-found and
re-fixed the same template bugs, while their generic fixes stranded in fork
history. This page is the contract that prevents both.

## Which fork strategy you picked decides your sync mechanics

| Strategy | How you got the code | Pulling template fixes | Pushing fixes back |
|---|---|---|---|
| **GitHub fork / full-history clone** | `git clone` of this repo, own remote | `git remote add upstream <template>` + `git merge upstream/master` (works BEST if you skipped `init-project.sh` or used minimal renames) | branch from `upstream/master`, cherry-pick your fix, PR |
| **degit / template-generate** (no shared history) | "Use this template" or `init-project.sh` after a squash import | cherry-pick by commit: `git fetch <template> master` then `git cherry-pick -x <sha>` (renames make some paths conflict — resolve once, the rename map is stable) | copy the diff into a fresh branch of the template and PR it |

Either way, add the remote once:

```bash
git remote add upstream https://github.com/moveeeax/cpp-rapid-rest-template
git fetch upstream
```

## Pulling: what to watch when you merge template updates

- **Release notes / CHANGELOG.md** are the merge guide — every behavior
  change is listed there per version.
- The CI gates protect you during the merge: `check-openapi-drift`,
  `check-routes-registered`, `check-test-buckets`, `check-version-sync`,
  `check-frontend-nginx-sync`, `check-helm-render` all run on your PR, so a
  half-merged invariant fails loudly instead of shipping.
- `vcpkg.json` `builtin-baseline` and `docker/Dockerfile` `ARG VCPKG_REF`
  are Renovate-owned — prefer the template's value on conflict.

## Pushing back: the backport-candidate discipline

The audit found ~15 generic fixes living only in forks (security escaping,
config coercion, connect timeouts, CI gates) — each one was a template bug
that every OTHER fork still had. To keep that from recurring:

1. When you fix something in a file that CAME FROM the template (`scripts/`,
   `.github/workflows/`, `docker/`, `helm/`, `src/` infrastructure,
   `tests/test_helpers.hpp`, …), ask: *would a fresh fork hit this too?*
2. If yes, mark the commit or PR with **`backport-candidate`** (a label, or
   just the word in the commit body) and say what's template-generic vs
   local in the PR description.
3. Periodically — or when the template maintainer runs a downstream audit —
   `git log --grep backport-candidate` is the whole worklist.

A one-line rule of thumb: **a fix without a domain noun in it belongs
upstream.** ("escape email HTML" → upstream; "escape invoice numbers in the
KZ tax PDF" → yours.)

## What the template promises in return

- Fixes land as focused PRs with downstream-fork commit references, so your
  cherry-picks are small.
- Scaffolding (`new-*.sh`) and gates keep working on renamed forks —
  `init-project.sh` owns the rename map and regenerates `Chart.lock`.
- The image namespace in `release.yml` derives from `github.repository`, so
  a fork's releases publish under its own GHCR namespace with zero edits.
