const config = require('../src/config.json')
const path = require('path')
const fse = require('fs-extra')
const atImport = require('postcss-import')
const glob = require('glob')
const vite = require('vite')

const cwd = process.cwd()
class BuildCss {
    static moveFile() {
        config.nav.map((item) => {
            item.packages.forEach((element) => {
                let { name } = element
                const nameLowerCase = name.toLowerCase()
                const file = path.resolve(cwd, `dist/esm/${name}/style/`)
                const componentSassFile = path.resolve(
                    cwd,
                    `dist/components/${nameLowerCase}/`
                )
                const fileIndex = path.resolve(
                    cwd,
                    `dist/esm/${name}/style/index.js`
                )
                fse.moveSync(componentSassFile, file)
                fse.outputFileSync(
                    fileIndex,
                    `import './${nameLowerCase}.scss'`
                )
            })
        })
        fse.removeSync(path.resolve(cwd, 'dist/components'))
    }

    static getViteConfig(file) {
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
                        plugins: [
                            atImport({ path: path.join(__dirname, 'src`') }),
                        ],
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

    static run() {
        const files = glob.sync('./dist/esm/' + '**/style/index.js')
        Promise.all(
            files.map((file) => vite.build(BuildCss.getViteConfig(file)))
        )
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
}

try {
    BuildCss.moveFile()
    BuildCss.run()
} catch (e) {
    console.log('打包css出错', e)
}
