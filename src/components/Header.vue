<template>
  <section class="header">
    <div class="container">
    <nav>
      <router-link to="/">Домашняя страница</router-link>
      <router-link to="/users">Пользователи</router-link>
      <div class="header__box"><router-link to="/profile">{{this.userAuth ? "Мой профиль" : "Вход/Регистрация"}}</router-link>
        <div v-if="userAuth" class="">
          <div class="header__open" @click="openMenu()">
            <img src="../assets/img/myprofile.jpg" alt="" class="header__avatar">
            <img src="../assets/img/arrow-down.png" alt="" class="header__button" :class="{ active: menuOpen }">
          </div>  
            <div class="header__menu"  :class="{ active: menuOpen }">
              <a href="" @click="quitAuth()" class="header__quit">Выйти из аккаунта</a>
            </div>
        </div>
      </div>
    </nav>
    </div>
  </section>
</template>



<script>

export default {
  name: 'Header',
  components:{

  },
  props: {

  },
  data() {
    return{
     userAuth: this.isAuthorized() ,
     menuOpen: false,
    };
  },

  methods:{
     isAuthorized(){
          const isAuthed = this.$store.getters.AuntificationState;
          
          return isAuthed ;
    },
    openMenu(){
      this.menuOpen=!this.menuOpen;
      console.log(this.userAuth);
    },
    quitAuth(){
      this.$store.commit('changeAuthState', false);
       this.$router.push('/login');

    }
  },
  mounted() {
    this.$store.subscribe((mutation) => {
      if(mutation.type == "changeAuthState"){
        this.userAuth = this.isAuthorized();
      }
    })
  },
  watch:{
 
  }
}
</script>


<style scoped lang="scss">
nav{
  display: flex;
  justify-content: space-between;
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
  &__avatar{
	width: 3rem;
	height: 3rem;
	border-radius: 3rem;
	margin-left: 0.5rem;
  }
		&__box {
      display:flex;
      align-items:center;
      position:relative;
		}
  &__open {
    cursor:pointer;
  }
		&__button {
      position:absolute;
      right:1rem;
      bottom:-1rem;
      width:1rem;
      height:1rem;
      object-fit:contain;
      transform: unset;
      &.active{
        transform:rotate(180deg);
      }
		}

		&__menu {
       position:absolute;
      right:-3.5rem;
      bottom:120rem;
      width:10rem;
      height:8rem;
      display:flex;
      justify-content:center;
      align-items:center;
      background: #11253d;
      border-radius:0.3rem;
      &.active{
        bottom:-10rem;
      }
		}

		&__quit {
      color: #42b983;
      font-size: 1.5rem;
		}

}
</style>
