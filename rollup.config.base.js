import path from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from "@rollup/plugin-typescript"
import { uglify as RollupUglify } from 'rollup-plugin-uglify'
import RollupCopy from 'rollup-plugin-copy'
import RollupPluginStyle from './build/rollup/rollup-plugin-style.js'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
const config = require('./src/config.json')

const cwd = process.cwd()
const resolveFile = filePath => path.join(cwd, filePath)

const externalPackages = [
    'classnames',
    'react',
    'react-dom',
]

const entries = {
    'ashe-react.es': path.join(cwd, '/src/components/ashe.react.build.ts')
}

config.nav.map(item => {
    item.packages.forEach(ele => {
        const { name } = ele
        entries[name] = path.join(cwd, `/src/components/${name.toLowerCase()}/index.ts`)
    })
})


export default {
    input: entries,
    output: [{
        format: 'esm',
        dir: path.join(cwd, '/dist/esm'),
        name: '[entryName].js',
        // file: path.join(cwd, '/dist/ashe.es.js'),
        // format: 'es',
        // globals: {
        //     react: 'React',
        //     'react-dom': 'ReactDOM',
        // },
    }],
    external: externalPackages,
    extensions: ['json', 'js', 'ts'],
    plugins: [
        // RollupNodeResolve({
        //     customResolveOptions: {
        //         moduleDirectory: 'node_modules'
        //     }
        // }),
        RollupCommonjs({
            extensions: ['.esm.js', '.mjs', '.js', '.ts'],
            include: /\/node_modules\//,
        }),
        RollupTypescript(),
        // RollupTypescript({
        //     tsconfig: path.join(cwd, 'build/tsconfig/tsconfig.rollup.json')
        // }),
        getBabelOutputPlugin({
            presets: ['@babel/preset-env'],
            plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import',
            ],
        }),
        // RollupJson(),
        // RollupUglify(),
        // RollupCopy({
        //     verbose: true,
        //     targets: [{
        //         src: resolveFile('src/styles'),
        //         dest: resolveFile('dist')
        //     }]
        // }),
        // //复制样式到dist
        // RollupPluginStyle({ watch: process.env.NODE_ENV === 'development' }),
    ]
}