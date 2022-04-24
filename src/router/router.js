import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from "../components/HomeComponent.vue";
import ProfileComponent from "../components/ProfileComponent.vue";
import UsersComponent from "../components/UsersComponent.vue";
import AutorizationComponent from "../components/AutorizationComponent.vue";
import store from '../store/vuex';

Vue.use(VueRouter);


const routes = [
	{ path: '/', component: HomeComponent, meta:{ onlyAuthorized: false } },
	{ path: '/login', name: 'login', component: AutorizationComponent, meta:{ onlyAuthorized: false }  },
	{	path: '/profile', component: ProfileComponent, props: { RedactProfile: true, ProfileTitle: "Мой профиль" }, meta:{ onlyAuthorized: true }},
	{ path: '/users', component: UsersComponent, meta:{ onlyAuthorized: false }},
	{ path: '/user/:id', component: ProfileComponent, props: { ProfileTitle: "Профиль" }, meta:{ onlyAuthorized: false } }
];

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routes
});

router.beforeEach(async(to, from, next) => {
if(!to.meta.onlyAuthorized){
 return next();
}
const isAuthed = store.getters.AuntificationState;
if(!isAuthed) {
	next({path:"/login"});
} else{
	next();
}
});

export default router;