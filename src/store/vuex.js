import Vue from 'vue'
import Vuex from 'vuex'
import PersoneStore from "./PersoneStore";
import ProfileStore from "./ProfileStore";
import AuntificationStore from "./AuntificationStore";
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex);
const vuexLocal = new VuexPersistence ({
	storage:window.localStorage,
});

const store = new Vuex.Store({
	modules: {
		PersoneStore,
		AuntificationStore,
		ProfileStore
	},
	plugins:[vuexLocal.plugin]
})

export default store;