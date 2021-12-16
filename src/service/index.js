import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 5 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
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
    return res
  },
  error => {
    // console.log('request error:', error)
    // message.error('网络错误,请重试～')
    return Promise.reject(error)
  }
)

export default service
