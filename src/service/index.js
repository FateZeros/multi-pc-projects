import axios from 'axios'
const projectConfig = require('@/config')

// create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 5 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.headers = {}
    if (projectConfig.isMock) {
      config.baseURL = '/mock'
    }
    // console.log(config, '========= 请求参数 =========')
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // console.log(res, '====== 接口返回参数 ========')
    return res
  },
  error => {
    // console.log('request error:', error)
    // message.error('网络错误,请重试～')
    return Promise.reject(error)
  }
)

export default service
