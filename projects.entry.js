/**
 * 项目入口配置
 * entry: 子项目入口文件
 * template: 子项目 index 模版来源
 * filename: index 页面最终打包在 dist 目录下输出文件名
 * title: 项目 title
 */
function getDefaultProjectEntry (projectName, title, template = 'public/index.html', fileName = 'index.html') {
  return {
    entry: `src/pages/${projectName}/main.js`,
    title,
    template,
    fileName
  }
}

/**
 * porject1 - 项目1
 */
const projectEntrys = {
  project1: {
    ...getDefaultProjectEntry('project1', '项目1')
  }
}

module.exports = projectEntrys
