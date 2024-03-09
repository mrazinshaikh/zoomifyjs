import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  build: {
    lib: {
      entry: './src/zoomifyJs.js',
      name: 'ZoomifyJs',
    },
    minify: isProd ? 'terser' : false,
    rollupOptions: {
      output: {
        chunkFileNames: 'zoomifyJs',
        format: ['es', 'umd'],
        plugins: isProd ? [terser()] : [],
      },
    },
    terserOptions: {
      compress: {
        drop_console: isProd,
        drop_debugger: isProd
      }
    }
  },
});
