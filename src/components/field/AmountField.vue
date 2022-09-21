<template>
  <div>
    <van-field
      class="amount-field"
      v-model="state.value"
      :label="$t('componentDemo.amount')"
      :placeholder="$t('componentDemo.amountInput')"
      :type="state.inputMoneyType"
      :formatter="formatter"
      format-trigger="onChange"
      clearable
      @focus="getFocusMoney"
      @blur="getBlurMoney"
      @update:model-value="onChange"
    >
      <template #button> {{ $t('componentDemo.cny') }} </template>
    </van-field>
  </div>
</template>

<script>
import { formatAmount } from '../../utils/dateFormat.js'
import { ref, reactive } from 'vue'
export default {
  name: 'AmountField',
  props: {
    pointNumber: {
      type: Number,
      default: 2
    } // 自定义小数点位数
  },
  setup (pops, ctx) {
    const state = reactive({
      value: '', // 输入框数据
      originValue: '', // 原始数据
      dealValue: '', // 处理过的数据
      inputMoneyType: 'number', // input框的类型，数字/字符串
      needChange: true // 判断是否需要格式化的标识
    })
    // 值改变监听
    const onChange = () => {
      ctx.emit('value', state.value)
    }
    // 获取焦点监听
    const getFocusMoney = (event) => {
      state.value = state.originValue
      state.inputMoneyType = 'number'
      state.needChange = true
      ctx.emit('focusValue', event.target.value)
    }
    // 失去焦点监听
    const getBlurMoney = (event) => {
      state.inputMoneyType = 'text'
      state.needChange = false
      state.originValue = event.target.value
      state.dealValue = formatAmount(event.target.value)
      state.value = formatAmount(event.target.value)
      ctx.emit('blurValue', state.dealValue)
    }
    // 正则校验
    const formatter = (val) => {
      if (val === '.') {
        return 0
      }
      if (state.needChange === false) {
        return val
      } else {
        val = val.toString().match(/^\d*(\.?\d{0,2})/g)[0] || null
        return val
      }
    }
    return {
      state,
      onChange,
      getFocusMoney,
      getBlurMoney,
      formatAmount,
      formatter
    }
  }
}
</script>

<style lang="less" scoped>
.amount-field {
  width: 100%;
}
</style>
