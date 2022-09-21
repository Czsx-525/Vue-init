const path = require('path')
const resolve = dir => path.join(__dirname, dir)
require('events').EventEmitter.defaultMaxListeners = 0
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.60.38:8080/ames',
        secure: false,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
