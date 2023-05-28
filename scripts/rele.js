const fs = require('fs')
const inquirer = require('inquirer')
const { version } = require('../package.json')
const semverInc = require('semver/functions/inc')

const getNextVersion = (currentVersion) => {
  return {
    major: semverInc(currentVersion, 'major'),
    minor: semverInc(currentVersion, 'minor'),
    patch: semverInc(currentVersion, 'patch'),
    premajor: semverInc(currentVersion, 'premajor'),
    preminor: semverInc(currentVersion, 'preminor'),
    prepatch: semverInc(currentVersion, 'prepatch'),
    prerelease: semverInc(currentVersion, 'prerelease'),
  }
}

const nextVersion = getNextVersion(version)
inquirer
  .prompt([
    {
      type: 'list',
      name: 'name',
      message: `请选择要发布的版本，当前版本为:${version}`,
      choices: Object.keys(nextVersion).map((item) => {
        return {
          name: `${item}  => ${nextVersion[item]}`,
          value: nextVersion[item],
        }
      }),
    },
  ])
  .then(function (answers) {
    console.log(answers)
    // if (answers.name === 3) {
    //   console.log(222)
    // }
  })
