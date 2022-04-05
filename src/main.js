import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/vuex';




Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

// Vue.config.productionTip = false


new Vue({
  router: router,
  store: store,
  render: h => h(App),

}).$mount('#app')