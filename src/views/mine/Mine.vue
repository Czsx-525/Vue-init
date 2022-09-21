<template>
  <div class="mine">
    <Header :title="$t('mine.mine')"></Header>
    <div class="body">
      <!-- 顶部个人信息栏 -->
      <div class="user-info">
        <div>
          <van-image round width="64" height="64" lazy-load src="https://s.yezgea02.com/1604040746310/aaaddd.png" />
          <div class="user-desc">
            <span>{{$t('mine.nickname')}}</span>
            <span>{{$t('mine.institution')}}</span>
          </div>
        </div>
      </div>

      <ul class="user-list">
        <li class="van-hairline--bottom" @click="goTo('/languages')">
          <span>{{$t('mine.i18n')}}</span>
          <van-icon name="arrow" />
        </li>
        <li class="van-hairline--bottom" @click="goTo('/themes')">
          <span>{{$t('mine.skin')}}</span>
          <van-icon name="arrow" />
        </li>
        <li class="van-hairline--bottom" @click="goTo('/safe')">
          <span>{{$t('mine.security')}}</span>
          <van-icon name="arrow" />
        </li>
        <li @click="goTo('/about')">
          <span>{{$t('mine.about')}}</span>
          <van-icon name="arrow" />
        </li>
      </ul>

      <div class="logout" @click="logout()">{{$t('mine.logout')}}</div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/Header.vue'
import { useRouter } from 'vue-router'
import { reactive, getCurrentInstance } from 'vue'
import { Dialog } from 'vant'

export default {
  name: 'Mine',
  components: {
    Header
  },
  setup () {
    const router = useRouter()
    const state = reactive({
      user: {},
      loading: false
    })
    const { proxy } = getCurrentInstance()
    const goTo = (url, param) => {
      router.push({
        path: url,
        query: param || {}
      })
    }

    // 退出登录
    const logout = () => {
      Dialog.confirm({
        title: proxy.$t('mine.exitApp'),
        message: proxy.$t('mine.exitMsg')
      })
        .then(() => {
          // 退出时清除用户信息
          router.replace({
            path: '/login'
          })
        })
        .catch(() => {
          // on cancel
        })
    }
    return {
      state,
      goTo,
      logout
    }
  }
}
</script>

<style lang="less" scoped>
  .mine {
    background: #ffffff;
    padding: 5px;

    .body {
      .user-info {
        margin: 10px;
        height: 150px;
        background: linear-gradient(var(--bgcolor), var(--linearbgcolor));
        box-shadow: 0 2px 5px var(--bgcolor);
        border-radius: 6px;

        .van-image {
          margin-top: 10px;
        }

        .user-desc {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #fff;

          span {
            color: #fff;
            padding: 2px 0;
          }
        }

      }

      .user-list {
        padding: 0 20px;
        margin-top: 20px;

        li {
          height: 40px;
          line-height: 40px;
          display: flex;
          justify-content: space-between;
          font-size: 0.37rem;

          .van-icon-arrow {
            margin-top: 13px;
          }
        }
      }

      .logout {
        margin: 1rem;
        font-size: 0.38rem;
        color: var(--bgcolor);
        border: 1px solid var(--bgcolor);
        line-height: 0.8rem;
      }
    }
  }
</style>
