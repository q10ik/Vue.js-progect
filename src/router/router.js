import HomeComponent from"../components/HomeComponent.vue";
import ProfileComponent from"../components/ProfileComponent.vue";
import UsersComponent from"../components/UsersComponent.vue";

const routes = [
		{path:'/', component: HomeComponent },
		{path:'/profile', component: ProfileComponent },
		{path:'/users', component: UsersComponent}
	]

export default routes;