window.BENCHMARK_DATA = {
  "lastUpdate": 1786164042423,
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
      }
    ]
  }
}