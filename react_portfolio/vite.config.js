import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
build: {
    rollupOptions: {
      input: './index.html', // Make sure Vite uses index.html as the entry point
      external: ['/src/main.jsx'], // Exclude this file from Rollup bundling
    },
  },
})
