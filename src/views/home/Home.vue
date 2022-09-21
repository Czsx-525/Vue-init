<template>
  <div>
    <Header :title="$t('header.home')" />

    <div class="home-div">Home</div>

  </div>
</template>
<script>
import Header from '../../components/header/Header.vue'
export default {
  name: 'Home',
  components: {
    Header
  },
  setup () {
    return {
    }
  }
}
</script>

<style lang='less' scoped>
  .home-div {
    margin-top: 45%;
  }
</style>
