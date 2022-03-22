import HomeComponent from"../components/HomeComponent.vue";
import ProfileComponent from"../components/ProfileComponent.vue";
import UsersComponent from"../components/ProfileComponent.vue";

const routes = [
		{path:'/',componant: HomeComponent },
		{path:'/profile',componant: ProfileComponent },
		{path:'/user',componant: UsersComponent}
	]

export default routes;