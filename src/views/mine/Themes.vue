<template>
  <div>
    <Header
      :title="$t('mine.skin')"
      :left-text="$t('header.back')"
      :left-arrow="true"
      @onClickBack="back()"
    ></Header>
    <div class="theme">
      <div class="theme-row">
        <div class="theme-div">
          <div class="blue" @click="changeTheme('theme1')">
            <van-icon v-if="selectedTheme== 'theme1'" name="success" color="#ffffff" />
          </div>
          <span>{{ $t("skin.classicBlue") }}</span>
        </div>
        <div class="theme-div">
          <div class="green" @click="changeTheme('theme4')">
            <van-icon v-if="selectedTheme== 'theme4'" name="success" color="#ffffff" />
          </div>
          <span>{{ $t("skin.grasslandGreen") }}</span>
        </div>
      </div>
      <div class="theme-row">
        <div class="theme-div">
          <div class="orange" @click="changeTheme('theme2')">
            <van-icon v-if="selectedTheme== 'theme2'" name="success" color="#ffffff" />
          </div>
          <span>{{ $t("skin.vitalityOrange") }}</span>
        </div>
        <div class="theme-div">
          <div class="skyblue" @click="changeTheme('theme3')">
            <van-icon v-if="selectedTheme== 'theme3'" name="success" color="#ffffff" />
          </div>
          <span>{{ $t("skin.skyBlue") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/Header.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, getCurrentInstance } from 'vue'
export default {
  components: { Header },
  setup (props, ctx) {
    const router = useRouter()
    const store = useStore()
    const { proxy } = getCurrentInstance()
    const selectedTheme = ref(store.state.theme)
    const back = () => {
      router.go(-1)
    }
    const changeTheme = (theme) => {
      store.commit('setTheme', theme)
      selectedTheme.value = theme
    }
    return { back, changeTheme, selectedTheme }
  }
}
</script>

<style lang="less" scoped>
.theme {
  margin: 0.2rem;
  .theme-row {
    display: flex;
    .theme-div {
      height: 200px;
      width: 50%;
      div {
        border-radius: 10%;
        width: 100px;
        height: 100px;
        margin-top: 25px;
        margin-left: calc(~"50% - 50px");
        position: relative;
        i{
          position: absolute;
          top: calc(~"50% - 18px");
          left: calc(~"50% - 18px");
        }
      }
      span {
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
      }
      .blue {
        background-color: #1989fa;
      }
      .orange {
        background-color: #ef904b;
      }
      .skyblue {
        background-color: #61ccf9;
      }
      .green {
        background-color: #46c328;
      }
    }
  }

  .bg-bule {
  }
}
</style>
