<template>
  <div class="hello">
    <nav>
      <!-- <router-link to="/">Домашняя страница</router-link>
      <router-link to="/profile">Пользователи</router-link>
      <router-link to="/user">Мой пользователь</router-link> -->
      <a href="/">Домашняя страница</a>
      <a href="/profile">Пользователи</a>
      <a href="/user">Мой пользователь</a> 
    </nav>
<img alt="Vue logo" src="../assets/img/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Header',
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
h1{
  margin-top: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
nav{
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
img{
  margin-top: 5rem;
}
a {
  color: #42b983;
  font-size: 2rem;
}
</style>
