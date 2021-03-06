import service from '@/service'

export default {
  // 通用登录接口
  commonLogin(params) {
    return service({
      url: '/api/login',
      method: 'post',
      data: params
    })
  },

  // 退出登录
  logout(params) {
    return service({
      url: '/api/logout',
      method: 'post',
      data: params
    })
  }
}
