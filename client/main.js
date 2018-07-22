/* eslint-disable*/

import Vue from 'vue';
import App from './components/app/index.vue';
import store from './store';

new Vue({
  el: '#app',
  store,
  components: {
    App
  }
})
