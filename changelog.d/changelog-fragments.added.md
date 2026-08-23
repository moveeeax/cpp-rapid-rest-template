Changelog fragments: a PR now records its changelog entry as its own file
`changelog.d/<topic>.<type>.md` (type ∈ added|changed|fixed|removed|security,
format: `changelog.d/README.md`) instead of competing for the same
`[Unreleased]` lines — `scripts/release.sh` folds the fragments in and
retitles `[Unreleased]` itself, `./scripts/assemble-changelog.sh --check`
gates fragment format in CI (fragments stay optional, direct `[Unreleased]`
edits remain legal), and the gate selftest grows to 20 planted breakages.
