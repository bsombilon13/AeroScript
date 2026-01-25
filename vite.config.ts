
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Vite doesn't polyfill process.env by default. 
    // This ensures process.env.API_KEY is available in the browser during build.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
