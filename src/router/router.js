import VueRouter from "vue-router";
import HomeComponent from"../components/HomeComponent.vue";

const router = new VueRouter ({
	mode:'history',
	base: __dirname,
	routes:[
		{path:'/',componant: HomeComponent }
	]
});

export default router;