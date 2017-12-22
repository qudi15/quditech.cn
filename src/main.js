// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

import store from './store';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons/iconfont/material-icons.css';

import VueCodemirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';

import './components';

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueCodemirror);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
