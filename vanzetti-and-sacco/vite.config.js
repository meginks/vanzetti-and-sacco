import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: './', // This tells Vite to use relative paths instead of absolute
  // rest of your config 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    manualChunks: undefined,
    entryFileNames: `assets/[name].[hash].[timestamp].js`,
    chunkFileNames: `assets/[name].[hash].[timestamp].js`,
    assetFileNames: `assets/[name].[hash].[timestamp].[ext]`
  }, 
    // Make sure JSX handling is set appropriately
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: []
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
          '.jsx': 'jsx'
        }
      }
    }

})