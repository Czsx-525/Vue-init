import { Toast } from 'vant'
const toastTool = (msg, type = 'info') => {
  let types
  const toastInfo = {
    message: msg,
    duration: 3000, // 存在时间
    closeOnClick: true, // 是否点击关闭
    className: `${type} toastCss` // 根据自定义类名区分不同类型吐司，toastCss为公共样式
  }
  switch (type) {
    case 'info':
      types = {
        icon: require('@/assets/toastIcon/info.png') // 替换图标
      }
      break
    case 'success':
      types = {
        icon: require('@/assets/toastIcon/success.png') // 替换图标
      }
      break
    case 'fail':
      types = {
        icon: require('@/assets/toastIcon/fail.png') // 替换图标
      }
      break
    case 'waring':
      types = {
        icon: require('@/assets/toastIcon/waring.png') // 替换图标
      }
      break
    default:
      break
  }
  Toast(Object.assign(types, toastInfo))
}

export default {
  toastTool
}
