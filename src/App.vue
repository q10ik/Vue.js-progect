<template>
  <div id="app">
    <Header></Header>
    <BaseLayout></BaseLayout>
  </div>
</template>

<script>
import BaseLayout from './layouts/BaseLayout.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    BaseLayout,
    Header
  }
}
</script>

<style>
  @import "./assets/css/common.css";
  @import "./assets/css/fonts.css";
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
