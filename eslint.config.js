// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  {
    // ESLint specific rules
    // https://eslint.org/docs/latest/rules/
    rules: {
      'array-callback-return': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'capitalized-comments': 'error',
      curly: 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-notation': 'error',
      'no-alert': 'error',
      'no-console': 'warn',
      'no-else-return': 'error',
      'no-eval': 'warn',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-call': 'error',
      'no-useless-constructor': 'error',
      'no-useless-return': 'error',
      'object-shorthand': 'error',
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-has-own': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'require-await': 'error',
      yoda: 'error',
      radix: 'error',
      eqeqeq: 'error',
      'no-undef': 'off',
    },
  },
  {
    // TypeScript ESLint specific rules
    // https://typescript-eslint.io/rules/
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
    },
  }
);
