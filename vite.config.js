import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': '/src/components', // Ensuring the path starts with `/src` assuming the root is where your src directory is
      '@context': '/src/context'
    }
  }
});
