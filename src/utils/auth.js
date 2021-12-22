import { expirseLocalStorage } from './storage'
import { getUrlParam } from './index'

const TokenKey = 'WEB_TOKEN'

export function getToken() {
  // 获取 url token, 以 url token 为准
  let tokenStorage = expirseLocalStorage.get(TokenKey)
  const { token } = getUrlParam()
  if (token) {
    tokenStorage = token
    setToken(token)
  }
  return tokenStorage
}

export function setToken(token) {
  return expirseLocalStorage.set(TokenKey, token)
}

export function removeToken() {
  return expirseLocalStorage.remove(TokenKey)
}
