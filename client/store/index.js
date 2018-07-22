import Vue from 'vue';
import Vuex from 'vuex';
import projects from './modules/projects';
import views from './modules/views';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    projects: projects,
    views: views
  },
  strict: false
});
