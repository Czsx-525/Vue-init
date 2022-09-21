<template>
  <div>
    <Header :title="$t('componentDemo.pdfPreview')" :left-text="$t('header.back')" :left-arrow="leftArrow"
      @onClickBack="back()" />

    <div id="viewerContainer">
      <div id="viewer" class="pdfViewer"></div>
    </div>

    <div class="footer-button">
      <div class="pdf-button previous" id="previous">
        <van-icon name="arrow-up" size="0.5rem" />
      </div>
      <div class="pdf-button next" id="next">
        <van-icon name="arrow-down" size="0.5rem" />
      </div>
      <div class="pdf-button pageNumber">
        <input type="number" id="pageNumber" :value="currPageNum" size="4" min="1">
      </div>
      <div class="pdf-button zoomOut" id="zoomOut">
        <van-icon name="minus" size="0.5rem" />
      </div>
      <div class="pdf-button zoomIn" id="zoomIn">
        <van-icon name="plus" size="0.5rem" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/Header.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { Toast } from 'vant'
export default {
  components: {
    Header
  },

  setup () {
    const currPageNum = ref('1')
    const leftArrow = true
    const router = useRouter()
    const back = () => {
      router.replace({ path: '/mainContent/componentDemo' })
    }

    onMounted(() => {
      window.PDFViewerApplication.initUI()
      window.PDFViewerApplication.open({
        // url: 'http://file.gp58.com/file/2018-11-14/111405.pdf',
        url: 'https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf'
      })
    })

    window.PDFViewerApplication.reachToBottom = () => {
      Toast('已滑到PDF文档最后!')
    }

    return {
      currPageNum,
      leftArrow,
      back
    }
  }
}
</script>

<style lang="less" scoped>
  .footer-button {
    background-color: white;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;

    .pdf-button {
      width: 25%;
      line-height: 40px;
    }

    .pdf-button.pageNumber {
      input {
        width: 60px;
        height: 40px;
        text-align: center;
        border: 0;
        font-size: 18px;
      }
    }
  }

  #viewerContainer {
    position: absolute;
    overflow: auto;
    width: 100%;
    top: 70px;
    bottom: 40px;
    left: 0;
    right: 0;
  }

  canvas {
    margin: auto;
    display: block;
  }

  .pdfViewer .page .loadingIcon {
    width: 2.9rem;
    height: 2.9rem;
    background: url("../../assets/image/spinner.png") no-repeat left top / 38rem;
    border: medium none;
    animation: 1s steps(10, end) 0s normal none infinite moveDefault;
    display: block;
    position: absolute;
    top: calc((100% - 2.9rem) / 2);
    left: calc((100% - 2.9rem) / 2);
  }

</style>
