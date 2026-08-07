window.BENCHMARK_DATA = {
  "lastUpdate": 1786080379589,
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
      }
    ]
  }
}