import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // schema.gen.ts is (re)generated from docs/openapi.yaml — not ours to lint.
  { ignores: ['dist', 'src/lib/api/schema.gen.ts'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // allowConstantExport: shadcn primitives export cva() consts
      // (e.g. buttonVariants) next to the component — fine for HMR.
      // allowExportNames: pure helpers deliberately co-located with their
      // component so the unit tests can import them without a DOM
      // (guardDecision, submitJoinFromInvite) — HMR of those files falls
      // back to a full reload, which is fine.
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
          allowExportNames: ['guardDecision', 'submitJoinFromInvite'],
        },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  // The route manifest is a data module (routes table + lazy() page
  // factories), not a component module — Fast Refresh does a full reload for
  // it by design, so the per-component hint is noise there.
  {
    files: ['src/routes/manifest.tsx'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
  // Plain-JS config files at the repo root (tailwind, postcss, this file).
  {
    files: ['*.js'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: { ...globals.node, require: 'readonly' },
    },
  },
);
