import dao from '../../lib/dao';

const state = {
  all: [],
  current: null
};

const getters = {};

const actions = {
  getAllProjects ({ commit }) {
    dao.getProjects().then((data) => {
      commit('setProjects', data.projects);
    });
  },
  openProject ({ commit }, projectName) {
    dao.getProject(projectName).then((data) => {
      commit('setCurrentProject', data.project);
      commit('views/toggleOpenProjectModalVisible', {}, { root: true });
    });
  },
  createProject ({ commit }, { projectName, englishSrt, japaneseSrt }) {
    dao.createProject(projectName, englishSrt, japaneseSrt).then((data) => {
      commit('setCurrentProject', data.project);
      commit('views/toggleNewProjectModalVisible', {}, { root: true });
    }, function (data) {
      if (data.error) {
        commit('views/setNewProjectModalErrorMessage', data.error.message, { root: true });
      }
    });
  }
};

const mutations = {
  setProjects (state, projects) {
    state.all = projects;
  },
  setCurrentProject (state, project) {
    state.current = project;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
