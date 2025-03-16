// eslint.config.mjs

import globals from 'globals'
import tseslint from 'typescript-eslint'
// import importPlugin from 'eslint-plugin-import';
import typescript from '@typescript-eslint/eslint-plugin'
// import typescriptParser from '@typescript-eslint/parser';

export default {
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    '@typescript-eslint': typescript,
    // 'import': importPlugin
  },
  ignores: ['test/**/*', 'dist/**/*', '.nitro/**/*', 'node_modules/**/*'],
  languageOptions: {
    parser: tseslint.parser, //typescriptParser,//
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 'latest',
      sourceType: 'module',
      tsconfigRootDir: process.cwd(),
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    // TypeScript rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Disable problematic import rules
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',

    // Module rules
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
  },
}
