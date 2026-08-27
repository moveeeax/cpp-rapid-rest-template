window.BENCHMARK_DATA = {
  "lastUpdate": 1787840683574,
  "repoUrl": "https://github.com/moveeeax/cpp-rapid-rest-template",
  "entries": {
    "Throughput": [
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf127824654082a3215ace82c0b3495cf6daceb4",
          "message": "fix(bench): make bind-mounted logs dir writable for the app container uid (#9)",
          "timestamp": "2026-08-07T05:17:33Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/bf127824654082a3215ace82c0b3495cf6daceb4"
        },
        "date": 1786080376479,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 21454.53,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8485.98,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf127824654082a3215ace82c0b3495cf6daceb4",
          "message": "fix(bench): make bind-mounted logs dir writable for the app container uid (#9)",
          "timestamp": "2026-08-07T05:17:33Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/bf127824654082a3215ace82c0b3495cf6daceb4"
        },
        "date": 1786081023033,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 27237.53,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 9738.3,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "53560dffd71d8ad57fe1703468ce78c03d7e0da5",
          "message": "ci(bench-nightly): temporarily move cron to 01:00 UTC to verify the schedule path",
          "timestamp": "2026-08-08T00:47:05Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/53560dffd71d8ad57fe1703468ce78c03d7e0da5"
        },
        "date": 1786158330945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 21037.07,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8497.91,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "f156daacc45bd3d1539aeff7820c846731c4c508",
          "message": "ci(bench-nightly): restore nightly cron to 03:20 UTC after schedule-path verification",
          "timestamp": "2026-08-08T03:06:49Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/f156daacc45bd3d1539aeff7820c846731c4c508"
        },
        "date": 1786164038755,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 21002.18,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8237.81,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "7385511a6882f41ca8001f594c3990afcc4166f9",
          "message": "fix(docker): ship ca-certificates in the runtime image\n\nWithout the CA bundle every outbound TLS from the app fails — found live as\nthe Mailer's SMTP STARTTLS to Brevo dying with 'Problem with the SSL CA\ncert'. The reference fork hit and fixed the identical failure in prod; the\nbackport missed it because no task diffed the runtime image stage.",
          "timestamp": "2026-08-09T04:21:08Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/7385511a6882f41ca8001f594c3990afcc4166f9"
        },
        "date": 1786250545645,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 21062.67,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8532.64,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786338402755,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 26939.18,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 9489.5,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786423957086,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 43213.9,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 15975.77,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786511743203,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 21002.81,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8396.17,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786598347606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 21390.1,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8469.02,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786684465900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 33848.87,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 12218.26,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786766740741,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 27492.74,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 9681.18,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786853470027,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 34549.29,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 12375.68,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786940132087,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 20839.14,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8135.08,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1787026181683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 47271.46,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 17010.75,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1787113745338,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 33552.33,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 12258.37,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1787200369840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 26918.65,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 9436.72,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2f03cfbc5d1d97582caf74623d2495290685520c",
          "message": "docs: changelog for wave 2 (downstream hardening), mark the plan executed (#28)",
          "timestamp": "2026-08-20T21:17:54Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/2f03cfbc5d1d97582caf74623d2495290685520c"
        },
        "date": 1787285662383,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 40654.22,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 15923.5,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c0145ae560df381b53ff7262ba04ee67ed174b0e",
          "message": "feat(orgs): add-orgs.sh multi-tenancy starter + org-scoped scaffolding (#25) (#40)\n\nMulti-tenancy as a generator option, not a runtime flag: add-orgs.sh\ninstalls src/tenancy/ (OrgCrudBase with no unscoped reads, fail-closed\nOrgContext, deny-by-default role matrix), the organizations API, org\nguards, the org claim mint, migration and four test suites — one-shot,\nanchor-checked patches, refuses a second run. new-resource.sh gains\n--org-scoped (repo on OrgCrudBase, handlers open with the org guard\npair, org_id FK in the migration) and fails clearly when the kit is\nabsent. Template itself only grows the passive half: AuthPrincipal::org\nplus optional \"org\" claim parsing in verify_jwt. docs/ORGS.md covers\nthe two role layers, claim/switch semantics and instant revocation.",
          "timestamp": "2026-08-21T21:34:53Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/c0145ae560df381b53ff7262ba04ee67ed174b0e"
        },
        "date": 1787371817921,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 40020.09,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8467.06,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "76e614adf3d89fc4561e3a6570f28ca71937ba66",
          "message": "arch(phase2): core and middleware bodies de-inlined into app_core (#46)\n\n* arch(phase2): core and middleware bodies de-inlined into app_core\n\nThird and final phase-2 pair, same shape as billing (934f753) and jobs\n(f355b3a): non-template bodies of core/Core (Application init/shutdown\norchestration, config validation, metric registrars, health registry,\nsingleton) and api/Middleware (the full advice chain, short_circuit,\naccess log + HTTP metrics, docs endpoints) moved to paired .cpp files the\napp_core GLOB picks up with no CMake edit. Behavior unchanged.\n\nHeaders: 1646 -> 353 lines (Core.hpp 867 -> 243, Middleware.hpp\n779 -> 110); 1470 lines of bodies now compile once in app_core (Core.cpp\n750, Middleware.cpp 720) instead of per-TU.\n\nIncludes that left the headers: Core.hpp dropped its 13 subsystem\nincludes (database/pqxx, cache/redis++, jobs, messaging/Kafka,\nbilling/PayPal, email, storage, security x3, tasks,\nobservability/OTel+prometheus, Pg, Strings, version.hpp, direct spdlog)\n— it now carries only std containers, core/Modules.hpp and\nutils/Config.hpp; Middleware.hpp dropped the OTel SDK, spdlog,\nRequestUtils and the security/observability/utils module headers — only\ndrogon/HttpRequest.h + HttpResponse.h survive for the short_circuit\nsignature.\n\nFile-local state moved behind anonymous namespaces in the .cpp files:\nthe global_app singleton (global_jobs pattern), the HTTP metric families\nand duration buckets, the HSTS registration-time settings, and the\ndetail/access_log_detail helpers (no external consumers — verified by\ngrep). check-module-deps.sh now allowlists core/Core.cpp as Core.hpp's\nown body file (rule 2, selftest still 14/14); docs/module-deps.txt edges\nare unchanged — Core.cpp keeps the same core -> * edges the header had,\nMiddleware.cpp the api -> * ones. Consumers got their own includes for\nwhat they use: main.cpp spdlog+nlohmann, tests/test_helpers.hpp\nutils/Retry.hpp.\n\n* fix(phase2): test_billing_metrics lost transitive PayPalClient include via slim Core.hpp",
          "timestamp": "2026-08-22T19:50:42Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/76e614adf3d89fc4561e3a6570f28ca71937ba66"
        },
        "date": 1787458399548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 61238.54,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 12735.74,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e01f33e1d7934817a266d39f89ee2470bd64991f",
          "message": "chore(release): 1.6.0 — modularity arc, billing module, fork tooling, CI hardening (#67)",
          "timestamp": "2026-08-23T16:14:45Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/e01f33e1d7934817a266d39f89ee2470bd64991f"
        },
        "date": 1787545034682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 72564.16,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 15436.36,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e01f33e1d7934817a266d39f89ee2470bd64991f",
          "message": "chore(release): 1.6.0 — modularity arc, billing module, fork tooling, CI hardening (#67)",
          "timestamp": "2026-08-23T16:14:45Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/e01f33e1d7934817a266d39f89ee2470bd64991f"
        },
        "date": 1787631079173,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 85538.71,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 18632.13,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e01f33e1d7934817a266d39f89ee2470bd64991f",
          "message": "chore(release): 1.6.0 — modularity arc, billing module, fork tooling, CI hardening (#67)",
          "timestamp": "2026-08-23T16:14:45Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/e01f33e1d7934817a266d39f89ee2470bd64991f"
        },
        "date": 1787717685237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 39241.99,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 8208.7,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e01f33e1d7934817a266d39f89ee2470bd64991f",
          "message": "chore(release): 1.6.0 — modularity arc, billing module, fork tooling, CI hardening (#67)",
          "timestamp": "2026-08-23T16:14:45Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/e01f33e1d7934817a266d39f89ee2470bd64991f"
        },
        "date": 1787840681659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "healthz req/s",
            "value": 77008.02,
            "unit": "req/s"
          },
          {
            "name": "jobs req/s",
            "value": 17170.93,
            "unit": "req/s"
          }
        ]
      }
    ],
    "Latency & footprint": [
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf127824654082a3215ace82c0b3495cf6daceb4",
          "message": "fix(bench): make bind-mounted logs dir writable for the app container uid (#9)",
          "timestamp": "2026-08-07T05:17:33Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/bf127824654082a3215ace82c0b3495cf6daceb4"
        },
        "date": 1786080379011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 8.96,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 22.66,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 23.84,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 49.35,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 110.8,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 895,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf127824654082a3215ace82c0b3495cf6daceb4",
          "message": "fix(bench): make bind-mounted logs dir writable for the app container uid (#9)",
          "timestamp": "2026-08-07T05:17:33Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/bf127824654082a3215ace82c0b3495cf6daceb4"
        },
        "date": 1786081024649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 6.95,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 19.53,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 19.54,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 40.72,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 110.8,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 888,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.2,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "53560dffd71d8ad57fe1703468ce78c03d7e0da5",
          "message": "ci(bench-nightly): temporarily move cron to 01:00 UTC to verify the schedule path",
          "timestamp": "2026-08-08T00:47:05Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/53560dffd71d8ad57fe1703468ce78c03d7e0da5"
        },
        "date": 1786158334071,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 8.93,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 23.59,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 23.69,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 110.8,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 880,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 3.8,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "f156daacc45bd3d1539aeff7820c846731c4c508",
          "message": "ci(bench-nightly): restore nightly cron to 03:20 UTC after schedule-path verification",
          "timestamp": "2026-08-08T03:06:49Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/f156daacc45bd3d1539aeff7820c846731c4c508"
        },
        "date": 1786164041709,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 9.14,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 21.76,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 23.35,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 50.96,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 110.8,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 902,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "7385511a6882f41ca8001f594c3990afcc4166f9",
          "message": "fix(docker): ship ca-certificates in the runtime image\n\nWithout the CA bundle every outbound TLS from the app fails — found live as\nthe Mailer's SMTP STARTTLS to Brevo dying with 'Problem with the SSL CA\ncert'. The reference fork hit and fixed the identical failure in prod; the\nbackport missed it because no task diffed the runtime image stage.",
          "timestamp": "2026-08-09T04:21:08Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/7385511a6882f41ca8001f594c3990afcc4166f9"
        },
        "date": 1786250547835,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 9.13,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 22.06,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 23.06,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 47.76,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 830,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786338404761,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 7.04,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 19.35,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 20.53,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 42.34,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 915,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 3.8,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786423961582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 4.4,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 12.66,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 12.58,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 26.07,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 852,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786511745507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 9.12,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 22.7,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 23.22,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 47.73,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 837,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.3,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786598350411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 9.04,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 22.64,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 22.58,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 50.51,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 886,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786684469663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 5.58,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 15.82,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 16.9,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 33.92,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 772,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 3.9,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786766743566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 6.92,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 18.46,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 20.19,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 42.8,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 885,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786853473141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 5.45,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 16.1,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 15.87,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 32.97,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 798,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1786940134933,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 9.21,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 23.31,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 23.14,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 47.19,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 929,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1787026185998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 3.96,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 13.99,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 11.77,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 24.25,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 113.7,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 914,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.2,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1787113747537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 5.63,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 16.21,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 15.76,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 32.69,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 107.5,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 822,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "id": "9535dcb00ff23230cf2d0c7e51be23b93a270c0b",
          "message": "docs: changelog for 1.5.3",
          "timestamp": "2026-08-09T11:45:46Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/9535dcb00ff23230cf2d0c7e51be23b93a270c0b"
        },
        "date": 1787200372899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 7.03,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 20.49,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 20.34,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 45.32,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 107.5,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 901,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2f03cfbc5d1d97582caf74623d2495290685520c",
          "message": "docs: changelog for wave 2 (downstream hardening), mark the plan executed (#28)",
          "timestamp": "2026-08-20T21:17:54Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/2f03cfbc5d1d97582caf74623d2495290685520c"
        },
        "date": 1787285665339,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 4.66,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 13.78,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 12.29,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 24.75,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 107.6,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 804,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 6.2,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c0145ae560df381b53ff7262ba04ee67ed174b0e",
          "message": "feat(orgs): add-orgs.sh multi-tenancy starter + org-scoped scaffolding (#25) (#40)\n\nMulti-tenancy as a generator option, not a runtime flag: add-orgs.sh\ninstalls src/tenancy/ (OrgCrudBase with no unscoped reads, fail-closed\nOrgContext, deny-by-default role matrix), the organizations API, org\nguards, the org claim mint, migration and four test suites — one-shot,\nanchor-checked patches, refuses a second run. new-resource.sh gains\n--org-scoped (repo on OrgCrudBase, handlers open with the org guard\npair, org_id FK in the migration) and fails clearly when the kit is\nabsent. Template itself only grows the passive half: AuthPrincipal::org\nplus optional \"org\" claim parsing in verify_jwt. docs/ORGS.md covers\nthe two role layers, claim/switch semantics and instant revocation.",
          "timestamp": "2026-08-21T21:34:53Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/c0145ae560df381b53ff7262ba04ee67ed174b0e"
        },
        "date": 1787371821292,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 4.6,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 17.71,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 23.09,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 48.35,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 108,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 901,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.2,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "76e614adf3d89fc4561e3a6570f28ca71937ba66",
          "message": "arch(phase2): core and middleware bodies de-inlined into app_core (#46)\n\n* arch(phase2): core and middleware bodies de-inlined into app_core\n\nThird and final phase-2 pair, same shape as billing (934f753) and jobs\n(f355b3a): non-template bodies of core/Core (Application init/shutdown\norchestration, config validation, metric registrars, health registry,\nsingleton) and api/Middleware (the full advice chain, short_circuit,\naccess log + HTTP metrics, docs endpoints) moved to paired .cpp files the\napp_core GLOB picks up with no CMake edit. Behavior unchanged.\n\nHeaders: 1646 -> 353 lines (Core.hpp 867 -> 243, Middleware.hpp\n779 -> 110); 1470 lines of bodies now compile once in app_core (Core.cpp\n750, Middleware.cpp 720) instead of per-TU.\n\nIncludes that left the headers: Core.hpp dropped its 13 subsystem\nincludes (database/pqxx, cache/redis++, jobs, messaging/Kafka,\nbilling/PayPal, email, storage, security x3, tasks,\nobservability/OTel+prometheus, Pg, Strings, version.hpp, direct spdlog)\n— it now carries only std containers, core/Modules.hpp and\nutils/Config.hpp; Middleware.hpp dropped the OTel SDK, spdlog,\nRequestUtils and the security/observability/utils module headers — only\ndrogon/HttpRequest.h + HttpResponse.h survive for the short_circuit\nsignature.\n\nFile-local state moved behind anonymous namespaces in the .cpp files:\nthe global_app singleton (global_jobs pattern), the HTTP metric families\nand duration buckets, the HSTS registration-time settings, and the\ndetail/access_log_detail helpers (no external consumers — verified by\ngrep). check-module-deps.sh now allowlists core/Core.cpp as Core.hpp's\nown body file (rule 2, selftest still 14/14); docs/module-deps.txt edges\nare unchanged — Core.cpp keeps the same core -> * edges the header had,\nMiddleware.cpp the api -> * ones. Consumers got their own includes for\nwhat they use: main.cpp spdlog+nlohmann, tests/test_helpers.hpp\nutils/Retry.hpp.\n\n* fix(phase2): test_billing_metrics lost transitive PayPalClient include via slim Core.hpp",
          "timestamp": "2026-08-22T19:50:42Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/76e614adf3d89fc4561e3a6570f28ca71937ba66"
        },
        "date": 1787458403258,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 3,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 12.18,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 15.26,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 31.02,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 108.5,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 774,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.3,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e01f33e1d7934817a266d39f89ee2470bd64991f",
          "message": "chore(release): 1.6.0 — modularity arc, billing module, fork tooling, CI hardening (#67)",
          "timestamp": "2026-08-23T16:14:45Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/e01f33e1d7934817a266d39f89ee2470bd64991f"
        },
        "date": 1787545037222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 2.56,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 10.07,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 12.93,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 26.53,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 109.1,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 879,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 3.9,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e01f33e1d7934817a266d39f89ee2470bd64991f",
          "message": "chore(release): 1.6.0 — modularity arc, billing module, fork tooling, CI hardening (#67)",
          "timestamp": "2026-08-23T16:14:45Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/e01f33e1d7934817a266d39f89ee2470bd64991f"
        },
        "date": 1787631081818,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 2.16,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 9.02,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 10.45,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 20.78,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 109.1,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 892,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 4.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarassov",
            "username": "moveeeax",
            "email": "michael@tarassov.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e01f33e1d7934817a266d39f89ee2470bd64991f",
          "message": "chore(release): 1.6.0 — modularity arc, billing module, fork tooling, CI hardening (#67)",
          "timestamp": "2026-08-23T16:14:45Z",
          "url": "https://github.com/moveeeax/cpp-rapid-rest-template/commit/e01f33e1d7934817a266d39f89ee2470bd64991f"
        },
        "date": 1787717689889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "healthz p50",
            "value": 4.7,
            "unit": "ms"
          },
          {
            "name": "healthz p99",
            "value": 17.91,
            "unit": "ms"
          },
          {
            "name": "jobs p50",
            "value": 22.6,
            "unit": "ms"
          },
          {
            "name": "jobs p99",
            "value": 50.6,
            "unit": "ms"
          },
          {
            "name": "runtime image size",
            "value": 115.3,
            "unit": "MB"
          },
          {
            "name": "cold start to /ready",
            "value": 836,
            "unit": "ms"
          },
          {
            "name": "idle RSS",
            "value": 3.9,
            "unit": "MB"
          }
        ]
      }
    ]
  }
}