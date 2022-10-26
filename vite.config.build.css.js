import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';
import atImport from 'postcss-import';
const config = require('./package.json');
const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/`;
const { resolve } = path;
export default defineConfig({
    resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
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
});
