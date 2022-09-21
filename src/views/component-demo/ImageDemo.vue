<template>
  <div class="ImageDemo">
    <Header
      :title="$t('componentDemo.imageDemoTitle')"
      :left-text="$t('header.back')"
      :left-arrow="leftArrow"
      @onClickBack="back()"
    />

    <van-image
      width="6rem"
      height="5rem"
      fit="contain"
      @click="onClickFront()"
      :src="image1"
    />

    <van-image
      width="6rem"
      height="5rem"
      fit="contain"
      @click="onClickBack()"
      :src="image2"
    />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { useRouter } from 'vue-router'
import { Notify } from 'vant'
import { ref } from '@vue/reactivity'
export default {
  name: 'ImageDemo',
  components: {
    Header
  },
  setup () {
    const router = useRouter()
    const leftArrow = true
    const image1 = ref(require('../../assets/image/idcardfront.png'))
    const image2 = ref(require('../../assets/image/idcardback.png'))

    const back = () => {
      router.go(-1)
    }

    const onClickFront = () => {
      const data = {
        limit: 1, // 最多选择三张图片
        quality: 100, // 图片质量 0-100，默认100
        allowEditing: false, // 是否允许剪裁
        correctOrientation: true, // 是否修正图片方向，默认true
        isAddWatermark: false, // 是否添加水印，默认不添加
        watermarkPosition: '4', // 水印位置 0-中间 1-左上 2-右上 3-左下 4-右下    默认右下
        watermark: 'amarsoft', // 水印内容
        watermarkSize: 30, // 水印字体大小
        watermarkColor: '#388bff', // 水印字体颜色
        paddingLeft: 10, // 水印距离左侧间距，默认10
        paddingTop: 10, // 水印距离顶部间距
        paddingRight: 10, // 水印距离右侧间距
        paddingBottom: 10, // 水印距离底部间距
        location: '' // 地址信息，跟在watermark后面

      }
      window.AmarBridge.callPlugin('CustomCamera', 'takePhoto', data).then(
        (res) => {
          const images = res.images
          image1.value = images[0]
        }, (err) => {
          alert(JSON.stringify(err))
        }
      )
    }

    const onClickBack = () => {
      const data = {
        limit: 1, // 最多选择三张图片
        quality: 100, // 图片质量 0-100，默认100
        allowEditing: false, // 是否允许剪裁
        correctOrientation: true, // 是否修正图片方向，默认true
        isAddWatermark: false, // 是否添加水印，默认不添加
        watermarkPosition: '4', // 水印位置 0-中间 1-左上 2-右上 3-左下 4-右下    默认右下
        watermark: 'amarsoft', // 水印内容
        watermarkSize: 30, // 水印字体大小
        watermarkColor: '#388bff', // 水印字体颜色
        paddingLeft: 10, // 水印距离左侧间距，默认10
        paddingTop: 10, // 水印距离顶部间距
        paddingRight: 10, // 水印距离右侧间距
        paddingBottom: 10, // 水印距离底部间距
        location: '' // 地址信息，跟在watermark后面

      }
      window.AmarBridge.callPlugin('CustomCamera', 'takePhoto', data).then(
        (res) => {
          const images = res.images
          image2.value = images[0]
        }, (err) => {
          alert(JSON.stringify(err))
        }
      )
    }

    return {
      leftArrow,
      image1,
      image2,
      back,
      onClickFront,
      onClickBack
    }
  }
}
</script>

<style lang="less" scoped>
.ImageDemo {
  width: 100%;
  height: 100%;
}
</style>
