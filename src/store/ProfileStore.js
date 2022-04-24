import UserApiClient from "../api/UserApiClient";
import AuntificationStore from "../store/AuntificationStore";


const ProfileStore = {
 state:{
	profileName: '-state',
	avatar:'dafault.jpg',
	age:'',
	city:'',
	work:'',
 },
 mutations:{
	updateProfileName(state, newname){
		console.log(3);
		state.profileName = newname;
	},
	updateAge(state,newage){
		state.age = newage;
	},
	updeteCity(state,newcity){
		console.log(6);
		state.city = newcity;
	},
	updateWork(state,newwork){
		state.work = newwork;
	},
	updateAvatar(state,newavatar){
		state.avatar = newavatar;
		console.log(state.avatar);
	}
 },
 actions:{
		async loadProfile({commit}) {
			console.log(2);
			const userApi = new UserApiClient();
			const Profile = await userApi.getUser(AuntificationStore.state.token);
			commit('updateProfileName', Profile.firstName+' '+Profile.lasName);
			commit('updateAge',Profile.age);
			commit('updeteCity', Profile.city);
			commit('updateWork', Profile.work);
			commit('updateAvatar', Profile.avatar);
		}
 },
 getters: {
		getProfilename(state){
			console.log(5);
		return state.profileName;
		},
		getAvatar(state){
		return state.avatar;
		},
		getAge(state){
		return state.age;
		},
		getCity(state){
		return state.city;
		},
		getWork(state){
		return state.work;
		},
 }
};
export default ProfileStore;