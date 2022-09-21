<template>
  <div>
    <Header :title="$t('mine.security')" :left-text="$t('header.back')" :left-arrow="true" @onClickBack="back()"></Header>
    <ul>
      <!-- <li>
        <van-row type="flex" justify="space-around">
          <van-col span="16" class="item-left">
            <span>数字密码</span>
          </van-col>
          <van-col span="4">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </li> -->
      <li>
        <van-row type="flex" justify="space-around">
          <van-col span="16" class="item-left">
            <span>{{$t('gestureLogin.gesturePassword')}}</span>
          </van-col>
          <van-col span="4">
           <van-switch v-model="checked" @change="change" size="18px" />
          </van-col>
        </van-row>
      </li>
    </ul>

    <van-popup v-model:show="gestureShow" position="bottom" :style="{ height: '35%' }" @close="close">
      <span class="tip">{{tip}}</span>
      <gesture-code class="gesture" :chooseType="3" @result="result"></gesture-code>
    </van-popup>
  </div>
</template>

<script>
import Header from '../../components/header/Header.vue'
import { useRouter } from 'vue-router'
import { ref } from '@vue/reactivity'
import { getCurrentInstance } from 'vue'
import GestureCode from '../../components/gesture-code/GestureCode.vue'
import { Toast } from 'vant'
import { onMounted } from '@vue/runtime-core'
export default {
  components: { Header, GestureCode },
  setup () {
    const router = useRouter()
    const back = () => {
      router.go(-1)
    }
    const { proxy } = getCurrentInstance()
    const logo = require('../../assets/image/logo.png')
    const checked = ref(false)
    const gestureShow = ref(false)
    const tip = ref(proxy.$t('gestureLogin.pleaseVerifyGesture'))

    const close = () => {
      const gestureCode = localStorage.getItem('gestureCode')
      if (!gestureCode && checked.value) {
        checked.value = false
      } else if (gestureCode && !checked.value) {
        checked.value = true
      }
    }

    const change = (flag) => {
      if (flag) {
        tip.value = proxy.$t('gestureLogin.pleaseCreateGesture')
      } else {
        tip.value = proxy.$t('gestureLogin.pleaseVerifyGesture')
      }
      gestureShow.value = true
    }

    const result = (result) => {
      const gestureCode = result.join('')
      if (checked.value) {
        localStorage.setItem('gestureCode', gestureCode)
        Toast.success(proxy.$t('gestureLogin.createSuccess'))
      } else {
        if (localStorage.getItem('gestureCode') === gestureCode) {
          localStorage.removeItem('gestureCode')
          Toast.success(proxy.$t('gestureLogin.closeSuccess'))
        } else {
          Toast.fail(proxy.$t('gestureLogin.verificationFailed'))
        }
      }
      gestureShow.value = false
    }

    onMounted(() => {
      if (localStorage.getItem('gestureCode')) {
        checked.value = true
      }
    })

    return { logo, checked, gestureShow, tip, back, result, change, close }
  }
}
</script>

<style lang="less" scoped>

ul{
  font-size: 16px;

  li{
    height: 25px;
    margin: 10px 0 0;
    line-height: 25px;
  }

 .item-left {
    text-align: left;

    span {
      margin-left: 5px;
    }
 }
}

.tip{
  display: block;
  font-size: 16px;
  color: #787878;
  margin: 0.3rem 0;
}

.gesture{
  width: 5rem;
  height: 5rem;
}

</style>
