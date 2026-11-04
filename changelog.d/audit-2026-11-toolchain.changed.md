Frontend image and CI build on Node 26 LTS (was EOL Node 20) and serve
from `nginxinc/nginx-unprivileged:1.30-alpine` (stable branch; 1.27 is out
of support). GitHub Actions bumped to current majors, still SHA-pinned
(checkout v7, cache v6, upload-artifact v7, download-artifact v8,
setup-node v7, build-push v7, login v4, setup-buildx v4,
ghaction-github-runtime v4, action-gh-release v3).
