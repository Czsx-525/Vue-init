/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import storage from '@/utils/storage'
import router from '@/router/index'
import pop from '@/service/popService'
import { Dialog } from 'vant'
const peddingArr = []

const HttpN = function () {
  if (!peddingArr.length) {
    Dialog({
      message: '<div class="loadingImg"></div>',
      showConfirmButton: false,
      allowHtml: true,
      className: 'httpdialog',
      'overlay-class': 'loadinglay'
    })
  }
  const httpService = axios.create({
    baseURL: '/api/', // 自定义路径
    // baseURL: 'https://app.amarsoft.com/ames-web/api',
    timeout: 3000 // 请求超时时间
  })
  // request拦截器
  const reqInterceptors = httpService.interceptors.request.use(
    config => {
      const userInfo = storage.getToken()
      // 根据需求在请求头添加参数
      // config.headers['user-id'] = 'amarsoft';
      // const userInfo = localStorage.getItem('userInfo');
      const id = config.data ? config.data.message : ''
      // 根据需求在请求头添加参数
      config.headers['User-Id'] = id?.userId ? id?.userId : '' // 如果调用单独的接口最好写死useid
      config.headers.token = userInfo || ''
      return config
    },
    error => {
      Promise.reject(error)
    }
  )
  // respone拦截器
  const respInterceptors = httpService.interceptors.response.use(
    response => {
      // 统一状态管理
      const res = response
      if (res.status !== 200) { // 异常抛出
        console.error('报错接口', res.config.url)
        return Promise.reject({
          status: res.status,
          message: res.statusText
        })
      }
      // 存在２００状态下的异常
      if (res.status === 200 && !(JSON.stringify(res.data) === '{}') && res.data.responseCode !== '000000' && res.data.responseCode) {
        console.error('报错接口', res.config.url)
        return Promise.reject({
          status: res.status,
          message: res.data.responseMessage
        })
      }
      return response.data
    },
    error => {
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = checkmsg(error.response.data)
            break
          case 401:
            error.message = checkmsg(error.response.data)
            clearInfo()
            break
          case 403:
            error.message = '拒绝访问'
            break
          case 404:
            error.message = '请求错误，请检查路径'
            break
          case 405:
            error.message = '请求方法未允许'
            break
          case 408:
            error.message = '请求超时'
            break
          case 500:
            error.message = checkmsg(error.response.data)
            break
          case 501:
            error.message = '网络未实现'
            break
          case 502:
            error.message = '网络错误'
            break
          case 503:
            error.message = '服务不可用'
            break
          case 504:
            error.message = '网络超时'
            break
          case 505:
            error.message = 'http版本不支持该请求'
            break
          default:
            error.message = `未知错误${error.response.status}`
            break
        }
      } else {
        error.message = '连接到服务器失败'
      }
      return Promise.reject(error)
    }
  )

  return { httpService, reqInterceptors, respInterceptors }
}

/**
 * get请求
 * @param {请求地址} url
 * @param {请求参数} params
 * @param {拦截器} interceptors
 * @returns
 */
export function get (url, params = {}, interceptors) {
  const http = new HttpN()
  peddingArr.push('pedding')
  const httpService = http.httpService

  if (interceptors && !interceptors.request) {
    httpService.interceptors.request.eject(http.reqInterceptors)
  }
  if (interceptors && !interceptors.response) {
    httpService.interceptors.response.eject(http.respInterceptors)
  }
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'get',
      params: params
    }).then(response => {
      loading()
      resolve(response)
    }).catch(error => {
      loading()
      reject(error)
    })
  })
}
/**
 * post请求
 * @param {请求路径} url
 * @param {请求参数} data
 * @param {请求参数-拼接在路径后} params
 * @returns
 */
export function post (url, data = {}, params = {}) {
  // const pro = url ? `/${url.split('/')[0]}i/` : '';
  const httpService = new HttpN().httpService
  peddingArr.push('pedding')
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: { message: data },
      params: params
    }).then(response => {
      // 部分返回值为空
      let message = response.message ? response.message : {}
      if (Object.prototype.toString.call(response.message) !== '[object Object]') {
        message = { message: message } // 判断是否为对象，不是则包一层message
      }
      // code和msg拼接进数据
      for (const i of Object.keys(response)) {
        if (i === 'message') continue
        message[i] = response[i]
      }
      loading()
      resolve(message)
    }).catch(error => {
      loading()
      if (!error.response) {
        pop.toastTool(error.message, 'fail')
        reject('error', error)
        return
      }
      if (error.response && error.response.status !== 404) {
        pop.toastTool(error.message, 'fail')
      }
      reject('error', error)
      // 400下的两个状态需要回到首页
      if ([400, 401].includes(error.response.status)) {
        clearInfo()
      }
    })
  })
}

/**
 * 验证码请求
 * @param {请求地址} url
 * @param {请求参数} params
 * @param {拦截器} interceptors
 * @returns
 */
export function imgget (url, params = {}, interceptors) {
  const http = new HttpN()
  peddingArr.push('pedding')
  const httpService = http.httpService

  if (interceptors && !interceptors.request) {
    httpService.interceptors.request.eject(http.reqInterceptors)
  }
  if (interceptors && !interceptors.response) {
    httpService.interceptors.response.eject(http.respInterceptors)
  }
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'get',
      params: params,
      headers: { 'Content-Type': 'image/png' },
      responseType: 'blob'
    }).then(response => {
      loading()
      resolve(response)
    }).catch(error => {
      loading()
      reject(error)
    })
  })
}
/** 判断是否关闭加载框 */
export function loading () {
  peddingArr.pop()
  // 加载数组为空关闭dialog框
  if (!peddingArr.length) {
    Dialog.close()
  }
}

/**
 * 400请求处理
 * @param {报错返回信息} msg
 * @returns
 */
export function checkmsg (msg) {
  let returnmsg
  if (msg.responseCode) {
    switch (msg.responseCode) {
      // token无效，请重新登录
      case '999981':
      case '980001':
      case '999982': {
        returnmsg = '登录状态失效请重新登录'
        break
      }
      case '9999': {
        returnmsg = '数据访问异常'
        break
      }
      default:
        returnmsg = msg.responseMessage
        break
    }
  }
  if (msg && !msg.responseCode) {
    returnmsg = '数据访问异常'
  }
  return returnmsg
}
/**
 * 清除所有登录信息
 */
export function clearInfo () {
  storage.clear()
  router.push('/login') //  未登录弹回登录
}
export default {
  get,
  post,
  imgget
}
