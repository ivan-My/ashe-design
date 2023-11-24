import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
    mode: 'development',
    server: {
        port: 5174,
    },
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
})
