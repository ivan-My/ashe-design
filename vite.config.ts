import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";@import "@/styles/theme-dark.scss";`,
      },
    },
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5174,
  },
})
