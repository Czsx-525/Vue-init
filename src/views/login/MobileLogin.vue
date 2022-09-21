<template>
  <div class="mobileLogin">
    <Header :title="$t('login.loginViaMobile')" :left-text="$t('header.back')" :left-arrow="state.leftArrow"
      @onClickBack="back2Login()"></Header>

    <!-- 手机号登录 -->
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-cell :title="$t('login.countryOrArea')" title-style="text-align:left" :value="$t('login.China')" />

        <van-field
          v-model="state.phonenum"
          :label="$t('login.x86')"
          :placeholder="$t('login.mobileNo')"
          type="number"
          maxlength="11"
          clearable
          :rules="[{validator:telValidate, message: $t('componentDemo.telError') }]"
        />

        <van-field v-model="state.verificationCode" :label="$t('login.verificationCode')"
          :placeholder="$t('login.verificationCode')" :rules="[{ required: true, message: $t('login.inputVeriCode') }]">
          <template #button>
            <van-button class="sendmsg" v-if="!state.isCountingdown" size="small" type="success" @click="sendMessage">
              {{ $t('login.sendVeriCode') }}</van-button>
            <van-button class="time" v-else size="small" type="success">{{
              state.countText
            }}</van-button>
          </template>
        </van-field>
      </van-cell-group>

      <div class="login-button">
        <van-button round block type="success" native-type="submit">
           {{$t('login.login')}}
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Header from '../../components/header/Header.vue'
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
import { getCurrentInstance } from '@vue/runtime-core'
export default {
  name: 'MobileLogin',
  components: {
    Header
  },
  setup () {
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      phonenum: '', // 手机号
      verificationCode: '', // 验证码
      isCountingdown: false, // 是否倒计时
      countText: '60 S',
      leftArrow: true
    })
    // 倒计时
    const sendMessage = () => {
      // 此处需要有调用短信验证码防范
      let time = 60 // 初始化倒计时的时间为60秒
      state.isCountingdown = true // 是否正在倒计时
      const intverval = setInterval(function () {
        // 执行倒计时内容
        time--
        if (time <= 0) {
          state.isCountingdown = false
          clearInterval(intverval) // 清除倒计时
        }
        state.countText = time + ' S'
      }, 1000)
    }
    // 手机号校验函数
    const telValidate = () => {
      if (!/^1[3-9][0-9]{9}$/.test(state.phonenum)) {
        return false
      } else {
        return true
      }
    }
    // 登录提交
    const onSubmit = async () => {
      Toast.loading({
        message: proxy.$t('login.loggingin'),
        forbidClick: true
      })

      setTimeout(() => {
        Toast.success(proxy.$t('login.loginSuccess'))
        Toast.clear()
        router.replace({ path: '/mainContent' })
      }, 1000)
    }

    // 返回登录页
    const back2Login = async () => {
      router.replace({
        path: '/login'
      })
    }
    return {
      state,
      sendMessage,
      onSubmit,
      back2Login,
      telValidate
    }
  }
}
</script>

<style lang="less" scoped>
  .mobileLogin {
    .sendmsg{
      background-color: var(--bgcolor);
      border: var(--bgcolor);
    }
    .time{
      background-color: #909399;
      border: 1px solid #909399;
    }
    .login-button {
      margin: 30px 20px 0px 20px;

      button {
        border-radius: 5px;
        background-color: var(--bgcolor);
      }
    }

  }
</style>
