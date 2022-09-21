<template id="bmap">
  <div>
    <div id="container" :style="{'width':mapData.width,'height': mapData.height}"></div>
    <div id="mapControl" class="mapControl" ref="mapControl">
      <div class="locale" @click="locale">
        <img src="../../assets/image/components/location.png">
      </div>
      <div class="zoom">
        <span class="zoom-add" @click="enlarge">+</span>
        <span class="zoom-unadd" @click="narrow">-</span>
      </div>

    </div>
  </div>
</template>

<script>
import {
  loadBMap,
  showUserInfoWindow,
  getPoint,
  createLabel
} from './BMapUtil.js'
import { CustomEvent } from './Event'
import {} from './MarkerClusterer'

export default {
  name: 'BaiduMap',
  props: {
    mapData: {
      type: Object,
      default: function () {
        return {
          ak: '',
          lat: '',
          lng: '',
          width: '',
          height: '',
          initLevel: 13,
          showNameLevel: 15
        }
      }
    }
  },
  data () {
    return {
      bmap: null,
      point: null,
      clusterer: null,
      custPoints: [] // 客户集合
    }
  },
  created () {},
  mounted () {
    this.initBmap()
  },
  methods: {
    /**
     * 初始化百度地图
     */
    initBmap () {
      this.$nextTick(() => {
        loadBMap(this.mapData.ak).then(() => {
          // 创建地图实例
          this.bmap = new BMap.Map('container')
          // 创建点坐标
          this.point = new BMap.Point(this.mapData.lng, this.mapData.lat)
          // 初始化地图，设置中心点坐标和地图级别
          this.bmap.centerAndZoom(this.point, 13)
          // 添加自带控件
          this.bmap.addControl(new BMap.ScaleControl())
          // 初始化控件:负责与地图交互的UI元素
          this.initCustomControl()

          this.locale()

          // 监听地图缩放
          // this.bmap.addEventListener("zoomend", () => {
          //   let zoom = this.bmap.getZoom(); // 获取缩放级别
          //   if (zoom >= this.mapData.showNameLevel && this.custPoints?.length > 1) {
          //     for (const point of this.custPoints) {
          //       const label = new BMap.Label('222',{position:point});
          //       this.bmap.addOverlay(label);
          //     }
          //   }
          // });
        })
      })
    },
    /**
     * 初始化控件，自定义
     */
    initCustomControl () {
      // 定义一个控件类，即function
      function ZoomControl () {
        // 设置控件位置,如多个控件都在左下方，就可以通过偏移量来实现区分
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT
        this.defaultOffset = new BMap.Size(10, 10)
      }

      // 通过JavaScript的prototype属性继承于BMap.Control
      ZoomControl.prototype = new BMap.Control()

      // 自定义控件必须实现initialize方法，并且将控件的DOM元素返回
      // 在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
      ZoomControl.prototype.initialize = function (map) {
        const div = document.getElementById('mapControl')
        map.getContainer().appendChild(div)
        return div
      }

      // 创建控件实例
      const myZoomCtrl = new ZoomControl()
      // 添加到地图当中
      this.bmap.addControl(myZoomCtrl)
    },
    /**
     * 定位
     */
    locale () {
      // 回调父组件中的locate方法
      this.$emit('locate')
    },
    /** 放大 */
    enlarge () {
      this.bmap.zoomTo(this.bmap.getZoom() + 1)
    },
    /** 缩小 */
    narrow () {
      this.bmap.zoomTo(this.bmap.getZoom() - 1)
    },

    /**
     * @description 客户点聚合 + 缩放显示客户名称 + 点击事件
     * @param {string} city 当前城市
     * @param {object} customers 客户信息
     * @param {object} style 聚合标注样式
     */
    markerClusterer (city, customers, style) {
      console.log('父组件调用子组件方法')
      if (!customers || !Array.isArray(customers) || customers.length <= 1) {
        return
      }

      this.bmap.clearOverlays() // 清除标注

      const markers = []
      const customEvent = new CustomEvent()
      customEvent.on('onGetPointsComplete', (res) => {
        // eslint-disable-next-line no-unused-expressions
        this.clusterer?.clearMarkers() // 清除标注
        this.clusterer = new BMapLib.MarkerClusterer(this.bmap, {
          markers: res,
          // 最小的聚合数量，小于该数量的不能成为一个聚合，默认为2
          minClusterSize: 2,
          styles: [
            {
              url: style.url,
              size: new BMap.Size(style.width, style.height),
              textSize: style.textSize,
              textColor: style.textColor
            }
          ]
        })
      })

      // 遍历客户信息
      for (const customer of customers) {
        // getPoint(city, customer.address).then((res) => {
        // const point = new BMap.Point(res.lng, res.lat)
        const point = new BMap.Point(customer.lng, customer.lat)
        const marker = new BMap.Marker(point)
        createLabel(customer.customerName, {
          fontColor: '#fff',
          bgColor: '#333333',
          fontSize: 14
        }).then((label) => {
          marker.setLabel(label) // 添加label
        })
        // 添加信息窗口
        showUserInfoWindow(this.bmap, marker, customer.html, customer.closeId)
        // 添加时间
        markers.push(marker)

        if (customers.indexOf(customer) === customers.length - 1) {
          customEvent.emit('onGetPointsComplete', markers)
        }
        // })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mapControl {
  // display: none;
  width: 40px;

  .locale {
    background-color: #f8f9fc;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);

    img {
      width: 32px;
      height: 32px;
      margin: 4px;
    }
  }

  .zoom {
    margin-top: 18px;
    background-color: #f8f9fc;
    width: 100%;
    height: 80px;
    border-radius: 8px;
    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
    text-align: center;

    .zoom-add,
    .zoom-unadd {
      display: block;
      font-size: 32px;
      color: #3c67ff;
    }
  }
}
</style>
