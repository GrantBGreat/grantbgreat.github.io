import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Home from './components/Home.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: Home
  },


];

const router = new VueRouter({ mode: 'hash', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');