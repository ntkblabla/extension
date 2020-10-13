import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';

window.axios = require('axios');

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  template: '<App/>'
}).$mount('#app')
