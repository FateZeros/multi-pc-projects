function setExpirseDate() {
  const nowDate = new Date().getTime()
  // 失效时间
  const expirseDay = 1
  const expirseDate = nowDate + expirseDay * 24 * 60 * 60 * 1000
  const expirseDateTime = new Date(expirseDate).getTime()
  return expirseDateTime
}

export const expirseLocalStorage = {
  set: function(key, value) {
    const data = {
      value: value,
      expirse: setExpirseDate()
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  get: function(key) {
    const data = JSON.parse(localStorage.getItem(key))
    if (data !== null) {
      if (data.expirse != null && data.expirse < new Date().getTime()) {
        localStorage.removeItem(key)
      } else {
        return data.value
      }
    }
    return null
  },
  remove: function(key) {
    localStorage.removeItem(key)
  }
}
