const chalk = require('chalk')
const projectEntrys = require('./projects.entry')

const projectName = getProjectName()
if (!projectName) {
  console.log(chalk.red('请输入正确的项目名称!!!'))
  process.exit()
}

module.exports = {
  pages: {
    index: projectEntrys[projectName]
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8002
  }
}

function getProjectName () {
  let projectName = ''
  const processArgvs = process.argv
  const projectNameStr = processArgvs.reverse()[0]
  if (projectNameStr) {
    const inputProjectName = projectNameStr.split('=')[1]
    if (Object.keys(projectEntrys).includes(inputProjectName)) {
      projectName = inputProjectName
    }
  }
  return projectName
}
