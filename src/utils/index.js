import qs from 'qs'

// 获取 url 参数
function getUrlParam () {
  let urlParam = {}
  const url = window.location.href
  const urlParamStr = url.substr(url.indexOf('?') + 1)
  if (urlParamStr) {
    urlParam = qs.parse(urlParamStr)
  }
  return urlParam
}

export {
  getUrlParam
}
