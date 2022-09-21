<template>
  <div class="sign-box">
    <Header
      :title="$t('componentDemo.signature')"
      :left-text="$t('header.back')"
      :left-arrow="leftArrow"
      @onClickBack="back()"
    />

    <Signature ref="sign" :options="options"></Signature>
    <div class="color-option">
      <div
        class="color-select"
        v-for="(color, index) in colorList"
        :key="index"
        :style="{ borderColor: selectedIndex == index ? color : '' }"
        @click="select(index)"
      >
        <div class="color-card" :style="{ 'background-color': color }"></div>
      </div>
    </div>
    <div class="btn-box">
      <button class="clear-btn" @click="clear">{{ $t("sign.clear") }}</button>
      <button class="create-btn" @click="createImg">
        {{ $t("sign.createImg") }}
      </button>
    </div>

    <van-overlay :show="isShowImg" @click="isShowImg = false">
      <div class="wrapper">
        <img :src="img" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Signature from '../../components/signature/Signature.vue'
import { useRouter } from 'vue-router'
import { reactive, ref } from '@vue/reactivity'
import Header from '../../components/header/Header.vue'
export default {
  components: {
    Signature,
    Header
  },

  setup () {
    const router = useRouter()
    const sign = ref()
    const leftArrow = true

    const options = reactive({
      isFullScreen: false, // 是否全屏手写 [Boolean] 可选
      isFullCover: false, // 是否全屏模式下覆盖所有的元素 [Boolean]   可选
      isDpr: false, // 是否使用dpr兼容高分屏 [Boolean] 可选
      lastWriteSpeed: 1, // 书写速度 [Number] 可选
      lastWriteWidth: 2, // 下笔的宽度 [Number] 可选
      lineCap: 'round', // 线条的边缘类型 [butt]平直的边缘 [round]圆形线帽 [square]	正方形线帽
      lineJoin: 'bevel', // 线条交汇时边角的类型  [bevel]创建斜角 [round]创建圆角 [miter]创建尖角。
      canvasWidth: window.screen.width * 0.95, // canvas宽高 [Number] 可选
      canvasHeight: window.screen.height * 0.5, // 高度  [Number] 可选
      isShowBorder: true, // 是否显示边框 [可选]
      bgColor: '#f6f6f6', // 背景色 [String] 可选
      borderWidth: 1, // 网格线宽度  [Number] 可选
      borderColor: '#dadada', // 网格颜色  [String] 可选
      writeWidth: 5, // 基础轨迹宽度  [Number] 可选
      maxWriteWidth: 30, // 写字模式最大线宽  [Number] 可选
      minWriteWidth: 5, // 写字模式最小线宽  [Number] 可选
      writeColor: '#101010', // 轨迹颜色  [String] 可选
      isSign: true, // 签名模式 [Boolean] 默认为非签名模式,有线框, 当设置为true的时候没有任何线框
      imgType: 'png' // 下载的图片格式  [String] 可选为 jpeg  canvas本是透明背景的
    })

    const colorList = ['#101010', '#74DBC8', '#FB8989', '#CA81F7', '#6A9DFF']

    const selectedIndex = ref(0)

    const isShowImg = ref(false)

    const img = ref('')

    const back = () => {
      router.go(-1)
    }

    const select = (index) => {
      selectedIndex.value = index
      options.writeColor = colorList[index]
    }

    const clear = () => {
      sign.value.canvasClear()
    }

    const createImg = () => {
      const data = sign.value?.saveAsImg()
      img.value = data
      isShowImg.value = true
    }

    return {
      leftArrow,
      options,
      colorList,
      selectedIndex,
      isShowImg,
      img,
      sign,
      select,
      clear,
      createImg,
      back
    }
  }
}
</script>

<style lang="less" scoped>
.sign-box {
  canvas {
    margin-top: 0.2rem;
  }

  .color-option {
    width: 100%;
    height: 1.9rem;
    margin: 0.24rem 0;

    .color-select {
      display: inline-block;
      height: 1.836rem;
      border: 1px solid #fff;
      border-radius: 5px;

      .color-card {
        display: inline-block;
        width: 1.35rem;
        height: 1.35rem;
        margin: 0.243rem 0.2rem;
        border-radius: 0.135rem;
      }
    }
  }

  .btn-box {
    width: 100%;
    height: 1.5rem;
    margin-top: 0.5rem;

    .clear-btn,
    .create-btn {
      width: 4rem;
      height: 0.945rem;
      font-size: 0.432rem;
      border: none;
      margin: 0.2025rem 0.5rem;
      border-radius: 5px;
      line-height: 1rem;
    }

    .clear-btn {
      background-color: rgb(240, 245, 254);
      color: rgb(92, 129, 201);
    }

    .create-btn {
      background-color: rgb(4, 85, 252);
      color: #fff;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      background-color: #fff;
    }
  }
}
</style>
