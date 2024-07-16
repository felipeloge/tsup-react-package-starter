import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  treeshake: true,
  // sourcemap: 'inline',
  // minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ['cjs', 'esm'],
  external: ['react'],
  noExternal: ['@radix-ui/react-toggle', 'class-variance-authority', 'clsx'],
  injectStyle: false,
});
