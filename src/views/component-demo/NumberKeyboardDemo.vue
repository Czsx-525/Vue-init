<template>
  <div>
    <Header
      :title="$t('componentDemo.numberKeyboard')"
      :left-text="$t('header.back')"
      :left-arrow="true"
      @onClickBack="back()"
    />
    <van-field
      v-model="value"
      readonly
      clickable
      :label="$t('componentDemo.numberlabel')"
      :placeholder="$t('componentDemo.numberinput')"
      @touchstart.stop="show = true"
    />
    <div v-if="show">
      <van-number-keyboard
        v-model="value"
        random-key-order
        :show="true"
        :maxlength="6"
        @blur="show = false"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from '@/components/header/Header.vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    Header
  },
  setup () {
    const show = ref(true)
    const value = ref('')
    const router = useRouter()
    const back = () => {
      router.go(-1)
    }
    return {
      show,
      value,
      back
    }
  }
}
</script>

<style lang="less" scoped>
</style>
