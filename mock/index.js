const Mock = require('mockjs')

const user = require('./user')

const mocks = [
  ...user
]

Mock.setup({
  timeout: '200-600'
})

mocks.forEach(item => {
  Mock.mock(item.url, item.method || 'get', req => {
    if (typeof item.response === 'function') {
      return item.response(req)
    } else if (typeof item.response === 'object') {
      return item.response
    } else {
      return {
        code: 500,
        message: '服务器错误'
      }
    }
  })
})
