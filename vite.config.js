import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  build: {
    lib: {
      entry: './src/zoomifyJs.js',
      name: 'ZoomifyJs',
    },
    minify: 'terser',
    rollupOptions: {
      output: {
        chunkFileNames: 'zoomifyJs',
        format: ['es', 'umd'],
        plugins: [terser()],
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
});
