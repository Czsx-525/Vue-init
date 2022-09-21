<template>
  <div>
    <Header
      :title="$t('componentDemo.inputBox')"
      :left-text="$t('header.back')"
      :left-arrow="leftArrow"
      @onClickBack="back()"
    />
    <van-field
      v-model="state.tel"
      type="number"
      :label="$t('login.mobileNo')"
      :placeholder="$t('login.inputMobileNo')"
      clearable
      maxlength="11"
      @blur="telValidate"
      :error-message="state.errorTel"
    />
    <van-field
      v-model="state.email"
      type="email"
      :label="$t('componentDemo.email')"
      :placeholder="$t('componentDemo.emailAddress')"
      clearable
      @blur="validate"
      :error-message="state.errorEmail"
    />
    <van-field
      v-model="state.digit"
      type="digit"
      :label="$t('componentDemo.integer')"
      :placeholder="$t('componentDemo.integerInput')"
      clearable
    />
    <van-field
      :label="$t('componentDemo.date')"
      class="date-time"
      readonly
      center
      v-model="state.selectDate"
      :placeholder="$t('componentDemo.selectDate')"
    >
      <template #button>
        <van-button size="small" type="primary" @click="choose()">
          {{ $t('componentDemo.dateSelect') }}
        </van-button>
      </template>
    </van-field>
    <van-popup v-model:show="show" position="bottom" :style="{ height: '50%' }">
      <van-datetime-picker
        v-model="dateTime"
        type="datetime"
        :title="$t('componentDemo.dateSelect')"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @change="dateChange()"
        @confirm="dateConfirm()"
        @cancel="dateCancel()"
      />
    </van-popup>
    <amount-field
      class="amount-field"
      :pointNumber="pointNmuber"
      @value="onChange($event)"
      @focusValue="getFocusMoney($event)"
      @blurValue="getBlurMoney($event)"
    >
    </amount-field>
    <interest-rate-field
      class="rate-field"
      @value="onRateChange($event)"
      @focusValue="getFocusRate($event)"
      @blurValue="getBlurRate($event)"
    >
    </interest-rate-field>
  </div>
</template>

<script>
import AmountField from '../../components/field/AmountField.vue'
import InterestRateField from '../../components/field/InterestRateField.vue'
import Header from '@/components/header/Header.vue'
import { useRouter } from 'vue-router'
import { ref, reactive, getCurrentInstance } from 'vue'
import { formatDate } from '../../utils/dateFormat.js'
export default {
  name: 'FieldDemo',
  components: {
    AmountField,
    InterestRateField,
    Header
  },
  setup () {
    const dateTime = ref(new Date())
    const show = ref(false)
    const pointNmuber = ref(2)
    const leftArrow = true
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      tel: '',
      email: '',
      digit: '',
      number: '',
      selectDate: '',
      errorEmail: '',
      errorTel: ''
    })

    const back = () => {
      router.go(-1)
    }
    const formatter = (type, val) => {
      if (type === 'year') {
        return `${val}年`
      }
      if (type === 'month') {
        return `${val}月`
      }
      if (type === 'day') {
        return `${val}日`
      }
      if (type === 'hour') {
        return `${val}时`
      }
      if (type === 'minute') {
        return `${val}分`
      }
      return val
    }
    const telValidate = () => {
      if (state.tel === '') {
        state.errorTel = ''
        return true
      }
      if (!/^1[3-9][0-9]{9}$/.test(state.tel)) {
        state.errorTel = proxy.$t('componentDemo.telError')
        return false
      } else {
        state.errorTel = ''
        return true
      }
      // state.errorTel = proxy.$t('componentDemo.telError')
    }
    const validate = () => {
      if (state.email === '') {
        state.errorEmail = ''
        return true
      }
      if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(state.email)) {
        state.errorEmail = proxy.$t('componentDemo.emailError')
        return false
      } else {
        state.errorEmail = ''
        return true
      }
      // state.errorEmail = proxy.$t('componentDemo.emailError')
    }

    const choose = () => {
      show.value = true
    }
    // 金额
    const onChange = (data) => {
    }
    const getFocusMoney = (data) => {
    }
    const getBlurMoney = (data) => {
    }
    // 利率
    const onRateChange = (data) => {
    }
    const getFocusRate = (data) => {
    }
    const getBlurRate = (data) => {
    }
    // 日期选择
    const dateChange = () => {}
    const dateConfirm = () => {
      state.selectDate = formatDate({
        date: dateTime.value,
        formatStr: 'yyyy/MM/dd HH:mm'
      })
      show.value = false
    }
    const dateCancel = () => {
      show.value = false
    }

    return {
      pointNmuber,
      leftArrow,
      back,
      onChange,
      getFocusMoney,
      getBlurMoney,
      onRateChange,
      getFocusRate,
      getBlurRate,
      state,
      choose,
      show,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      dateTime,
      formatter,
      dateChange,
      dateConfirm,
      dateCancel,
      formatDate,
      validate,
      telValidate
    }
  }
}
</script>

<style lang="less" scoped>
.van-cell::after {
  border-bottom: none !important;
}
</style>
