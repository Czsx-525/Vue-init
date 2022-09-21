<template>
  <div class="login">
    <div class="amar-logo">
      <img src="../../assets/image/amar-logo.png" alt="AMES" />
    </div>

    <!-- 登陆主体 -->
    <div class="login-body">
      <!-- 账号密码登录 -->
      <van-form @submit="onSubmit">
        <van-cell-group>
          <van-field
            v-model="username"
            :label="$t('login.username')"
            :placeholder="$t('login.username')"
            :rules="[{ required: true, message: $t('login.inputUsername') }, {pattern, message: $t('login.errorUserName')}]"
          />
          <van-field
            v-model="password"
            type="password"
            :label="$t('login.password')"
            :placeholder="$t('login.password')"
            :rules="[{ required: true, message: $t('login.inputPassword') }]"
          />
        </van-cell-group>

        <div class="login-button">
          <van-button round block type="success" native-type="submit">
            {{$t('login.login')}}
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 切换登录模块 -->
    <div class="login-bottom">
      <div class="gesture" @click="switch2Gesture()">{{$t('login.loginViaGesture')}}</div>
      <div class="divider">|</div>
      <div class="mobile" @click="switch2Mobile()">{{$t('login.loginViaMobile')}}</div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref, getCurrentInstance } from 'vue'
import { Toast } from 'vant'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()

    const pattern = /^[A-Za-z0-9]+$/

    const username = ref('') // 账号
    const password = ref('') // 密码
    const { proxy } = getCurrentInstance()
    // 手势密码登录
    const switch2Gesture = () => {
      // 先校验用户是否设置了手势密码
      const gestureCode = localStorage.getItem('gestureCode')
      if (!gestureCode) {
        Toast.fail(proxy.$t('gestureLogin.noGesture'))
        return
      }
      // 跳转手势密码登录窗口
      router.replace({ path: '/gestureLogin' })
    }
    // 手机号登录
    const switch2Mobile = () => {
      // 跳转手势密码登录窗口
      router.replace({ path: '/mobileLogin' })
    }
    // 登录提交
    const onSubmit = async () => {
      // 账号密码登录逻辑
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
    return {
      username,
      password,
      pattern,
      switch2Gesture,
      switch2Mobile,
      onSubmit
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .amar-logo {
    display: block;
    margin: 2rem auto 1.2rem;
    img {
      height: 48px;
      // width: 180px;
    }
  }
  .login-body {
    margin: 0px 0.5rem 0px 0.5rem;
    .login-button {
      margin: 30px 8px 0 8px;

      button {
        border-radius: 5px;
        background-color: var(--bgcolor);
        border: 1px solid var(--bgcolor);
      }
    }
  }
  .login-bottom {
    position: fixed;
    bottom: 10px;
    width: 100%;
    display: flex;
    div {
      font-size: 14px;
      color: #A3A3A3;
    }

    .gesture {
      width: 45%;
    }

    .divider {
      width: 10%;
    }
    .mobile {
      width: 45%;
    }
  }
}
</style>
