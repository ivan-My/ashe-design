import { defineConfig } from 'vite'
import * as path from 'path'
import dts from 'vite-plugin-dts'
import fse from 'fs-extra'

const config = require('./package.json')

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* Released under the MIT License.
*/`

const { resolve } = path

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  plugins: [
    dts({
      outputDir: 'dist/types',
      clearPureImport: false,
      exclude: [
        'node_modules/**',
        'src/sites/**',
        'src/**/demo.tsx',
        'src/**/*.spec.tsx',
      ],
      afterBuild: () => {
        fse
          .readFile('./dist/types/components/ashe.react.build.d.ts', 'utf-8')
          .then((data: string) => {
            fse.remove('./dist/types/components/ashe.react.build.d.ts')
            fse.outputFile(
              './dist/types/index.d.ts',
              data.replace(/\.\.\//g, './')
            )
          })
      },
    }),
  ],
  build: {
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['react', 'react-dom'],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
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
})
