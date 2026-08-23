# Testing

What the test suite does and does not cover, and how to run each part. The goal
is that "the suite is green" means something specific — not "451 passed, 171 of
them skipped."

## Buckets

| Bucket | Count | Needs | Runs with | What it covers |
|---|---:|---|---|---|
| **unit** | 265 | nothing (sidecar-free) | `make test-unit` | Pure logic: validation, tokens, JWT, password hashing, rate-limit math, serialization, the permission bitmask, retry/backoff, templates. |
| **integration** | 151 | Postgres + Redis | `make test` | Repositories against a real Postgres, cache + rate limiter against a real Redis, migrations, the account/admin/audit/auth flows, job dispatch + DLQ. |
| **api** | 20 | Postgres + Redis | `make test` | Controller request/response behavior wired through the real handler stack. |
| **e2e** | 15 | Postgres + Redis | `make test-e2e` | A real Drogon server + client on the wire: auth gate, cookie sessions, refresh rotation/revocation, Idempotency-Key replay, tracing headers. |

Total: **451** test cases. `make test-unit` is the fast, dependency-free loop;
`make test` brings up sidecars and runs unit + integration + api, then the e2e
binary; `make test-e2e` runs just the wire-level suite. `make ci-local` runs
the lot the way CI does.

## Day-to-day loops — which target when

- **Recommended inner loop: `make test-local NAME='Foo*'`** — native
  incremental build (CMake `dev` preset, no Docker) + both gtest binaries with
  a `--gtest_filter`. Seconds per iteration once configured. One-time setup:
  set `VCPKG_ROOT` and run `make configure-local`. The integration binary
  needs a running stack (`make up`); without it those suites skip locally.
  Variants: `make test-unit-local` (sidecar-free subset), `make test-watch`
  (re-run on save via watchexec/entr).
- **`make test`** (alias: `make test-quick`) — rebuild the Docker test image
  with the layer cache, then the full suite. Warm builder layers: ~2 min,
  dominated by actual compilation of your change — that time is the price of
  the run testing the code you wrote. Cold (no `make warm-cache`): ~30 min.
  This is what CI runs.
- **`make test-rerun`** — re-run the LAST-BUILT test image without
  rebuilding. Source edits do **not** land in it, so it can never verify a
  change; its only honest use is re-checking a flaky test. (This was the old
  `test-quick` behavior — renamed because "~5 s green" after an edit proved
  nothing.)

## Coverage

`make coverage` builds with instrumentation and runs **all** buckets, so the
number reflects the DB/cache/auth/jobs code too — not just unit-reachable lines.
The integration and e2e buckets need Postgres + Redis (`make up` first); without
them those buckets are skipped and the reported coverage drops accordingly.

## Known gaps (be honest about these before you rely on them)

- **No behavioral coverage** for Kafka messaging, SMTP delivery (the Mailer is
  exercised through the jobs path, not against a real SMTP server), or Postgres
  streaming replication. These have lifecycle/health guards only — wiring, not
  behavior.
- **Frontend** has unit tests for the session-refresh machinery and the
  permission mirror, but no component/route tests for the admin/auth UI.
- **Sanitizers (ASan/UBSan and TSan)** cover the **unit** and
  **integration/api** buckets: the CI `sanitizers` and `tsan` jobs build both
  test binaries and run the integration one against the compose `test`-profile
  Postgres/Redis with `CI_REQUIRE_INFRA=1` (a missing sidecar fails the run
  instead of skipping it green). The **e2e** binary is still uninstrumented.
  Historical note: integration was unit-only for a while — compiling its TUs
  under ASan OOM'd an 8 GB build VM back when every heavy body was header-only;
  the `app_core` STATIC extraction (ADR 0003 as amended) compiles those bodies
  once and removed the blocker.

## A disabled test that marks a real bug

`tests/integration/test_jobs.cpp` contains
`DISABLED_CancelIsAtomicUnderContention`. It is **disabled because it documents
an unfixed race**, not because it is flaky: two concurrent callers of a job's
`cancel()` can both observe the not-yet-cancelled state and both write a terminal
status (a TOCTOU on the job row). Re-enable it once `cancel()` does a single
conditional state transition (e.g. an `UPDATE ... WHERE status = 'pending'`
guard) instead of read-then-write. Until then, treat single-cancel as supported
and concurrent-cancel as undefined.
