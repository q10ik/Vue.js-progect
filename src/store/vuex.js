import Vue from 'vue'
import Vuex from 'vuex'
import PersoneStore from "./PersoneStore";
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		PersoneStore,
	},
})

export default store;