const fs = require('fs')
const { execSync } = require('child_process')
const inquirer = require('inquirer')
const package = require('../package.json')
const { version } = package
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

const updateVersion = (version) => {
  const obj = JSON.parse(JSON.stringify(package))
  obj.version = version
  fs.writeFileSync(
    '/Users/mingyang/Desktop/头脑风暴/ashe-design/package.json',
    JSON.stringify(obj, null, 2)
  )
}

const createGitCommitAndTag = (version) => {
  // 创建Git提交
  execSync('git add .')
  execSync(`git commit -m "release: version ${version}"`)

  // 创建Git标签
  //execSync(`git tag v${version}`)

  // 输出提示信息
  console.log(`Git提交和标签已创建：v${version}`)
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
    updateVersion(answers.name)
    createGitCommitAndTag(answers.name)
  })
