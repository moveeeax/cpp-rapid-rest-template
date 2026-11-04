Frontend dependencies upgraded to clear `npm audit` (31 advisories, 2
critical, down to 3 moderate in the dev-only `openapi-typescript` codegen
chain, which has no fixed release): react-router-dom 7.18 (open redirect,
GHSA-wrjc-x8rr-h8h6), zod 4.6 (GHSA-mrhx-c7xc-m3w5), vite 8, vitest 5,
@vitejs/plugin-react 6, eslint 10 with react-hooks 7 / react-refresh 0.5,
@hookform/resolvers 7, plus postcss/nanoid/source-map-js via the lockfile;
an npm `overrides` entry lifts eslint's minimatch to 11.
