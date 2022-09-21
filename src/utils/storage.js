/**
 * 读取
 * @param key 键
 */
function get (key) {
  const encodeKey = b64Encode(key)
  const item = sessionStorage.getItem(encodeKey)
  try {
    const value = JSON.parse(b64Decode(item))
    return value
  } catch (err) {
    return item
  }
}

/**
 * 存储
 * @param key 键
 * @param value 值
 */
function set (key, value) {
  try {
    const encodeKey = b64Encode(key)
    const item = JSON.stringify(value)
    sessionStorage.setItem(encodeKey, b64Encode(item))
  } catch (err) {
    console.error(err)
  }
}

/**
 * 删除
 * @param key 键
 */
function remove (key) {
  const encodeKey = b64Encode(key)
  sessionStorage.removeItem(encodeKey)
}

/**
* 存储token
* @param value token的值
*/
function setToken (value) {
  set('token', value)
}

/**
 * 获取token
 */
function getToken () {
  const token = get('token')
  return token
}

/**
 * 清除
 */
function clear () {
  sessionStorage.clear()
}

function b64Encode (str) {
  return btoa(encodeURIComponent(str))
}

function b64Decode (str) {
  return decodeURIComponent(atob(str))
}
export default {
  get,
  set,
  remove,
  clear,
  setToken,
  getToken
}
