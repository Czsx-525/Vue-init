<template>
  <div class="mainContent">
    <router-view class="main-content-router" />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/footer/Footer.vue'
export default {
  name: 'MainContent',
  components: {
    Footer
  },

  setup () {

  }
}
</script>

<style scoped>
</style>
