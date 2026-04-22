import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'images', dest: '.' },
        { src: 'sources', dest: '.' },
        { src: 'audio', dest: '.' },
      ],
    }),
  ],
  server: {
    fs: { allow: ['.'] },
    proxy: {
      '/api': { target: 'http://localhost:3001', changeOrigin: true, credentials: true },
      '/auth': { target: 'http://localhost:3001', changeOrigin: true, credentials: true },
    },
  },
  build: {
    outDir: 'dist',
  },
})
