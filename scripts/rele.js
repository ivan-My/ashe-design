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

// 检查工作目录状态
function checkWorkingDirectoryStatus() {
  try {
    // 执行 Git 命令检查工作目录状态
    execSync('git diff-index --quiet HEAD --')
    // 工作目录干净，没有未提交的更改
    console.log('工作目录是干净的，没有未提交的更改。')
  } catch (error) {
    // 工作目录有未提交的更改
    console.error('工作目录有未提交的更改，请先提交或丢弃这些更改。')
    process.exit(-1)
  }
}

const updateVersion = (version) => {
  const obj = { ...package, version }
  try {
    fs.writeFileSync(
      '/Ussers/mingyang/Desktop/头脑风暴/ashe-design/package.json',
      JSON.stringify(obj, null, 2)
    )
  } catch (e) {
    console.log('更改version失败：', e)
    process.exit(-1)
  }
}

// 检查当前分支是否为 master 分支
function isMasterBranch() {
  const branchName = execSync('git symbolic-ref --short HEAD').toString().trim()
  return branchName === 'master'
}

const createGitCommitAndTag = (version) => {
  try {
    // 生成发布日志
    execSync('npm run changelog')

    // 创建Git提交
    execSync('git add .')
    execSync(`git commit -m "release: version ${version}"`)

    // 创建Git标签
    execSync(`git tag v${version}`)

    // 输出提示信息
    console.log(`Git提交和标签已创建：v${version}`)

    if (!isMasterBranch()) {
      console.error('只能在 master 分支上提交tag。')
      return
    }

    execSync('git push')
    execSync(`git push origin v${version}`)

    console.log('已推送到远程仓库')
  } catch (error) {
    console.error('提交标签时发生错误:', error)
    process.exit(-1)
  }
}

const generateReleaseNotes = () => {
  try {
    execSync('npm run changelog')
    console.log('发布日志已生成：RELEASE_NOTES.md')
  } catch (error) {
    console.error('生成发布日志时发生错误:', error)
    process.exit(-1)
  }
}

function init() {
  // checkWorkingDirectoryStatus()
  const nextVersion = getNextVersion(version)
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'name',
        message: `请选择要发布的版本，当前版本为:${version}`,
        choices: Object.keys(nextVersion).map((item) => ({
          name: `${item}  => ${nextVersion[item]}`,
          value: nextVersion[item],
        })),
      },
    ])
    .then((answers) => {
      const { name } = answers
      updateVersion(name)
      createGitCommitAndTag(name)
      generateReleaseNotes()

      console.log('发布流程完成')
    })
    .catch((error) => {
      console.error('发布流程出现错误:', error)
      process.exit(-1)
    })
}

init()
