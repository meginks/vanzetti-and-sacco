import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: { 
    assetsDir: 'assets',
    base: './',
    outDir: 'dist',
    // Explicitly include react-router-dom in the bundle
    rollupOptions: {
      external: [] // Empty array means don't mark anything as external
    }
  },
  resolve: {
    // Make sure npm packages are properly resolved
    alias: {
      // Add any aliases if needed
    }
  }

})