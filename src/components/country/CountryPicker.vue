<template>
  <div style="marginTop: 10px">
    <van-index-bar
      id="indexBar"
      ref="indexBar"
      :index-list="indexList"
      z-index="1000"
    >
      <div v-for="(countryList, key) in countries" :key="key">
        <van-index-anchor :index="key" />
        <div
          v-for="(country, index) in countryList"
          :key="index"
          @click="$emit('select', country)"
        >
          <van-cell :value="language == 'zh' ? country.name : country.en" />
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { IndexBar } from 'vant'
import CountriesCN from '@/assets/data/country-cn.js'
import CountriesEN from '@/assets/data/country-en.js'
import { getCurrentInstance } from 'vue'

export default {
  name: 'CountryPicker',
  props: {
    msg: String
  },
  components: {
    [IndexBar.name]: IndexBar
  },

  setup () {
    const { proxy } = getCurrentInstance()

    let countries = {}
    const indexList = []
    const language = proxy.$i18n.locale

    if (proxy.$i18n.locale === 'zh') {
      countries = CountriesCN
    } else if (proxy.$i18n.locale === 'en') {
      countries = CountriesEN
    }

    for (const key in countries) {
      if (countries[key].length === 0) {
        delete countries[key]
      } else {
        indexList.push(key)
      }
    }

    return {
      language,
      countries,
      indexList
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.van-index-anchor) {
  text-align: left;
}

:deep(.van-cell .van-cell__title) {
  text-align: left;
}
</style>
