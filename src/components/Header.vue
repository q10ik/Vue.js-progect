<template>
  <div class="hello">
    <nav>
      <a href="">Домашняя страница</a>
      <a href="">Пользователи</a>
      <a href="">Мой пользователь</a> 
    </nav>
<img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data() {
    return{
      number: "1",
    };
  },
  methods:{
    add(){
    this.number = this.number + this.number;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}
</style>
