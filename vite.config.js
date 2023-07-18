import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  build: {
    lib: {
      entry: './src/zoomify.js',
      name: 'Zoomify',
    },
    minify: true,
    rollupOptions: {
      output: {
        format: ['es', 'umd'],
        plugins: [terser()],
      },
    },
  },
});
