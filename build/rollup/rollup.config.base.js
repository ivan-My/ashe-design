import path from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import { uglify as RollupUglify } from 'rollup-plugin-uglify'
import RollupCopy from 'rollup-plugin-copy'
import RollupPluginStyle from './rollup-plugin-style.js'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

const cwd = process.cwd()
const resolveFile = filePath => path.join(cwd, filePath)


const externalPackages = [
    'classnames',
    'react',
    'react-dom',
]
const entries = path.join(cwd, '/src/components/index.ts')

const outputEntries = {
    './input': './Input',
    './input': './Input',

}
export default {
    input: entries,
    output: [{
            file: path.join(cwd, '/dist/ashe.cjs.js'),
            format: 'cjs',
        },
        {
            file: path.join(cwd, '/dist/ashe.es.js'),
            format: 'es',
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
            },
        }
    ],
    external: externalPackages,
    extensions: ['json', 'js', 'ts'],
    plugins: [
        RollupNodeResolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        RollupCommonjs({
            extensions: ['.esm.js', '.mjs', '.js', '.ts'],
            include: /\/node_modules\//,
        }),
        RollupTypescript({
            tsconfig: path.join(cwd, 'build/tsconfig/tsconfig.rollup.json')
        }),
        getBabelOutputPlugin({
            presets: ['@babel/preset-env'],
            plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import',
            ],
        }),
        RollupJson(),
        RollupUglify(),
        RollupCopy({
            verbose: true,
            targets: [{
                src: resolveFile('src/styles'),
                dest: resolveFile('dist')
            }]
        }),
        //复制样式到dist
        RollupPluginStyle({ watch: process.env.NODE_ENV === 'development' }),
    ]
}