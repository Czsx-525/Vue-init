<template>
  <div class="risk-detect">
    <Header
      :title="$t('componentDemo.riskDetection')"
      :left-text="$t('header.back')"
      :left-arrow="true"
      @onClickBack="back()"
    />
    <RiskDetect class="risk-detect-content" :riskLists='riskLists' @selectRisk="testSelect" @recheck="recheck" @sure="sure"></RiskDetect>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { useRouter } from 'vue-router'
import RiskDetect from '../../components/risk-detect/RiskDetect.vue'
import { ref } from 'vue'
import { Toast } from 'vant'
export default {
  components: {
    Header,
    RiskDetect
  },
  setup () {
    const router = useRouter()
    const riskLists = ref([
      {
        name: '客户信息预警检查',
        isPass: false,
        data: [
          {
            mission: '当前客户黑名单位置',
            result: 0,
            tips: '检查通过，阿信大保健三天'
          },
          {
            mission: '当前客户黑名单位置',
            result: 1,
            tips: '警告，阿信连续大保健肾虚'
          },
          {
            mission: '当前客户黑名单位置',
            result: 2,
            tips: '检查失败，阿信连续大保健肾虚送医院'
          }
        ]
      },
      {
        name: '担保人情况分析',
        isPass: true,
        data: [
          {
            mission: '当前客户黑名单位置',
            result: 0,
            tips: '检查通过，阿信大保健三天'
          },
          {
            mission: '当前客户黑名单位置',
            result: 1,
            tips: '警告，阿信连续大保健肾虚'
          },
          {
            mission: '当前客户黑名单位置',
            result: 2,
            tips: '检查失败，阿信连续大保健肾虚送医院'
          }
        ]
      },
      {
        name: '担保人情况分析',
        isPass: true,
        data: [
          {
            mission: '当前客户黑名单位置',
            result: 0,
            tips: '检查通过，阿信大保健三天'
          },
          {
            mission: '当前客户黑名单位置',
            result: 1,
            tips: '警告，阿信连续大保健肾虚'
          }
        ]
      }
    ])
    const back = () => {
      router.go(-1)
    }
    const testSelect = (index) => {
    }
    const recheck = () => {
      Toast('重新检查')
    }
    const sure = () => {
      Toast('确认')
    }
    return {
      back,
      riskLists,
      testSelect,
      recheck,
      sure
    }
  }
}
</script>

<style lang="less" scoped>
.risk-detect {
  height: 100%;
  .risk-detect-content {
    height: calc(~"100% - 60px");
    position: relative;
  }
}
</style>
