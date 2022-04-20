<template>
  <section class="autorization">
    <div class="autorization__inner" @submit="FormValidation">
      <h1 class="autorization__title">Авторизация</h1>
      <form class="autorization__form">
        <input type="text" placeholder="Логин" value="" v-model="authlogin" class="autorization__input">
        <input type="text" placeholder="Пароль" value="" v-model="authpass" class="autorization__input">
        <button type="submit" class="autorization__button">Войти</button>
      <p>логин:{{this.$store.state.AuntificationStore.login}}</p>
      <p>пароль:{{this.$store.state.AuntificationStore.password}}</p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AutorizationComponent',
  props: {

  },

  data() {
    return{
     authlogin:"",
      authpass:"",
    };
  },

  methods:{

    FormValidation(event) {
      event.preventDefault();
      const auntification = this.$store.getters.TryAuntification(this.authlogin, this.authpass);
      if(auntification == true){
        this.$store.commit('changeAuthState', true);
        alert('вы вошли');
        this.$router.push('/');
      } else{
        alert('Повторите попытку');
      }
      // console.log(this.authlogin);
      // console.log(this.authpass);
    }
  }
}
</script>


<style lang="scss" scoped>

.autorization {
  margin-top: 12rem;
  p{
    font-size: 1.5rem;
  }
		&__inner {
      
		}

		&__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 18.9rem;
      margin: 0 auto;
		}

		&__input {
      width: 100%;
    padding: 0 1rem;
    color: #000;
    border: 0.1rem solid #cfd3d8;
    border-radius: 0.4rem;
    outline: none;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    height: 4.8rem;
		}

		&__button {
      width: 10rem;
      height: 3.6rem;
      color: #000;
      font-size: 2rem;
      border: 0.1rem solid #cfd3d8;
      font-weight: 600;
      border-radius: 0.4rem;
      text-align: center;
		}
}

</style>
