import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...mantine,
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       project: './tsconfig.json',
  //     },
  //   },
  // },
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts'] },
);