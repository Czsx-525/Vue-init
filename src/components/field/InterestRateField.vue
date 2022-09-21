<template>
  <div>
    <van-field
      class="rate-field"
      v-model="state.value"
      :label="$t('componentDemo.rate')"
      :placeholder="$t('componentDemo.rateInput')"
      type="number"
      clearable
      @focus="getFocusRate"
      @blur="getBlurRate"
      @update:model-value="onChange"
      :formatter="formatter"
    >
      <template #button> % </template>
    </van-field>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'InterestRateField',
  setup (pops, ctx) {
    const state = reactive({
      value: '', // 输入框数据
      originValue: '', // 原始数据
      dealValue: '' // 处理过的数据
    })

    // 值改变
    const onChange = () => {
      ctx.emit('value', state.value)
    }
    // 获取焦点
    const getFocusRate = (event) => {
      state.value = state.originValue
      ctx.emit('focusValue', event.target.value)
    }
    // 取消焦点
    const getBlurRate = (event) => {
      state.originValue = event.target.value
      state.dealValue = parseFloat(event.target.value).toFixed(2)
      if (isNaN(state.dealValue)) {
        state.dealValue = ''
      }
      state.value = state.dealValue
      if (state.dealValue.length <= 0) {
        ctx.emit('blurValue', state.dealValue)
      } else {
        ctx.emit('blurValue', state.dealValue + '%')
      }
    }
    // 0-100数字校验
    const formatter = (val) => {
      if (val >= 0 && val <= 100) {
        return val
      }
      if (val > 100) {
        let str = val.toString()
        str = str.slice(0, str.length - 1)
        return parseInt(str)
      }
    }

    return {
      state,
      getFocusRate,
      getBlurRate,
      formatter,
      onChange
    }
  }
}
</script>

<style lang="less" scoped>
</style>
