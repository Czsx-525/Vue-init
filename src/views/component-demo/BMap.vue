<template>
  <div>
    <Header
      :title="$t('componentDemo.baiduMap')"
      :left-text="$t('header.back')"
      :left-arrow="leftArrow"
      @onClickBack="back()"
    />
    <div class="panel">
      {{ result }}
    </div>

    <div class="clusterer-box" @click="clusterer">
      <img class="clusterer-img" src="../../assets/image/point-add.png" />
    </div>
    <div class="route-box" @click="showRoute">
      <img class="route-img" :src="routeImg" />
    </div>
    <baidu-map
      class="bmap"
      ref="bmap"
      :mapData="mapData"
      @locate="locate"
    ></baidu-map>
  </div>
</template>

<script>
import BaiduMap from '../../components/baidu-map/BaiduMap.vue'
import {
  showUserInfoWindow,
  createMarker,
  getLocation,
  historyTrack
} from '../../components/baidu-map/BMapUtil'
import Header from '../../components/header/Header.vue'
export default {
  name: 'BMap',
  components: {
    'baidu-map': BaiduMap,
    Header
  },
  props: {},
  data () {
    return {
      leftArrow: true,
      mapData: {
        ak: 'lSFsZnp9Sur8auETcqIN6MNpBxCGnits',
        // ak: '9it2jr4ToKi8cK4ohg6Y2mZw9m3ZEA3i',

        lng: 120.42718114798771,
        lat: 31.33254152534403,
        width: '100vw',
        height: 'calc(100vh - 60px)',
        initLevel: 13,
        showNameLevel: 15
      },
      result: '',
      routeImg: require('../../assets/image/route-unselected.png'),
      isRouteShow: false
    }
  },
  mounted () {},
  methods: {
    back () {
      this.$router.go(-1)
    },
    address (res) {
      var addComp = res.addressComponents
      this.result =
        addComp.province +
        addComp.city +
        addComp.district +
        addComp.street +
        addComp.streetNumber
    },
    showRoute () {
      if (!this.isRouteShow) {
        this.isRouteShow = true
        this.routeImg = require('../../assets/image/route-selected.png')
        this.moreRoute()
      } else {
        this.isRouteShow = false
        this.routeImg = require('../../assets/image/route-unselected.png')
        this.$refs.bmap.locale()
      }
    },
    locate () {
      // 清除标注物
      this.$refs.bmap.bmap.clearOverlays()
      // 清除地聚合
      // eslint-disable-next-line no-unused-expressions
      this.$refs.bmap.clusterer?.clearMarkers()

      // 创建自定义标注
      createMarker(
        this.$refs.bmap.bmap,
        require('../../assets/image/components/manager.png'),
        40,
        40,
        this.mapData.lng,
        this.mapData.lat,
        13
      ).then((marker) => {
        const html = `<div style="width: 200px;padding: 10px;background-color: #222e61;color: white; border-radius: 8px;font-size:14px;">
            <div>
                <div style="width: 170px;display: inline-block;text-align: left;padding: 2px;font-size: 16px;font-weight: 500;">用户信息</div>
                <img id="closeInfo" src="${require('../../assets/image/components/close.png')}" width="20" height="20" style="z-index:999">
            </div>
            <table>
              <tbody>
                <tr>
                  <td style="text-align: right;width:80px">客户经理：</td>
                  <td style="text-align: left;">test11</td>
                </tr>
                <tr>
                  <td style="text-align: right;width:80px">联系方式：</td>
                  <td style="text-align: left;">13888888888</td>
                </tr>
                <tr>
                  <td style="text-align: right;width:80px">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置：</td>
                  <td style="text-align: left;">苏州科技城高新软件园</td>
                </tr>
              </tbody>
            </table>
          </div>`

        // 添加信息窗口
        showUserInfoWindow(this.$refs.bmap.bmap, marker, html, 'closeInfo')

        // 返回定位的位置信息
        getLocation(this.mapData.lng, this.mapData.lat).then((res) => {
          this.address(res)
        })
      })
    },

    clusterer () {
      const style = {
        url: require('../../assets/image/components/radar.png'),
        width: 32,
        height: 32,
        textSize: 10,
        textColor: 'red'
      }

      const customers = [
        {
          address: '江苏省苏州市虎丘区苏高新软件园',
          customerName: '猪八戒-高老庄',
          tel: '13888888888',
          lng: 120.42849251062718,
          lat: 31.332359557443567
        },
        {
          address: '江苏省苏州市虎丘区济慈路青山绿庭',
          customerName: '张三-亚历山大-尼古拉斯-凯奇',
          tel: '13888888888',
          lng: 120.42806132398239,
          lat: 31.33621505998211
        },
        {
          address: '中国科学院苏州生物医学工程技术研究所',
          customerName: '李四',
          tel: '13888888888',
          lng: 120.42903149393317,
          lat: 31.333408269927514
        },
        {
          address: '江苏省苏州市虎丘区济慈路青山慧谷',
          customerName: '王五',
          tel: '13888888888',
          lng: 120.42982200278195,
          lat: 31.335736986331128
        },
        {
          address: '江苏省苏州市虎丘区苏州科技城',
          customerName: '赵六-尼古拉斯-凯奇',
          tel: '13888888888',
          lng: 120.42852844284758,
          lat: 31.34215222189187
        },
        {
          address: '中国兵器工业集团北方通用电子集团公司',
          customerName: '张飞',
          tel: '13888888888',
          lng: 120.42349793199169,
          lat: 31.338813578700556
        },
        {
          address: '江苏省苏州市虎丘区苏州科技城苏州高新区文体中心',
          customerName: '孙悟空',
          tel: '13888888888',
          lng: 120.4232284403387,
          lat: 31.343281781933907
        }
      ]

      let index = 0
      for (const customer of customers) {
        // 定义点击弹框事件
        customer.html = `<div style="width: 200px;padding: 10px;background-color: #222e61;color: white; border-radius: 8px; font-size:14px;">
            <div>
                <div style="width: 170px;display: inline-block;text-align: left;padding: 2px;font-size: 16px;font-weight: 500;">用户信息</div>
                <img id="coustomerClose${index}" src="${require('../../assets/image/components/close.png')}" width="20" height="20" style="z-index:999">
            </div>
            <table>
              <tbody>
                <tr>
                  <td style="text-align: right;width:80px">客户大经理：</td>
                  <td style="text-align: left;">${customer.customerName}</td>
                </tr>
                <tr>
                  <td style="text-align: right;width:80px">联系方式：</td>
                  <td style="text-align: left;">${customer.tel}</td>
                </tr>
                <tr>
                  <td style="text-align: right;width:80px">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置：</td>
                  <td style="text-align: left;">${customer.address}</td>
                </tr>
              </tbody>
            </table>
          </div>`
        // 重写关闭移动端弹出框的dom点击事件
        customer.closeId = `coustomerClose${index++}`
      }

      this.$refs.bmap.markerClusterer('苏州', customers, style)
    },

    /** 路径图 */
    moreRoute () {
      const routes = [
        {
          start: { lng: this.mapData.lng, lat: this.mapData.lat },
          end: { lng: 120.41293385919435, lat: 31.354965949128403 },
          style: {
            strokeColor: '#336600',
            strokeWeight: 5,
            strokeOpacity: 0.8
          }
        },
        {
          start: { lng: this.mapData.lng, lat: this.mapData.lat },
          end: { lng: 120.44182336439525, lat: 31.367916661294153 },
          style: {
            strokeColor: '#3333FF',
            strokeWeight: 5,
            strokeOpacity: 0.8
          }
        },
        {
          start: { lng: this.mapData.lng, lat: this.mapData.lat },
          end: { lng: 120.61746005770614, lat: 31.334981316525397 },
          style: {
            strokeColor: '#00CCFF',
            strokeWeight: 5,
            strokeOpacity: 0.8
          }
        },
        {
          start: { lng: this.mapData.lng, lat: this.mapData.lat },
          end: { lng: 120.59532580994028, lat: 31.39825127274913 },
          style: {
            strokeColor: '#660099',
            strokeWeight: 5,
            strokeOpacity: 0.8
          }
        },
        {
          start: { lng: this.mapData.lng, lat: this.mapData.lat },
          end: { lng: 120.6715021171864, lat: 31.394675755763124 },
          style: {
            strokeColor: '#FF3300',
            strokeWeight: 5,
            strokeOpacity: 0.8
          }
        },
        {
          start: { lng: this.mapData.lng, lat: this.mapData.lat },
          end: { lng: 120.74609740673498, lat: 31.280186648679845 },
          style: {
            strokeColor: '#333300',
            strokeWeight: 5,
            strokeOpacity: 0.8
          }
        }
      ]

      // eslint-disable-next-line no-unused-expressions
      this.$refs.bmap.clusterer?.clearMarkers()
      let id = 0
      for (const route of routes) {
        historyTrack(
          this.$refs.bmap.bmap,
          route.start,
          route.end,
          1,
          route.style,
          true
        ).then((results) => {
          let index = 0
          results.forEach((ele) => {
            const html = `<div style="width: 200px;padding: 10px;background-color: #222e61;color: white; border-radius: 8px; font-size:14px">
            <div>
                <div style="width: 170px;display: inline-block;text-align: left;padding: 2px;font-size: 16px;font-weight: 500;">用户信息</div>
                <img id="closeInfo${id}${index}" src="${require('../../assets/image/components/close.png')}" width="20" height="20" style="z-index:999">
            </div>
            <table>
              <tbody>
                <tr>
                  <td style="text-align: right;width:80px">机构名称：</td>
                  <td style="text-align: left;">${
                    ele.result.surroundingPois[0]?.title
                  }</td>
                </tr>
                <tr>
                  <td style="text-align: right;width:80px">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</td>
                  <td style="text-align: left;">${ele.result.address}</td>
                </tr>
                <tr>
                  <td style="text-align: right;width:80px">经&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度：</td>
                  <td style="text-align: left;word-break: break-all;">${
                    ele.result.point.lng + ''
                  }</td>
                </tr>
                <tr>
                  <td style="text-align: right;width:80px">纬&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度：</td>
                  <td style="text-align: left;word-break: break-all;">${
                    ele.result.point.lat + ''
                  }</td>
                </tr>
              </tbody>
            </table>
          </div>`
            showUserInfoWindow(
              this.$refs.bmap.bmap,
              ele.marker,
              html,
              `closeInfo${id++}${index++}`
            )
          })
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.panel {
  width: 230px;
  position: fixed;
  top: 80px;
  left: 10px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
  border-radius: 7px;

  z-index: 99;
}
.route-box {
  position: fixed;
  width: 40px;
  height: 40px;
  top: calc(~"100vh - 70px");
  left: 10px;
  background: #f8f9fc;
  z-index: 99;
  box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
  border-radius: 7px;

  .route-img {
    width: 26px;
    height: 26px;
    margin: 7px auto;
  }
}
.clusterer-box {
  position: fixed;
  width: 40px;
  height: 40px;
  top: calc(~"100vh - 125px");
  left: 10px;
  background: #f8f9fc;
  z-index: 99;
  box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
  border-radius: 7px;

  .clusterer-img {
    width: 26px;
    height: 26px;
    margin: 7px auto;
  }
}
</style>
