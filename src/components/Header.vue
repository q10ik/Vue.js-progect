<template>
  <div class="header">
    <nav>
      <router-link to="/">Домашняя страница</router-link>
      <router-link to="/users">Пользователи</router-link>
      <router-link to="/profile"><UserAvatarComponent user-avatar-text='Мой профиль' user-avatar-url='myprofile.jpg'/></router-link>
    </nav>
  </div>
</template>



<script>
import UserAvatarComponent from '../controls/UserAvatarComponent.vue';

export default {
  name: 'Header',
  components:{
    UserAvatarComponent 
  },
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
nav{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
a {
  color: #42b983;
  font-size: 2rem;
}
.header{
   background: #11253d;
   padding: 3rem 0 ;
  max-height: 8.4rem;
}
</style>
