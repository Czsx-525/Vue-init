<template>
  <div class="gesture-box">
    <Header :isShowLeft="true" :title="$t('login.loginViaGesture')" :left-text="$t('header.back')" @onClickBack="back()"></Header>
    <div class="body">
      <div><img :src="logo"/></div>
      <span>{{$t('gestureLogin.gestureMsg')}} </span>
      <div>
      <gesture-code class="gesture-ui" ref="gesture" :chooseType="type" @result="result"></gesture-code>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import Header from '../../components/header/Header.vue'
import GestureCode from '@/components/gesture-code/GestureCode'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
export default {
  components: {
    Header,
    'gesture-code': GestureCode
  },
  setup () {
    const type = ref(3)
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const back = () => {
      router.replace({
        path: '/login'
      })
    }
    const logo = require('../../assets/image/handpassword.png')
    const result = (data) => {
      const pwd = data.join('')

      if (pwd === localStorage.getItem('gestureCode')) {
        Toast.loading({
          message: proxy.$t('login.loginSuccess'),
          forbidClick: true
        })
        setTimeout(() => {
          router.replace({ path: '/mainContent' })
        }, 1000)
      } else {
        Toast.fail(proxy.$t('login.gestureWrong'))
      }
    }

    return {
      type,
      result,
      logo,
      back
    }
  }
}
</script>

<style lang="less" scoped>
.gesture-box {
  height: 100vh;
  width: 100%;

  .body{
    position: relative;
    top: 10%;
    display: inline-grid;
    span{
      font-size: 22px;
      font-weight: bold;
      margin: 5px;
    }

    .gesture-ui {
      margin-top: 20px;
    }
  }
}
</style>
