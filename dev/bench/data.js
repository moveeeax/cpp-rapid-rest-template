window.BENCHMARK_DATA = {
  "lastUpdate": 1786853473843,
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
      }
    ]
  }
}