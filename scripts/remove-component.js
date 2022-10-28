const inquirer = require('inquirer')
const path = require('path')
const config = require('../src/config.json')
const fs = require('fs-extra')

const nav = config.nav
let componentName = ''

function rmConfig() {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < nav.length; i++) {
      for (let j = 0; j < nav[i].packages.length; j++) {
        if (nav[i].packages[j].name === componentName) {
          nav[i].packages.splice(j, 1)
        }
      }
    }
    const dirPath = path.join(__dirname, `../`)
    const filePath = path.join(dirPath, `src/config.json`)
    const tempfile = JSON.stringify(config, null, 2)
    fs.writeFile(filePath, tempfile, (err) => {
      if (err) throw err
      resolve(`修改config.json文件成功`)
    })
  })
}

function rmFile() {
  return new Promise((resolve, reject) => {
    const dirPath = path.join(__dirname, `../`)
    const componentPath = path.join(dirPath, `src/components/${componentName}`)
    fs.remove(componentPath, (err) => {
      if (err) throw err
      resolve(`删除组件文件夹成功`)
    })
  })
}

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: '输入要删除的组件名(每个单词的首字母都大写，如TextBox)：',
        validate(value) {
          let repeat = false
          for (var i = 0; i < nav.length; i++) {
            for (var j = 0; j < nav[i].packages.length; j++) {
              if (nav[i].packages[j].name === value) {
                repeat = true
              }
            }
          }
          if (!repeat) {
            return '该组件名不存在！'
          }
          return true
        },
      },
    ])
    .then((answer) => {
      componentName = answer.name
      return rmConfig()
    })
    .then(() => {
      return rmFile()
    })
    .then(() => {
      console.log('组件删除成功，请继续你的表演~')
      process.exit()
    })
}

function removeComponent() {
  init()
}
removeComponent()
