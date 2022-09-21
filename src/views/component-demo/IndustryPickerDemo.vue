<template>
  <div>
    <Header
      :title="$t('componentDemo.industryPicker')"
      :left-text="$t('header.back')"
      :left-arrow="leftArrow"
      @onClickBack="back()"
    />
    <van-field
      v-model="industryVal"
      is-link
      readonly
      label="行业"
      placeholder="请选择行业"
      @click="isShowIndustryPicker = true"
    />

    <van-popup v-model:show="isShowIndustryPicker" round position="bottom">
      <IndustryPicker @close="closeIndustryPicker" @finish="industryPick" />
    </van-popup>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Header from '../../components/header/Header'
import IndustryPicker from '../../components/industry/IndustryPicker.vue'
import { useRouter } from 'vue-router'
export default {
  components: { Header, IndustryPicker },
  setup () {
    const router = useRouter()

    const leftArrow = true

    const industryVal = ref('')
    const isShowIndustryPicker = ref(false)

    const back = () => {
      router.go(-1)
    }

    // 关闭行业选择器
    const closeIndustryPicker = () => {
      isShowIndustryPicker.value = false
    }

    const industryPick = (value) => {
      isShowIndustryPicker.value = false
      industryVal.value = value.map((option) => option.itemname).join('/')
    }

    return {
      leftArrow,
      industryVal,
      isShowIndustryPicker,
      back,
      closeIndustryPicker,
      industryPick
    }
  }
}
</script>
