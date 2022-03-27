<template>
  <div class="Test">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ number }}</h2>
    <button v-on:click="add">add nimber</button>
    

  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return{
      number: "1",
      msg:"Проект выполнен с использование следующих технологий:",
    };
  },
  methods:{
    add(){
    this.number = this.number + this.number;
    }
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
</style>
