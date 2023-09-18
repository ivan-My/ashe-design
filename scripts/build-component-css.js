/*
 * 通过 dist 目录下的 style/index.js 构建每个组件的 css 文件
 * 用于css按需加载
 * */

const glob = require('glob')
const path = require('path')
const vite = require('vite')
const fse = require('fs-extra')
const atImport = require('postcss-import')

function scannerFiles() {
    const prefix = './dist/esm/'
    const list = glob.sync(prefix + '**/style/index.js')
    return list
}

function viteConfig(file) {
    return {
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: path.resolve(process.cwd(), './src'),
                },
            ],
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
        build: {
            emptyOutDir: false,
            outDir: file.replace('index.js', ''),
            rollupOptions: {
                output: [
                    {
                        format: 'es',
                        entryFileNames: 'css.js',
                    },
                ],
            },
            lib: {
                entry: file,
                formats: ['es'],
            },
        },
    }
}

function run() {
    const files = scannerFiles()
    Promise.all(files.map((file) => vite.build(viteConfig(file))))
        .then(() => {
            const fileList = glob.sync('./dist/esm/**/style.css')
            fileList.forEach((file) => {
                fse.writeFile(
                    file.replace('style.css', 'css.js'),
                    `import './style.css'`
                )
            })
        })
        .then((_) => {
            console.log('打包完成!')
        })
}

run()
