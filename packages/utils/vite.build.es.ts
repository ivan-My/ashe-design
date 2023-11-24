import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import path from 'path'
// // import commonjs from '@rollup/plugin-commonjs'
// import typescript from '@rollup/plugin-typescript'
// import { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default defineConfig({
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },
    plugins: [reactRefresh()],
    build: {
        emptyOutDir: false,
        minify: true,
        lib: {
            entry: '',
            name: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            input: './src/index.ts',
            output: {
                dir: path.resolve(__dirname, './esm'),
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
            },
            plugins: [
                // commonjs(),
                // typescript({ tsconfig: '../../tsconfig.json' }),
                // // getBabelOutputPlugin({
                // //     presets: ['@babel/preset-env'],
                // //     plugins: [
                // //         '@babel/plugin-transform-runtime',
                // //         '@babel/plugin-proposal-class-properties',
                // //         '@babel/plugin-proposal-object-rest-spread',
                // //         '@babel/plugin-syntax-dynamic-import',
                // //     ],
                // // }),
            ],
        },
    },
})
