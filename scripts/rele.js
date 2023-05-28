const inquirer = require('inquirer')
const semver = require('semver')
const { version } = require('../package.json')
const patch = require('semver/functions/patch')
const minVersion = require('semver/ranges/min-version')
console.log(semver.minVersion(version))
return
inquirer
  .prompt([
    {
      type: 'list',
      name: 'name',
      message: `请选择要发布的版本，当前版本为:${version}`,
      choices: [`major => ${version}`, '222'],
    },
  ])
  .then(function (answers) {
    console.log(answers)
  })
