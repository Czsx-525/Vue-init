<template>
  <div>
    <Header
      :title="$t('componentDemo.steps')"
      :left-text="$t('header.back')"
      :left-arrow="true"
      @onClickBack="back()"
    />
    <step></step>
    <AmesStep :childstep ="childStep" :step="step"></AmesStep>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/header/Header.vue'
import step from '@/components/steps/Steps.vue'
import AmesStep from '@/components/ames-steps/AmesSteps.vue'
export default {
  components: { Header, step, AmesStep },
  setup () {
    const router = useRouter()
    const step = ref(1)
    const childStep = ref(1)
    const back = () => {
      router.go(-1)
    }
    return {
      back,
      step,
      childStep
    }
  }
}
</script>
<style lang="less" scoped>

</style>
