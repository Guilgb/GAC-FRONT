import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  logLevel: 'info',
  plugins: [react()],
  build: {
    target: 'esnext',
    sourcemap: true,  // Enable source maps for more detailed errors
    minify: false     // Sometimes disabling minification helps with debugging
  },
})
