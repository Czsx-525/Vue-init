<template>
  <div>
    <Header
      :title="$t('componentDemo.countryPicker')"
      :left-text="$t('header.back')"
      :left-arrow="leftArrow"
      @onClickBack="back()"
    />

    <van-cell-group inset>
      <van-field v-model="country1" center label="国家">
        <template #button>
          <van-icon name="location-o" @click="showCountryPicker()" />
        </template>
      </van-field>

      <!-- <van-field v-model="country2" center label="国家 (跳转)">
        <template #button>
          <van-icon name="search" @click="showCountryPage()" />
        </template>
      </van-field> -->
    </van-cell-group>

    <van-popup v-model:show="isShowCountryPicker" position="bottom" :style="{ height: '82%' }">
      <CountryPicker @select="selectCountry"></CountryPicker>
    </van-popup>

    <!-- <van-popup v-model:show="isShowCountryPicker2" position="bottom">
      <Country @select="selectCountry2"></Country>
    </van-popup> -->
  </div>
</template>

<script>
import CountryPicker from '../../components/country/CountryPicker.vue'
import Country from '../../components/country/Country.vue'
import Header from '../../components/header/Header.vue'
import { useRouter } from 'vue-router'
import { ref } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
export default {
  components: {
    Header,
    CountryPicker
  },

  setup () {
    const leftArrow = true
    const isShowCountryPicker = ref(false)
    const isShowCountryPicker2 = ref(false)
    const router = useRouter()
    const country1 = ref('')
    const country2 = ref('')
    const { locale } = useI18n()
    const back = () => {
      router.go(-1)
    }
    const selectedLang = ref(locale.value)
    const selectCountry = (value) => {
      country1.value = selectedLang.value === 'en' ? value.en : value.name
      isShowCountryPicker.value = false
    }

    const selectCountry2 = (value) => {
      country2.value = value.name
      isShowCountryPicker2.value = false
    }

    const showCountryPicker = () => {
      isShowCountryPicker.value = true
    }

    const showCountryPage = () => {
      isShowCountryPicker2.value = true
    }

    return {
      leftArrow,
      isShowCountryPicker,
      isShowCountryPicker2,
      country1,
      country2,
      back,
      showCountryPicker,
      showCountryPage,
      selectCountry,
      selectCountry2
    }
  }
}
</script>

<style lang="less" scoped>
</style>
