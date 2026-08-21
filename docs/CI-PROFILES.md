# CI profiles: hosted runners, self-hosted runners, and why there is no arm64 CI

The workflows in `.github/workflows/` are tuned for GitHub-hosted runners.
This page records what changes (and what breaks) when you move them to
self-hosted/weak runners, and why arm64 is deliberately out of CI. Every rule
here was learned the expensive way on downstream forks of this template.

## Hosted-runner profile (the default in this repo)

- **Heavy jobs run in parallel.** `build-and-test`, `clang-tidy`, `sanitizers`
  and `tsan` each get their own VM, so parallelism costs nothing; each pulls
  builder layers from the gha/GHCR caches independently. Serializing them on
  hosted runners only stretches the wall clock.
- **Three cache layers.** `cache-from` lists `type=gha` plus
  `ghcr.io/<repo>/builder:cache`. The gha cache is evicted aggressively
  (7 days / 10 GB); the GHCR layer survives, EXCEPT after a vcpkg baseline
  bump, when the dependency world legitimately rebuilds (~35 min). On top of
  the image-layer caches, compilation itself goes through **sccache**
  (v0.17.0, pinned in `docker/Dockerfile`) backed by the GitHub Actions
  cache: the Actions credentials (`ACTIONS_RESULTS_URL` /
  `ACTIONS_RUNTIME_TOKEN`, exposed by `crazy-max/ghaction-github-runtime`)
  reach the Docker build as BuildKit **secrets** — never ARGs — so layer
  cache keys and image history stay credential-free, and
  `ACTIONS_CACHE_SERVICE_V2=on` is mandatory (without it sccache's ghac
  backend silently caches nothing). With 100% sccache hits the builder-stage
  compile takes ~24 s; warm wall clocks are roughly build-and-test ~12 min,
  clang-tidy ~4, sanitizers ~4, tsan ~4, runtime-smoke ~2.5.
- **Timeouts must let one cold build finish.** A job killed by its timeout
  BEFORE it exports the gha cache leaves the next run just as cold — the
  short timeout then reproduces the slow run it was guarding against. That is
  why the heavy compile jobs (build-and-test, sanitizers, tsan) carry
  `timeout-minutes: 90`, not 60 (clang-tidy gets 45).

## Self-hosted / weak-runner profile

If you point these workflows at self-hosted runners (ARC on Kubernetes, a
single beefy box, etc.), apply all of the following (each was a real incident
on a downstream fork):

1. **Serialize the heavy jobs.** Concurrent cold builds starve a shared
   runner: with build-and-test, clang-tidy and sanitizers all compiling the
   vcpkg world at once under a tight cap, every job gets killed before ANY of
   them exports a cache layer, so every subsequent run is cold too. Chain
   them (`clang-tidy`/`sanitizers`: `needs: build-and-test`) so the first
   job warms the cache once and the rest reuse it.
2. **Set honest timeouts.** Budget for the worst realistic case (cold vcpkg
   world + full suite), not the happy path. A generous timeout on a green run
   costs nothing; a tight one on a cold run costs the cache export and hence
   every following run.
3. **Retry transient fetch failures.** vcpkg downloads tarballs from GitHub,
   which intermittently answers 400/429, and vcpkg refuses to retry by
   itself. This repo retries inside `docker/Dockerfile` (clone + install,
   3 attempts; the cache mounts make retries cheap). On CI systems with
   job-level retries (GitLab `retry:`), also add
   `max: 2, when: [runner_system_failure, stuck_or_timeout_failure,
   script_failure]` to the heavy jobs.
4. **Don't assume tools exist on the runner image.** Minimal ARC images ship
   without `make` — compile steps go green and then the `make test` step dies
   with exit 127. Install the small tools (`make`, `jq`, …) in an early step
   or bake them into the runner image.

## arm64: build on real hardware or not at all

A C++ build of this dependency world under QEMU emulation (buildx
`linux/arm64` on an amd64 hosted runner) takes HOURS, not minutes — it never
fit any CI budget and was removed from the release workflow; release images
are amd64-only by default. If you need arm64 images, either build on native
arm64 hardware (a self-hosted arm64 runner) or accept amd64-only. Do not
re-add a QEMU arm64 leg to CI "for completeness" — it will time out.

When you do build multi-arch on native hardware, keep the
`id=vcpkg-downloads-${TARGETARCH}` scoping on the BuildKit cache mounts in
`docker/Dockerfile`: both platform legs run concurrently, and an unscoped
cache mount is shared between them — vcpkg then extracts its tools (ninja)
into the same path from both legs and one leg executes the other's binary.
