<template>
<section class="profile">
  <div class="container">
  <h1>{{profiletitle}}</h1>
  <UserAvatarComponent class="profile" :user-avatar-text='profileName' :user-avatar-url='profileFileName' />
  <input class="profile__input" v-if="showInput" type="text" v-model="profileName">
  <div class="profile__block">
    <div class="profile__item">
      <p class="profile__item-text"  v-bind:class="{ small: showInput }">Возраст: <span v-if="!showInput">{{profileAge}}</span></p>
      <input class="profile__item-input" v-if="showInput" type="text" v-model="profileAge">
    </div>
    <div class="profile__item">
      <p class="profile__item-text" v-bind:class="{ small: showInput }">Город: <span v-if="!showInput">{{profileCity}}</span></p>
      <input class="profile__item-input" v-if="showInput" type="text" v-model="profileCity">
    </div>
    <div class="profile__item">
      <p class="profile__item-text" v-bind:class="{ small: showInput }">Место работы: <span v-if="!showInput">{{profileWork}}</span></p>
      <input class="profile__item-input" v-if="showInput" type="text" v-model="profileWork">
    </div>
  </div>
    <button class="profile__button" v-if="redact" @click="ChangeProfile">Редактировать</button>
</div>
</section>
</template>

<script>
import UserAvatarComponent from '../controls/UserAvatarComponent.vue';
import UserApiClient from "../api/UserApiClient";
// import EmployeeApiClient from "../api/EmployeeApiClient";

export default {
  name: 'ProfileComponent',
  components:{
    UserAvatarComponent
  },

    props:{
      RedactProfile:{
        default: false,
        type: Boolean 
      },
      ProfileTitle:{
        default: "Профиль",
        type: String 
      }
    },
  data() {
    return{
      profiletitle: this.ProfileTitle,
      profileName:'',
      profileFileName:'dafault.jpg',
      profileAge: '',
      profileCity: '',
      profileWork: '',
      showInput: false,
      redact: this.RedactProfile,
      userID:'0'
    };
  },
  async mounted() {
    if(this.redact){
    const userApi = new UserApiClient();
    const Profile = await userApi.getUser();
    this.profileName = Profile.firstName + Profile.lasName; 
    this.profileFileName = Profile.avatar;
    this.profileAge = Profile.age;
    this.profileCity = Profile.city;
    this.profileWork = Profile.work;} else {
      this.userID = this.$route.params.id;
      // const userApi = new EmployeeApiClient();
			// const Emploer = await userApi.getEmployeeProfile(this.userID);
      const Emploer = this.$store.getters.filtaredPersonesById(this.userID);
      this.profileName = Emploer[0].profileName; 
      this.profileFileName = Emploer[0].profileFileName;
      this.profileAge = Emploer[0].prosonAge;
      this.profileCity = Emploer[0].prosonCity;
      this.profileWork = Emploer[0].prosonWork;
    }
	},
  methods:{
  ChangeProfile() {
    this.showInput = !this.showInput; 
  }
  },
   watch:{
    async RedactProfile(newRedactAtribute){
        this.redact = newRedactAtribute;
    if(this.redact){
    const userApi = new UserApiClient();
    const Profile = await userApi.getUser();
    this.profileName = Profile.firstName + Profile.lasName; 
    this.profileFileName = Profile.avatar;
    this.profileAge = Profile.age;
    this.profileCity = Profile.city;
    this.profileWork = Profile.work;} else {
      this.userID = this.$route.params.id;
      // const userApi = new EmployeeApiClient();
			// const Emploer = await userApi.getEmployeeProfile(this.userID);
      const Emploer = this.$store.getters.filtaredPersonesByID(this.userID);
      this.profileName = Emploer[0].profileName; 
      this.profileFileName = Emploer[0].profileFileName;
      this.profileAge = Emploer[0].prosonAge;
      this.profileCity = Emploer[0].prosonCity;
      this.profileWork = Emploer[0].prosonWork;
    }
     },
     ProfileTitle(newTitle){
       this.profiletitle = newTitle;
     }
   }
}
</script>

<style lang="scss" scoped>
.profile {

		&__input {
      margin-top: 1rem;
      border: 0.1rem solid #dce1e6;
      width: 17.3rem;
      height: 3rem;
      padding: 0 1rem;
		}
    &__block{
      max-width: 17rem;
      margin: 0 auto;
        margin-top: 3rem;
    }
		&__item {
      display: flex;
    justify-content: flex-end;
    align-items: center;
    &:not(:first-child){
      margin-top: 1rem;
    }
      .small{
        font-size: 1.3rem;
      }
      &-text {
        margin: 0;
        font-size: 2.3rem;
        white-space:nowrap;
        margin-right: 0.5rem;
        span{
          margin-left: 1rem;
        text-align: left;
        display: inline-block;
        width: 17.7rem;}
      }
  
      &-input {
      border: 0.1rem solid #dce1e6;
      width: 17.3rem;
      height: 2.5rem;
      padding: 0 1rem;
      }
		}

		&__button {
      margin-top: 3rem;
      border-radius: .4rem;
      background: #11253d;
      color: #fff;
      padding: 0.5rem 1.6rem;
      font-size: 2.2rem;
      line-height: 2.2rem;
		}
}

</style>
