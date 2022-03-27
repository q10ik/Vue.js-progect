<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <h1>{{ msg }}</h1>
    <ul >
  <li v-for="item in tech" :key="item.message">{{ item.id }}){{ item.message }}</li>
</ul>

  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return{
      msg:"Проект выполнен с использование следующих технологий:",
      tech:[
        { id:'1', 
          message:'Vue-Router'},
        { id:'2',
          message:'API/Axios'},
        { id:'3', 
          message:'Midlevair'},
        { id:'4', 
          message:'Vuex'},
      ]
    };
  },
  methods:{
  }
}
</script>


<style scoped>
h1{
  margin-top: 10px;
}
.home{
  margin-top: 50px;
}
li{
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-top: 2rem;
}
</style>
