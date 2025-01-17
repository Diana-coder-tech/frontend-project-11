import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'no-param-reassign': ['error', { props: true }],
      'eol-last': ['error', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],
    },
  },
  pluginJs.configs.recommended,
];
