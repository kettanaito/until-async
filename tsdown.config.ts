import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: './build',
  format: 'esm',
  outExtensions: () => ({
    js: '.js',
    dts: '.d.ts',
  }),
  dts: true,
  sourcemap: true,
})
