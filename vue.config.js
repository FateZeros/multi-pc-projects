const projectEntrys = require('./projects.entry')

const processArgvs = process.argv
const projectName = processArgvs.reverse()[0]
console.log(projectEntrys[projectName], 222)

module.exports = {
  pages: {
    index: {
      entry: 'src/pages/project1/main.js'
    }
  },
  devServer: {
    port: 8002
  }
}
