import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Resolve the `@` alias to the `src` directory
    },
  },
  server: {
    port: 3000, // Default port for the development server
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'dist', // Output directory for the production build
    emptyOutDir: true, // Clear the output directory before building
  },
  envDir: './', // Directory where environment variables are stored
});