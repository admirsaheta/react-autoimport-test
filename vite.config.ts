import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        tags: [
          {
            tag: 'script',
            attrs: {
              src: './.react/setup.js',
              type: 'module',
            },
            injectTo: 'head', 
          },
        ],
      },
    }),
  ],
});
