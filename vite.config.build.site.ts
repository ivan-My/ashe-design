import { defineConfig, PluginOption } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { visualizer } from 'rollup-plugin-visualizer'
import { viteExternalsPlugin } from 'vite-plugin-externals'

const path = require('path')
const atImport = require('postcss-import')

const { resolve } = path

export default defineConfig({
    // base: '/react/',
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
                // eslint-disable-next-line global-require
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
    plugins: [
        reactRefresh(),
        viteExternalsPlugin({
            react: 'React',
            'react-dom': 'ReactDOM',
        }),
        visualizer({
            emitFile: false,
            open: true,
        }) as PluginOption,
    ],
    build: {
        // sourcemap: true,
        target: 'es2015',
        outDir: './html/',
        minify: true,
        cssCodeSplit: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                demo: resolve(__dirname, 'demo.html'),
            },
            output: {
                chunkFileNames: 'static/[name]-[hash].js',
                entryFileNames: 'static/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            },
        },
    },
})
