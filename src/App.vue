<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss">
  @import '~@/styles/reset';
  @import '~@/styles/fonts';
  
  body {
    background-color: #000;
    font-family: $ropa;
    color: #fff;
  }
</style>
