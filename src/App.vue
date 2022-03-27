<template>
  <div class="wrapper" id="app">
    <Header></Header>
      <BaseLayout></BaseLayout>
    <Footer></Footer>
  </div>
</template>

<script>
import BaseLayout from './layouts/BaseLayout.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    BaseLayout,
    Header,
    Footer
  }
}
</script>

<style>
  @import "./assets/css/common.css";
  @import "./assets/css/fonts.css";
#app {
  text-align: center;
}
</style>
