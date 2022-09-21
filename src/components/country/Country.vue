<template>
  <div style="height: 100vh">
    <div v-show="isShowSearch">
      <van-sticky>
        <van-search
          v-model="searchText"
          @search="onSearch"
          @cancel="isShowSearch = false"
          placeholder="请输入国家"
          show-action
        />
      </van-sticky>

      <div
        v-for="(country, index) in resultList"
        :key="index"
        @click="$emit('select', country)"
        :ref="'searchItem' + index"
      >
        <van-cell :value="language == 'zh' ? country.name : country.en" />
      </div>
    </div>

    <div v-show="!isShowSearch">
      <van-sticky>
        <van-search placeholder="请输入国家" @click="isShowSearch = true" />
      </van-sticky>
      <van-index-bar
        id="indexBar"
        ref="indexBar"
        :index-list="indexList"
        :sticky="true"
        :sticky-offset-top="50"
      >
        <div v-for="(countryList, key) in countries" :key="key">
          <van-index-anchor :index="key" />
          <div
            v-for="(country, index) in countryList"
            :key="index"
            @click="$emit('select', country)"
            :ref="key + '-' + index">
            <van-cell :value="language == 'zh' ? country.name : country.en" />
          </div>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { IndexBar } from 'vant'
import { getCurrentInstance, ref } from '@vue/runtime-core'
import CountriesCN from '@/assets/data/country-cn.js'
import CountriesEN from '@/assets/data/country-en.js'

export default {
  name: 'Country',
  props: {
    msg: String
  },
  components: {
    [IndexBar.name]: IndexBar
  },
  setup () {
    const { proxy } = getCurrentInstance()

    const isShowSearch = ref(false)
    const searchText = ref('')
    const resultList = ref([])

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

    const onSearch = (val) => {
      if (val.length > 0) {
        for (const key in countries) {
          if (val[0].toLowerCase() === key.toLowerCase()) {
            resultList.value = countries[key]
          }
        }
      }
    }
    return {
      isShowSearch,
      searchText,
      language,
      countries,
      indexList,
      resultList,
      onSearch
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
