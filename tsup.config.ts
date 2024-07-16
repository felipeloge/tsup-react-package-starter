import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  treeshake: {
    moduleSideEffects: 'no-external',
  },
  // sourcemap: 'inline',
  // minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ['cjs', 'esm'],
  injectStyle: false,
});
