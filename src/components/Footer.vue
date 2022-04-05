<template>
  <div class="footer">
     <p>
       Тестовый проект на Vue.js Кобозева Игоря
    </p>
    <p>
      Документация:
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {

  },

  data() {
    return{
     
    };
  },

  methods:{

  }
}
</script>


<style scoped>

a {
  color: #fff;
  font-size: 2rem;
  text-decoration: underline;
}
p{
  font-size: 2rem;
   color: #42b983;
}
.footer{
  background: #11253d;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
