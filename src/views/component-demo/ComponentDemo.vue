<template>
  <div class="componentDemo">
    <Header :title="$t('componentDemo.componentdemo')"></Header>

    <div class="row">
      <div class="column_1 countryPicker" @click="toCountryPickerDemo()">{{$t('componentDemo.countryPicker')}}</div>
      <div class="column_2 industryPicker" @click="toIndustryPickerDemo()">{{$t('componentDemo.industryPicker')}}</div>
    </div>

    <div class="row">
      <div class="column_1 cascadePicker" @click="toCascadePickerDemo()">{{$t('componentDemo.cascadePicker')}}</div>
      <div class="column_2 amesTable" @click="toAmesTableDemo()">{{$t('componentDemo.amesTable')}}</div>
    </div>

    <div class="row">
      <div class="column_1 numberKeyboard" @click="toNumberKeyboardDemo()">{{$t('componentDemo.numberKeyboard')}}</div>
      <div class="column_2 inputBox" @click="toInputBoxDemo()">{{$t('componentDemo.inputBox')}}</div>
    </div>

    <div class="row">
      <div class="column_1 pullRefresh" @click="toDropDownMenuDemo()">{{$t('componentDemo.dropDownMenu')}}</div>
      <div class="column_2 baiduMap" @click="toBaiduMapDemo()">{{$t('componentDemo.baiduMap')}}</div>
    </div>

    <div class="row">
      <div class="column_1 signature" @click="toSignatureDemo()">{{$t('componentDemo.signature')}}</div>
      <div class="column_2 steps" @click="toStepsDemo()">{{$t('componentDemo.steps')}}</div>
    </div>

    <div class="row">
      <div class="column_1 amesImage" @click="toImageDemo()">{{$t('componentDemo.amesImage')}}</div>
      <div class="column_2 riskDetection" @click="toRiskDetectDemo()">{{$t('componentDemo.riskDetection')}}</div>
    </div>

    <div class="row">
      <div class="column_1 pdfPreview" @click="toPDFPreview()">{{$t('componentDemo.pdfPreview')}}</div>
      <div class="column_2 emptyBox"></div>
    </div>

  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'ComponentDemo',
  components: {
    Header
  },
  setup () {
    const router = useRouter()

    // 跳转国家选择器 1
    const toCountryPickerDemo = () => {
      router.push({
        path: '/country'
      })
    }

    // 跳转行业选择器 2
    const toIndustryPickerDemo = () => {
      router.push({
        path: '/industry'
      })
    }

    // 跳转级联选择 3
    const toCascadePickerDemo = () => {
      router.push({
        path: '/cascadePickerDemo'
      })
    }

    // 跳转Table 4
    const toAmesTableDemo = () => {
      router.push({
        path: '/table'
      })
    }

    // 跳转数字密码键盘 5
    const toNumberKeyboardDemo = () => {
      router.push({
        path: '/numberKeyboardDemo'
      })
    }

    // 跳转输入框 6
    const toInputBoxDemo = () => {
      router.push({
        path: '/inputBoxDemo'
      })
    }

    // 跳转下拉选择框 7
    const toDropDownMenuDemo = () => {
      router.push({
        path: '/dropDownMenuDemo'
      })
    }

    // 百度地图组件 8
    const toBaiduMapDemo = () => {
      router.push({
        path: '/bmap'
      })
    }

    // 跳转签名 9
    const toSignatureDemo = () => {
      router.push({
        path: '/signature'
      })
    }

    // 跳转步骤条 10
    const toStepsDemo = () => {
      router.push({
        path: '/stepsDemo'
      })
    }

    // 跳转图片组件 11
    const toImageDemo = () => {
      router.push({
        path: '/imageDemo'
      })
    }

    // 跳转风险探测 12
    const toRiskDetectDemo = () => {
      router.push({
        path: '/riskDetectDemo'
      })
    }

    // 跳转PDF预览 13
    const toPDFPreview = () => {
      router.push({
        path: '/pdfdemo'
      })
    }

    return {
      toCountryPickerDemo,
      toIndustryPickerDemo,
      toCascadePickerDemo,
      toAmesTableDemo,
      toNumberKeyboardDemo,
      toInputBoxDemo,
      toDropDownMenuDemo,
      toBaiduMapDemo,
      toSignatureDemo,
      toStepsDemo,
      toImageDemo,
      toRiskDetectDemo,
      toPDFPreview
    }
  }
}
</script>

<style lang="less" scoped>
  .componentDemo {
    width: 100%;
  }

  .row {
    display: flex;
  }

  .column_1 {
    font-size: 0.4rem;
    width: 50%;
    height: 88px;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-align: left;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
  }

  .column_2 {
    font-size: 0.4rem;
    width: 50%;
    height: 88px;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    text-align: left;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
  }

  .countryPicker {
    background: url('../../assets/image/cascade.png');
    background-size: 100% 100%;
  }

  .industryPicker {
    background: url('../../assets/image/industry.png');
    background-size: 100% 100%;
  }

  .cascadePicker {
    background: url('../../assets/image/cascade.png');
    background-size: 100% 100%;
  }

  .amesTable {
    background: url('../../assets/image/table.png');
    background-size: 100% 100%;
  }

  .numberKeyboard {
    background: url('../../assets/image/numberkeyboard.png');
    background-size: 100% 100%;
  }

  .inputBox {
    background: url('../../assets/image/inputbox.png');
    background-size: 100% 100%;
  }

  .pullRefresh {
    background: url('../../assets/image/pullrefresh.png');
    background-size: 100% 100%;
  }

  .baiduMap {
    background: url('../../assets/image/map.png');
    background-size: 100% 100%;
  }

  .signature {
    background: url('../../assets/image/inputbox.png');
    background-size: 100% 100%;
  }

  .steps {
    background: url('../../assets/image/steps.png');
    background-size: 100% 100%;
  }

  .amesImage {
    background: url('../../assets/image/image.png');
    background-size: 100% 100%;
  }

  .riskDetection {
    background: url('../../assets/image/pullrefresh.png');
    background-size: 100% 100%;
  }

  .pdfPreview {
    background: url('../../assets/image/pullrefresh.png');
    background-size: 100% 100%;
  }
</style>
