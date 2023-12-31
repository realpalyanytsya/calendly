import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@entities': '/src/entities',
      '@shared': '/src/shared',
      '@features': '/src/features',
      '@widgets': '/src/widgets',
    },
  },
});
