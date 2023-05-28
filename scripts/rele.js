const inquirer = require('inquirer')
const { version } = require('../package.json')

function incrementVersion(version, incrementType) {
  const [major, minor, patch] = version.split('.').map(Number)
  switch (incrementType) {
    case 'major':
      return `${major + 1}.0.0`
    case 'minor':
      return `${major}.${minor + 1}.0`
    case 'patch':
      return `${major}.${minor}.${patch + 1}`
    default:
      throw new Error(`无效的增量类型：${incrementType}`)
  }
}

const majorVersion = incrementVersion(version, 'major')
const minorVersion = incrementVersion(version, 'minor')
const patchVersion = incrementVersion(version, 'patch')

inquirer
  .prompt([
    {
      type: 'list',
      name: 'name',
      message: `请选择要发布的版本，当前版本为:${version}`,
      choices: [
        {
          name: `major => ${majorVersion}`,
          value: majorVersion,
        },
        {
          name: `minor => ${minorVersion}`,
          value: minorVersion,
        },
        {
          name: `patch => ${patchVersion}`,
          value: patchVersion,
        },
      ],
    },
  ])
  .then(function (answers) {
    console.log(answers)
  })
