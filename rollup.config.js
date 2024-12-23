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
      format: 'umd', // UMD format for browser and Node.js
      name: 'Colorful', // Global variable name for browsers
    },
    {
      file: 'dist/colorful.min.js',
      format: 'iife', // Browser-specific format
      name: 'Colorful',
      plugins: [terser()], // Minification
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
});
