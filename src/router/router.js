import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from "../components/HomeComponent.vue";
import ProfileComponent from "../components/ProfileComponent.vue";
import UsersComponent from "../components/UsersComponent.vue";
import AutorizationComponent from "../components/AutorizationComponent.vue";
import store from '../store/vuex';

Vue.use(VueRouter);



const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: HomeComponent },
		{ path: '/login', name: 'login', component: AutorizationComponent },
		{
			path: '/profile', component: ProfileComponent, props: { RedactProfile: true, ProfileTitle: "Мой профиль" }, beforeEnter: (to, from, next) => {
				if (!store.getters.AuntificationState) {
					return next({
						name: 'login'
					})
				} else {
					next();

				}
			}
		},
		{ path: '/users', component: UsersComponent },
		{ path: '/user/:id', component: ProfileComponent, props: { ProfileTitle: "Профиль" } }
	]
})
export default router;