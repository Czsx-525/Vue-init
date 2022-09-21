/**
 * @desc 格式化日期字符串
 * @param { String } - [date = new Date()] 日期字符串：2021-07-22 11:47:23
 * @param { String } - [formatStr = 'yyyy-MM-dd HH:mm:ss'] 日期格式
 * @returns { String } 格式化后的日期字符串
 */
export function formatDate (params) {
  const defalutParams = {
    date: new Date(),
    formatStr: 'yyyy-MM-dd HH:mm:ss'
  }
  params = { ...defalutParams, ...params }
  let date = params.date
  let formatStr = params.formatStr
  // 传入日期字符串 - 转成时间戳 - 转成标准时间
  const timeStamp = new Date(date).getTime()
  date = new Date(timeStamp)
  formatStr = formatStr.replace(new RegExp('yyyy'), `${date.getFullYear()}`)
  const month = date.getMonth() + 1
  formatStr = formatStr.replace(new RegExp('MM'), `${month > 9 ? month : '0' + month}`)
  const day = date.getDate()
  formatStr = formatStr.replace(new RegExp('dd'), `${day > 9 ? day : '0' + day}`)
  const hour = date.getHours()
  formatStr = formatStr.replace(new RegExp('HH'), `${hour > 9 ? hour : '0' + hour}`)
  const min = date.getMinutes()
  formatStr = formatStr.replace(new RegExp('mm'), `${min > 9 ? min : '0' + min}`)
  const sec = date.getSeconds()
  formatStr = formatStr.replace(new RegExp('ss'), `${sec > 9 ? sec : '0' + sec}`)
  return formatStr
}

/**
 * @desc 格式化金额
 * @param { String }
 * @param { String }
 * @returns { String } 格式化后的金额字符串
 */
export function formatAmount (value) {
  if (!value) return ''
  var intPart = Number(value).toFixed(0) // 获取整数部分
  var intPartFormat = intPart
    .toString()
    .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  var floatPart = '.00' // 预定义小数部分
  var value2Array = value.split('.')
  //= 2表示数据有小数位
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString() // 拿到小数部分
    if (floatPart.length === 1) {
      // 补0,
      return intPartFormat + '.' + floatPart + '0'
    } else {
      return intPartFormat + '.' + floatPart
    }
  } else {
    return intPartFormat + floatPart
  }
}
