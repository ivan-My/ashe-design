import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import config from './src/config.json'

const entries: any = {
    'ashe-react.es': path.join(
        __dirname,
        `./src/components/ashe.react.build.ts`
    ),
}
const outputEntries: any = {}

config.nav.forEach((item) => {
    item.packages.forEach((element: any) => {
        const { name, show, exportEmpty, exclude } = element
        if (exclude) return
        if (show || exportEmpty) {
            outputEntries[`./${name.toLowerCase()}`] = `./${name}`
            entries[name] = path.join(
                __dirname,
                `./src/components/${name.toLowerCase()}/index.ts`
            )
        }
    })
})

export default defineConfig({
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },
    plugins: [reactRefresh()],
    build: {
        emptyOutDir: false,
        minify: false,
        lib: {
            entry: '',
            name: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            input: entries,
            // 请确保外部化那些你的库中不需要的依赖
            external: (id, parent) =>
                /^react/.test(id) ||
                /^react-dom/.test(id) ||
                /^classnames/.test(id) ||
                /^@use-gesture/.test(id) ||
                /^@react-spring/.test(id) ||
                /^@nutui\/icons-react/.test(id),
            output: {
                paths: (id) => {
                    return /@\/components/.test(id)
                        ? `${
                              outputEntries[id.replace('@/components/', './')]
                          }.js`
                        : id
                },
                dir: path.resolve(__dirname, './dist/esm'),
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
            },
            plugins: [
                commonjs(),
                typescript(),
                getBabelOutputPlugin({
                    presets: ['@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-syntax-dynamic-import',
                    ],
                }),
            ] as never,
        },
    },
})
