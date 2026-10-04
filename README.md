# Mantine Vite template

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Vite+](https://viteplus.dev/) unified toolchain: Vite, Vitest, Oxlint and Oxfmt are run with `vp` and configured in `vite.config.mjs`

## Vite+ CLI

The template works without any global installation: `vp` is installed as a dev dependency and all npm scripts use it.

Optionally, you can install the [global `vp` CLI](https://viteplus.dev/guide/global-cli).
It automatically switches to the Node.js version pinned in `.node-version` and lets you run commands directly, for example `vp dev` or `vp check --fix` instead of `yarn vp check --fix`.

## npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `build:analyze` – build the app and open bundle size visualization (`dist/stats.html`)
- `preview` – locally preview production build

### Testing scripts

- `check` – checks formatting, lint rules and TypeScript types with `vp check`
- `check:fix` – same as `check`, fixes formatting and auto-fixable lint errors
- `typecheck` – checks TypeScript types
- `lint` – runs oxlint and stylelint
- `format:test` – checks files with oxfmt
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `check`, `stylelint`, `vitest` and `build` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `format:write` – formats all files with oxfmt
