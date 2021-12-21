const path = require('path')
const chalk = require('chalk')
const projectEntrys = require('./projects.entry')

const projectName = getProjectName()
if (!projectName) {
  console.log(chalk.red('请输入正确的项目名称!!!'))
  process.exit()
}
console.log('当前正在运行的项目: ', chalk.green(projectName))
// 当前运行的 page
const page = projectEntrys[projectName]
// 是否生产环境
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  pages: {
    index: page
  },
  productionSourceMap: !isProduction,
  devServer: {
    port: page.port,
    // open: true, // 配置自动启动浏览器
    proxy: {
      '/CORS': {
        target: page.proxyTarget,
        changeOrigin: true,
        pathRewrite: {
          '^/CORS': ''
        }
      }
    }
  },
  configureWebpack: config => {
    config.resolve.alias = {
      '@': path.join(__dirname, './src'),
      // 优化 ant-desgin icons 打包体积太大问题
      '@ant-design/icons/lib/dist$': path.join(__dirname, './src/assets/icons')
    }
  },
  chainWebpack: config => {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // config.plugin('preload').tap(() => [
    //   {
    //     rel: 'preload',
    //     // to ignore runtime.js
    //     // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
    //     fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
    //     include: 'initial'
    //   }
    // ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/styles/index.scss']
        })
        .end()
    })

    config
      .when(isProduction,
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                antDesignVue: {
                  name: 'chunk-antDesignVue', // split ant-design-vue into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/ // in order to adapt to cnpm
                },
                commonsUI: {
                  name: 'chunk-commonsUI',
                  test: resolve('src/components/common-ui'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
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

function resolve (dir) {
  return path.join(__dirname, dir)
}
