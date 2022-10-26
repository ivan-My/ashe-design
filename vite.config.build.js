import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import autoprefixer from 'autoprefixer';
import * as path from 'path';
const config = require('./package.json');
const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @jdf2e.
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
                plugins: [
                    autoprefixer({
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
    },
    plugins: [reactRefresh()],
    build: {
        minify: false,
        emptyOutDir: true,
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                banner,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        lib: {
            entry: 'src/components/ashe.react.build.ts',
            name: 'ashe.react',
            fileName: 'ashe.react',
            formats: ['es', 'umd'],
        },
    },
});
