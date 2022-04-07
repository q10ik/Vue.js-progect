import Vue from 'vue'
import Vuex from 'vuex'
import PersoneStore from "./PersoneStore";
import AuntificationStore from "./AuntificationStore";
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		PersoneStore,
		AuntificationStore
	},
})

export default store;