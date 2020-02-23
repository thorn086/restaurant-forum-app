import config from '../config'
const listeners = []

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  saveUserId(userId) {
    window.localStorage.setItem(config.USER_ID, userId)
    listeners.forEach(f => f())
  },
  onChange(f) {
    listeners.push(f)
  },
  getUserId() {
    return window.localStorage.getItem(config.USER_ID)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
    listeners.forEach(f => f())
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userEmail, password) {
    return window.btoa(`${userEmail}:${password}`)
  },
}

export default TokenService