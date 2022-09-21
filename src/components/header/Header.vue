<template>
  <van-nav-bar
    :title="title"
    :left-text="left"
    :right-text="right"
    :left-arrow="isShowLeft"
    :border="isShowBoder"
    :fixed="state.fixed"
    :placeholder="state.placeholder"
    @click-left="$emit('onClickBack')"
    @click-right="$emit('onClickRight')"
    class="ames-header"
  >
    <template v-if="isShowRightIcon" #right>
      <van-icon :name="right_icon" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    left: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    isShowLeft: {
      type: Boolean,
      default: false
    },
    isShowBoder: {
      type: Boolean,
      default: true
    },
    right_icon: {
      type: String,
      default: 'search'
    },
    isShowRightIcon: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const state = reactive({
      fixed: true, // 是否固定在顶部
      placeholder: true
    })

    return {
      state
    }
  }
}
</script>
<style lang="less" scoped>
  :deep(.van-nav-bar) {
    padding-top: 14px;
  }
</style>
