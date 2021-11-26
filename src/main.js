import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Home from './components/Home.vue';
import Fishe from './components/Fishe.vue';
import IsProgrammingCool from './components/IsProgrammingCool';
import Maths from './components/Math';
import PartyHat from './components/PartyHat';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'fishe',
    path: '/fishe',
    component: Fishe
  },
  {
    name: 'isprogrammingcool',
    path: '/isprogrammingcool',
    component: IsProgrammingCool
  },
  {
    name: 'math',
    path: '/math',
    component: Maths
  },
  {
    name: 'partyhat',
    path: '/partyhat',
    component: PartyHat
  }

];

const router = new VueRouter({ mode: 'hash', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');