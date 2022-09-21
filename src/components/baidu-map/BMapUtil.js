import { CustomEvent } from './Event'

/**
 * @description 加载百度地图相关资源js
 * @param {string} ak
 */
export function loadBMap (ak) {
  return new Promise((resolve, reject) => {
    // 聚合API依赖基础库,因此先加载基础库再加载聚合API
    asyncLoadBaiduJs(ak)
      .then(() => {
        // 调用加载第三方组件js公共方法加载其他资源库
        asyncLoadJs('https://api.map.baidu.com/library/InfoBox/1.2/src/InfoBox_min.js').then(() => { // 自定义弹框
          asyncLoadJs('https://api.map.baidu.com/library/EventWrapper/1.2/src/EventWrapper.js').then(() => { // 自定义事件封装
            asyncLoadJs('https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js').then(() => { // 点聚合
              resolve()
              return true
            })
          }).catch(err => { reject(err) })
        }).catch(err => { reject(err) })
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * @description 加载百度地图基础组件js
 * @param {string} ak
 */
export function asyncLoadBaiduJs (ak) {
  return new Promise((resolve, reject) => {
    // window.onload = function () {
    //   resolve(BMap)
    // }
    // 如果已加载直接返回
    if (typeof BMap !== 'undefined') {
      resolve(BMap)
      return true
    }
    // 百度地图异步加载回调处理
    window.onBMapCallback = function () {
      resolve(BMap)
    }
    // 返回当前定位
    // const getCurrentCityName = function () {
    //   return new Promise(function (resolve, reject) {
    //     const myCity = new BMap.LocalCity()
    //     myCity.get(function (result) {
    //       resolve(result.name)
    //     })
    //   })
    // }
    // 插入script脚本 引入百度地图API文件
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://api.map.baidu.com/api?v=3.0&ak=' + ak + '&callback=onBMapCallback'
    script.onerror = reject
    document.head.appendChild(script)

    // 解决ios端百度地图不能缩放和拖动
    if (navigator.userAgent.indexOf('Mac') >= 0) {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
        writable: false
      })
    }
  })
}
/**
 * @description 加载第三方组件js公共方法
 * @param {string} url
 */
export function asyncLoadJs (url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.head.appendChild(script)
    script.onload = () => {
      resolve()
    }
    script.onerror = reject
  })
}

/**
 * @description 创建自定义标注，iconUrl、width、height三个参数传null，将显示百度默认红色标注
 * @param {BMap} bmap 百度地图实例
 * @param {string} iconUrl 自定义标注
 * @param {number} width    标准宽度
 * @param {number} height  标注高度
 * @param {number} lng    标注经度
 * @param {number} lat    标注纬度
 * @param {number} level  地图级别
 */
export function createMarker (bmap, iconUrl, width, height, lng, lat, level) {
  return new Promise((resolve, reject) => {
    const point = new BMap.Point(lng, lat)
    let marker
    if (iconUrl && width && height) {
      const icon = new BMap.Icon(iconUrl, new BMap.Size(width, height))
      marker = new BMap.Marker(point, { icon: icon })
    } else {
      marker = new BMap.Marker(point)
    }
    bmap.addOverlay(marker)
    bmap.centerAndZoom(point, level)
    resolve(marker)
  })
}

/**
 * @description 创建自定义标注
 * @param {string} content 标注内容
 * @param {object} style 样式
 * @param {BMap.Point} point 位置
 * @returns label
 */
export function createLabel (content, style) {
  return new Promise((resolve, reject) => {
    // 左偏移  右偏移
    var offsetSize = new BMap.Size(0, 0)
    var labelStyle = {
      color: style.fontColor,
      backgroundColor: style.bgColor,
      border: '0',
      fontSize: style.fontSize,
      textAlign: 'center',
      width: '50px',
      opacity: '0.7',
      verticalAlign: 'center',
      borderRadius: '8px',
      whiteSpace: 'normal',
      // wordWrap: "break-word",
      padding: '7px 10px'
    }
    // 用于设置样式
    // var spanA="<span class='angle'><span>"
    var spanA = `<span style="display: inline-block;
                            width: 0px;
                            height: 0px;
                            position: absolute;
                            bottom:-60px;
                            border: 14px solid;
                            left: 15px;
                            bottom: -25px;
                            border-color: ${style.bgColor} transparent transparent transparent;"><span>`
    // 不同数字长度需要设置不同的样式。
    var num = parseInt(content.length / 4)
    if (parseInt(content.length % 4) !== 0) {
      num += 1
    }
    switch (num) {
      case 0:
      case 1:
        offsetSize = new BMap.Size(-20, -40)
        break
      case 2:
        offsetSize = new BMap.Size(-20, -53)
        break
      case 3:
        offsetSize = new BMap.Size(-20, -70)
        break
      case 4:
        offsetSize = new BMap.Size(-20, -84)
        break
      default:
        break
    }

    var label = new BMap.Label(content + spanA, {
      offset: offsetSize
    })
    label.setStyle(labelStyle)
    resolve(label)
  })
}

/**
 * @description 弹出用户信息窗口
 * @param {BMap} bmap 百度地图实例
 * @param {BMap.Marker} marker 百度地图标注
 * @param {string} html 自定义消息弹框
 * @param {string}  closeId 关闭弹框Id 百度地图移动端禁止了弹窗中的点击事件，故需要重新重写弹窗的关闭事件
 */
export function showUserInfoWindow (bmap, marker, html, closeId) {
  // 信息提示框
  const opts = {
    boxStyle: {
      width: '225px',
      height: 0
    },
    offset: new BMap.Size(-100, -20),
    closeIconMargin: '5px 12px 0 0',
    closeIconUrl: require('../../assets/image/components/close.png'),
    enableAutoPan: true
    // align: INFOBOX_AT_BOTTOM
  }
  // 创建信息提示框
  const infoBox = new BMapLib.InfoBox(bmap, html, opts)

  // 监听标注点击
  marker.addEventListener('click', () => {
    infoBox.open(marker)
  })

  // 重新消息提示框的点击事件，移动端百度地图默认屏蔽点击事件
  infoBox.addEventListener('open', () => {
    // 隐藏百度地图自己的图片按钮，
    const nodes = document.querySelectorAll('.infoBox img')
    for (const node of nodes) {
      if (!node.id || node.id === '') {
        node.style.display = 'none'
      }
    }
    BMapLib.EventWrapper.addDomListenerOnce(
      document.getElementById(closeId),
      'touchend',
      () => {
        infoBox.close()
      }
    )
  })
}

/**
 * @description 路线
 * @param {BMap} bmap  百度地图实例
 * @param {object} start 起点
 * @param {object} end 终点
 * @param {number} policyType 导航策略：0 默认，1 优先高速， 2 避开高速， 3 避开拥堵
 * @param {object} style
 * @param {boolean} enableLabel
 * @returns
 */
export function historyTrack (bmap, start, end, policyType, style, enableLabel) {
  return new Promise((resolve, reject) => {
    // 清除地图上已有的标注物
    bmap.clearOverlays()

    let policy
    switch (policyType) {
      case 0: policy = BMAP_DRIVING_POLICY_DEFAULT; break // 默认驾驶策略
      case 1: policy = BMAP_DRIVING_POLICY_FIRST_HIGHWAYS; break // 优先高速
      case 2: policy = BMAP_DRIVING_POLICY_AVOID_HIGHWAYS; break // 避开高速
      case 3: policy = BMAP_DRIVING_POLICY_AVOID_CONGESTION; break // 避开拥堵
      default: policy = BMAP_DRIVING_POLICY_DEFAULT; break
    }

    // 初始化驾驶路线实例, 并规划路线
    const driving = new BMap.DrivingRoute(bmap, { policy: policy })
    const startPoint = new BMap.Point(start.lng, start.lat)
    const endPoint = new BMap.Point(end.lng, end.lat)
    driving.search(startPoint, endPoint)

    driving.setSearchCompleteCallback(() => {
      // 获取驾驶路线
      const results = driving.getResults()
      const points = results.getPlan(0).getRoute(0).getPath()

      // 绘制折线图
      const polyline = new BMap.Polyline(points, {
        strokeColor: style.strokeColor, // 折线颜色
        strokeWeight: style.strokeWeight,
        strokeOpacity: style.strokeOpacity
      })
      bmap.addOverlay(polyline)
    })

    const results = []

    getLocations([start, end]).then(locations => {
      if (locations) {
        for (const location of locations) {
          const marker = new BMap.Marker(new BMap.Point(location.point.lng, location.point.lat))
          if (enableLabel && location) {
            const address = location.surroundingPois[0]?.title
            createLabel(address || location.address, { fontColor: '#fff', bgColor: '#333333', fontSize: 14 }).then(label => {
              marker.setLabel(label)
            })
          }
          // 防止重复添加标注
          const allOverlay = bmap.getOverlays()
          const overlay = allOverlay.findIndex((ele) => ele.getPosition().lng === location.point.lng)
          if (overlay < 0) {
            bmap.addOverlay(marker)
          }
          results.push({ marker: marker, result: location })
          if (results.length === 2) {
            resolve(results)
          }
        }
      }
    })
  })
}

/**
 * @description 地址逆解析
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Promise} 地址信息
 */
export function getLocation (lng, lat) {
  return new Promise((resolve, reject) => {
    const geo = new BMap.Geocoder({ extensions_town: true })
    const point = new BMap.Point(lng, lat)
    geo.getLocation(point, (result) => {
      if (result) resolve(result)
    })
  })
}

/**
 * @description 批量地址逆解析
 * @param {Array} points 经纬度集合
 * @returns {Promise} 地址信息集合
 */
export function getLocations (points) {
  return new Promise((resolve, reject) => {
    const results = []
    const geo = new BMap.Geocoder({ extensions_town: true })
    for (const point of points) {
      geo.getLocation(new BMap.Point(point.lng, point.lat), (result) => {
        results.push(result)
        if (results.length === points.length) { resolve(results) }
      })
    }
  })
}

/**
 * @description 地址正解析
 * @param {string} city 城市名
 * @param {string} address 详细地址
 * @returns {Promise} 经纬度信息
 */
export function getPoint (city, address) {
  return new Promise((resolve, reject) => {
    if (!BMap) resolve('BMap is undefined')
    const geo = new BMap.Geocoder()
    geo.getPoint(address, (point) => {
      const result = { lng: point.lng, lat: point.lat }
      resolve(result)
    }, city)
  })
}

/**
 * @description 批量地址正解析
 * @param {string} city 城市名
 * @param {Array} addresses 地址信息集合
 * @returns {Promise} 地址点集合
 */
export function getPoints (city, addresses) {
  return new Promise((resolve, reject) => {
    if (!BMap) { resolve('BMap is undefined') }
    if (!addresses || !Array.isArray(addresses)) { resolve('addresses is not array') }
    const geo = new BMap.Geocoder()
    const results = []
    for (const address of addresses) {
      geo.getPoint(address, (point) => {
        if (point) {
          const result = { lng: point.lng, lat: point.lat }
          results.push(result)
        }
        if (addresses.indexOf(address) === (addresses.length - 1)) {
          resolve(results)
        }
      }, city)
    }
  })
}
