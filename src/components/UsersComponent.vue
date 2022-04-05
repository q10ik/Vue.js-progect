<template>
<section class="users">
  <div class="container">
    <div class="users__inner">
      <h1 class="users__title">Пользователи</h1>
      <div class="users__search">
        <span class="users__search-icon"></span>
        <input ype="search" v-model="personesfilter" class="users__search-input" placeholder="Поиск">
      </div>
      <div class="users__block">
        <div v-for="item in persones" :key="item.id" class="users__item">
            <UserAvatarComponent class="user" :user-avatar-text='item.profileName' :user-avatar-url='item.profileFileName' />
            <div class="users__item-info">
              <div class="users__item-age">Возраст: {{item.prosonAge}}</div>
              <div class="users__item-city">Город: {{item.prosonCity}}</div>
              <div class="users__item-work">Место работы: {{item.prosonWork}}</div>
              <a href="#" @click=" tryStore()" class="users__item-button">Посмотреть профиль</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import UserAvatarComponent from '../controls/UserAvatarComponent.vue';
export default {
  name: 'UsersComponent',
  components:{
    UserAvatarComponent,
  },
  data() {
    return{
      persones: this.$store.state.PersoneStore.persones,
      personesfilter: '',
    };
  },
  methods:{
    tryStore(){
      this.$router.push('/user/id');

    }
  },
  async mounted() {
    this.$store.subscribe((mutation) => {
      if(mutation.type == "updatePosts"){
        this.persones = this.$store.state.PersoneStore.persones;
      }
    })
     await this.$store.dispatch('loadData');
  },
  watch:{
    personesfilter(newtext){
      this.persones = this.$store.state.PersoneStore.persones.filter(person => person.profileName.includes(newtext))
    }
  },
}
</script>

<style lang="scss" scoped>
 .users {

		&__inner {
		}

		&__title {
      margin-top: 2rem;

		}

		&__search {
      margin-top: 4rem;
      position: relative;
		&-icon {
    position: absolute;
    background: url(../assets/img/7219789.png) no-repeat;
    background-size: contain;
    top: calc(50% - 1.25rem);
    left: 1.7rem;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
		}

		&-input {
    width: 100%;
    height: 4.8rem;
    padding-left: 6rem;
    color: #11253d;
    background: transparent;
    border: 0.1rem solid #cfd3d8;
    border-radius: 0.25rem;
    outline: none;
		}
		}


		&__block {
         border-radius: 0.25rem;
      border: 0.1rem solid #cfd3d8;
      padding: 0.5rem;
      margin-top: 3rem;
      width: 100%;
      @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 0.5rem;
      }
     
		}

		&__item {
         border-radius: 0.25rem;
      border: 0.1rem solid #cfd3d8;
      padding: 1rem;
      display: grid;
      grid-template-columns: 30% 70%;
      align-items: flex-end;
      &-info {
        text-align: left;
        margin-left: 3rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
  
      &-age {
        margin-top: 0.3rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 2rem;

      }
  
      &-city {
        margin-top: 0.3rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 2rem;
      }
  
      &-work {
        margin-top: 0.3rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 2rem;
      }
      &-button{
        display: block;
            margin-top: 2rem;
    padding: 0.5625rem 1.25rem;
    border: .1rem solid #cfd3d8;
    color: #11253d;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 2rem;
    width: fit-content;
      }
		}

}
.profile {
}

</style>