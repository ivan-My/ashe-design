import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const path = require('path')
const atImport = require('postcss-import')
const config = require('./package.json')

const { resolve } = path

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,

        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`,
      },
    },
    postcss: {
      plugins: [
        atImport({ path: path.join(__dirname, 'src`') }),
        require('autoprefixer')({
          overrideBrowserslist: [
            '> 0.5%',
            'last 2 versions',
            'ie > 11',
            'iOS >= 10',
            'Android >= 5',
          ],
        }),
      ],
    },
  },
  plugins: [reactRefresh()],
  build: {
    target: 'es2015',
    outDir: './doc/',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        demo: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: `doc-${config.version}/[name].js`,
        chunkFileNames: `doc-${config.version}/[name].js`,
        assetFileNames: `doc-${config.version}/[name].[ext]`,
      },
    },
  },
})
