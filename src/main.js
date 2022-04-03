import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import Vuex from 'vuex';

import UserApiClient from "./api/UserApiClient";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})


const store = new Vuex.Store({

  state: {
    persones: [{
      id: '1',
      ProfileName: 'Иванов Иван',
      ProfileFileName: 'persone 1.jpg',
      prosonAge: '24',
      prosonCity: 'Москва',
      prosonWork: 'Университет синергия :D'
    },
    {
      id: '2',
      ProfileName: 'Гирасимов Семен',
      ProfileFileName: 'persone 1.jpg',
      prosonAge: '24',
      prosonCity: 'Москва',
      prosonWork: 'Университет синергия :D'
    },
    {
      id: '3',
      ProfileName: 'Климов Антон',
      ProfileFileName: 'persone 1.jpg',
      prosonAge: '24',
      prosonCity: 'Москва',
      prosonWork: 'Университет синергия :D'
    },
    {
      id: '4',
      ProfileName: 'Семенов Дмитрий',
      ProfileFileName: 'persone 1.jpg',
      prosonAge: '24',
      prosonCity: 'Москва',
      prosonWork: 'Университет синергия :D'
    }],
    loading: true,
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    updatePosts(state, persones) {
      state.persones = persones
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    loadData({ commit }) {
      const userApi = new UserApiClient();
      userApi.getPersones().then((response) => {
        console.log(response)
        commit('updatePosts', response)
        commit('changeLoadingState', false)
      });
    },
  }
})

// Vue.config.productionTip = false


new Vue({
  router: router,
  store: store,
  render: h => h(App),

}).$mount('#app')