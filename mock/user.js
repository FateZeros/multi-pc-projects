const Mock = require('mockjs')
const Random = Mock.Random

module.exports = [
  // mock 登录接口
  {
    url: '/mock/api/login',
    method: 'post',
    response: req => {
      const { body } = req
      if (body) {
        const { userName, password } = JSON.parse(body)
        if (userName === 'admin' && password === '123') {
          return {
            code: 200,
            message: '登录成功',
            data: {
              token: Random.string('upper', 32, 32),
              name: 'Fate@163.com'
            }
          }
        } else {
          if (userName !== 'admin') {
            return {
              code: 400,
              message: '账号不正确'
            }
          }
          if (password !== '123') {
            return {
              code: 400,
              message: '密码不正确'
            }
          }
        }
      } else {
        return {
          code: 400,
          message: '登录失败'
        }
      }
    }
  },

  // mock 退出登录
  {
    url: '/mock/api/logout',
    method: 'post',
    response: {
      code: 200,
      message: '退出登录成功！'
    }
  }
]
