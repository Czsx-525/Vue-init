<template>
  <van-tabbar v-model="active" style="z-index: 1999" :fixed="fixed" :placeholder="placeholder">
    <van-tabbar-item v-for="(tab, index) in tabList" :icon="tab.icon" :to="tab.path" :dot="tab.dot" :info="tab.info"
      :key="index">
      {{ $t(tab.name) }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import {
  reactive,
  onMounted,
  toRefs
} from 'vue'

export default {
  name: 'Footer',
  setup () {
    const state = reactive({
      active: 0,
      fixed: true,
      placeholder: true,
      tabList: [{
        name: 'header.home',
        path: '/mainContent/home',
        pathName: 'home',
        icon: 'wap-home-o',
        dot: false,
        info: ''
      },
      {
        name: 'componentDemo.component',
        path: '/mainContent/componentDemo',
        pathName: 'componentDemo',
        icon: 'apps-o',
        dot: false,
        info: ''
      },
      {
        name: 'mine.mine',
        path: '/mainContent/mine',
        pathName: 'mine',
        icon: 'manager-o',
        dot: false,
        info: ''
      }
      ]
    })

    onMounted(() => {
      const navBarActive = window.location.href
      if (navBarActive.indexOf('mainContent/home') !== -1) {
        state.active = 0
      } else if (navBarActive.indexOf('mainContent/componentDemo') !== -1) {
        state.active = 1
      } else if (navBarActive.indexOf('mainContent/mine') !== -1) {
        state.active = 2
      }
    })

    const refData = toRefs(state)

    return {
      ...refData
    }
  }
}
</script>
<style lang="less" scoped>
.van-tabbar-item--active{
  color:var(--bgcolor);
}
</style>
