import path from 'path'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from '@rollup/plugin-typescript'
import { uglify as RollupUglify } from 'rollup-plugin-uglify'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

const config = require('./src/config.json')

const cwd = process.cwd()

const externalPackages = ['classnames', 'react', 'react-dom']

const entries = {
  'ashe-react.es': path.join(cwd, '/src/components/ashe.react.build.ts'),
}

config.nav.map((item) => {
  item.packages.forEach((ele) => {
    const { name } = ele
    entries[name] = path.join(
      cwd,
      `/src/components/${name.toLowerCase()}/index.ts`
    )
  })
})

export default {
  input: entries,
  output: [
    {
      format: 'esm',
      dir: path.join(cwd, '/dist/esm'),
      name: '[entryName].js',
    },
  ],
  external: externalPackages,
  extensions: ['json', 'js', 'ts'],
  plugins: [
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: ['node_modules'],
      },
    }),
    RollupCommonjs({
      extensions: ['.esm.js', '.mjs', '.js', '.ts'],
      include: /\/node_modules\//,
    }),
    RollupTypescript(),
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-syntax-dynamic-import',
      ],
    }),
    RollupUglify(),
  ],
}
