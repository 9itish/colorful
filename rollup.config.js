import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  input: 'src/colorful.js', // Your source file
  output: [
    {
      file: 'dist/colorful.esm.js',
      format: 'esm', // ESM format
    },
    {
      file: 'dist/colorful.cjs.js',
      format: 'cjs', // CommonJS format
    },
    {
      file: 'dist/colorful.umd.js',
      format: 'umd',
      name: 'Colorful', // Expose Colorful globally in UMD
    },
    {
      file: 'dist/colorful.min.js',
      format: 'iife', // IIFE format (browser-specific)
      name: 'Colorful', // Global name for the IIFE
      plugins: [terser()], // Minification
      banner: `
        if (typeof window !== "undefined") {
          window.Colorful = Colorful;
        }
      `, // Add window exposure only in the IIFE build
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
  external: ['Colorful'], // To avoid conflicts in global space, especially in IIFE
});
