import react from '@vitejs/plugin-react';
import { oxfmt, oxlint } from 'oxc-config-mantine';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, lazyPlugins } from 'vite-plus';

export default defineConfig({
  fmt: {
    ...oxfmt,
    ignorePatterns: [
      ...oxfmt.ignorePatterns,
      'dist',
      'storybook-static',
      '*.html',
      '*.yml',
      '*.json',
      '*.css',
    ],
  },
  lint: {
    ...oxlint,
    ignorePatterns: ['**/*.{mjs,cjs,js,d.ts,d.mts}', 'dist', 'storybook-static'],
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [
    react(),
    {
      ...visualizer({ filename: 'dist/stats.html', gzipSize: true, open: true }),
      apply: (_config, { mode }) => mode === 'analyze',
    },
  ]),
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },

  resolve: {
    tsconfigPaths: true,
  },
});
