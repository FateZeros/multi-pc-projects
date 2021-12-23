const Mock = require('mock')

Mock.mock('/mock/api/login', 'post', {
  code: 200,
  message: '登录成功'
})
