import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import VIcons from 'vue-tailwind-icons';
Vue.use(VIcons);
Vue.use(VIcons, { set: 'outline' })

Vue.config.productionTip = false;

import Home from './components/Home.vue';
import Fishe from './components/Fishe.vue';
import IsProgrammingCool from './components/IsProgrammingCool';
import Maths from './components/Math';
import Translator from './components/Translator.vue';
import Shrek from './components/Shrek.vue'
import TheButton from './components/thebutton.vue';

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
    name: 'translator',
    path: '/translator',
    component: Translator
  },
  {
    name: 'shrek',
    path: '/shrek',
    component: Shrek
  },
  {
    name: 'button',
    path: '/button',
    component: TheButton
  }

];

const router = new VueRouter({ mode: 'hash', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');