<template>
  <div class="languages">
   <Header :title="$t('languages.title')"
      :left-text="$t('header.back')"
      :left-arrow="true"
      @onClickBack="back()"></Header>
    <div class="body">
      <ul class="languages-list">
        <!-- 中文简体 -->
        <li class="van-hairline--bottom" @click="switchlang('zh')">
          <span>{{ $t("languages.ch") }}</span>
          <van-icon v-if="selectedLang == 'zh'" name="success" />
        </li>
        <!-- 英文 -->
        <li class="van-hairline--bottom" @click="switchlang('en')">
          <span>{{ $t("languages.en") }}</span>
          <van-icon v-if="selectedLang == 'en'" name="success" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { vantLocales } from '../../assets/lang/index.js'
import Header from '../../components/header/Header.vue'
export default {
  name: 'Languages',
  components: { Header },
  setup () {
    const { locale } = useI18n()
    const { proxy } = getCurrentInstance()
    // const store = useStore()
    const navbarTitle = proxy.$t('languages.title')
    const router = useRouter()
    const selectedLang = ref(locale.value)
    const back = () => {
      router.go(-1)
    }
    const state = reactive({
      test: '11'
    })
    const switchlang = (lang) => {
      locale.value = lang
      selectedLang.value = lang
      vantLocales(lang)
    }
    return { switchlang, state, navbarTitle, back, selectedLang }
  }
}
</script>
<style lang="less" scoped>
.languages {
  .languages-list {
    padding: 0 20px;
    margin-top: 20px;
    li {
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .van-icon-success {
        margin-top: 13px;
      }
    }
  }
}
</style>
