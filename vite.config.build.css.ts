/**
 * 生成总的style.css
 * */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import * as path from 'path'
import atImport from 'postcss-import'

const config = require('./package.json')

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* Released under the MIT License.
*/`

export default defineConfig({
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
                additionalData: `@import "@/styles/variables.scss";`,
            },
            postcss: {
                plugins: [atImport({ path: path.join(__dirname, 'src`') })],
            },
        },
    },
    plugins: [reactRefresh()],
    build: {
        emptyOutDir: false,
        rollupOptions: {
            output: {
                banner,
            },
        },
        lib: {
            entry: './dist/styles/themes/default.scss',
            formats: ['es'],
            name: 'style',
            fileName: 'style',
        },
    },
})
