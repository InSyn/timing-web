import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import Vuex from 'vuex'
import {store} from './store/index'
import {router} from './routes'

Vue.use(Vuex);

Vue.use(VueResource);

Vue.http.options.root = '/root';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
