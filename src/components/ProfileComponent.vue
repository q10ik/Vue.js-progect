<template>
<div class="myprofile">
  <h1>Мой профиль</h1>
  <UserAvatarComponent class="profile" :user-avatar-text='ProfileName' :user-avatar-url='ProfileFileName' />
  <div class="myprofile__chenge">
  <input v-if="ShowInput" type="text" v-model="ProfileName">
  <button @click="ChangeProfilename">Редктировать Имя</button>
  </div>
</div>
</template>

<script>
import UserAvatarComponent from '../controls/UserAvatarComponent.vue';
import UserApiClient from "../api/UserApiClient";

export default {
  name: 'ProfileComponent',
  components:{
    UserAvatarComponent
  },

  data() {
    return{
      ProfileName:'',
      ProfileFileName:'dafault.jpg',
     ShowInput: false,
    };
  },
  async mounted() {
    const userApi = new UserApiClient();
    const AvatarFileName = await userApi.getAvatarImage();
    const AvatarName = await userApi.getAvatarName(); 
    this.ProfileName = AvatarName; 
    this.ProfileFileName = AvatarFileName; 
	},
  methods:{
  ChangeProfilename() {
    this.ShowInput = !this.ShowInput; 
    console.log(this.ShowInput);
  }
  }
}
</script>

<style scoped>
.myprofile__chenge{
  margin-top: 2rem;
}
</style>
