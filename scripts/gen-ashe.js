/**
 * 读取配置文件生成:
 * /src/components//ashe.react.build.ts
 * /src/components//ashe.react.ts
 * /src/components/ashe.react.scss.ts
 * /src/sites/doc/docs.ts
 */

const config = require('../src/config.json')
var glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
let importStr = ``
let importMarkdownStr = ``
let importOnlineEditScssStr = ``
let importScssStr = `\n`
const packages = []
const onlineEditScss = []
const mds = []
const raws = []

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, exportEmpty } = element
    if (show || exportEmpty) {
      importStr += `import ${name} from './${name.toLowerCase()}';\n`
      importScssStr += `import './${name.toLowerCase()}/${name.toLowerCase()}.scss';\n`

      packages.push(name)
    }
    if (show) {
      glob
        .sync(
          path.join(__dirname, `../src/components/${name.toLowerCase()}/`) +
            'demo.scss'
        )
        .map((f) => {
          onlineEditScss.push(name)
          importOnlineEditScssStr += `import ${name}Scss from '@/components/${name.toLowerCase()}/demo.scss?raw';\n`
        })
      importMarkdownStr += `import ${name} from '@/components/${name.toLowerCase()}/doc.md?raw';\n`
      mds.push(name)
      raws.push(name)
    }
  })
})
let fileStrBuild = `${importStr}
export { ${packages.join(',')} };`

fs.outputFile(
  path.resolve(__dirname, '../src/components/ashe.react.build.ts'),
  fileStrBuild,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

let fileStr = `${importStr}
${importScssStr}
export { ${packages.join(',')} };`
fs.outputFile(
  path.resolve(__dirname, '../src/components/ashe.react.ts'),
  fileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

fs.outputFile(
  path.resolve(__dirname, '../src/components/ashe.react.scss.ts'),
  importScssStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

let mdFileStr = `${importMarkdownStr}
${importOnlineEditScssStr}
export const scssRaws = { ${onlineEditScss.map((r) => r + 'Scss').join(',')} }
export const routers = [${mds.map((m) => `'${m}'`)}]
export const raws = {${raws.join(',')}}
`
fs.outputFile(
  path.resolve(__dirname, '../src/sites/doc/docs.ts'),
  mdFileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)
