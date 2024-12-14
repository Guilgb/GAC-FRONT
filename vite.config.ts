import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  logLevel: 'info',
  plugins: [react()],
  build: {
    target: 'esnext',
    sourcemap: true,
    minify: false
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '3000')
  },
  define: {
    'process.env': process.env
  }
})
