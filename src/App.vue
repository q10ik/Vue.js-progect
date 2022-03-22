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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
