import Vue from 'vue'
import Vuex from 'vuex'
import PersoneStore from "./PersoneStore";
import AuntificationStore from "./AuntificationStore";
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex);
const vuexLocal = new VuexPersistence ({
	storage:window.localStorage,
});

const store = new Vuex.Store({
	modules: {
		PersoneStore,
		AuntificationStore
	},
	plugins:[vuexLocal.plugin]
})

export default store;