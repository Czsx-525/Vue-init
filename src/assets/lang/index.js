import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
import enLocale from './en_us'
import zhLocale from './zh_cn'

// const app  = createApp(App);
// app.use(VueI18n)

const messages = {
  en: {
    ...enUS,
    ...enLocale
  },
  zh: {
    ...zhCN,
    ...zhLocale
  }
}

export const i18n = createI18n({
  locale: 'zh', // 设置默认语言
  messages: messages, // 设置资源文件对象
  globalInjection: true,
  legacy: false
})

// 更新vant组件库本身的语言变化，支持国际化
export function vantLocales (lang) {
  if (lang === 'en') {
    Locale.use(lang, enUS)
  } else if (lang === 'zh') {
    Locale.use(lang, zhCN)
  }
}

// export default {
//   i18n
// }
