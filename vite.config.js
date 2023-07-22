import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  build: {
    lib: {
      entry: './src/zoomifyJs.js',
      name: 'ZoomifyJs',
    },
    minify: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'zoomifyJs',
        format: ['es', 'umd'],
        plugins: [terser()],
      },
    },
  },
});
