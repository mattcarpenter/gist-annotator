const state = {
  openProjectModal: {
    visible: false
  },
  newProjectModal: {
    errorMessage: '',
    visible: false
  }
};

const getters = {
};

const actions = {
  toggleOpenProjectModalVisible ({ commit }) {
    commit('toggleOpenProjectModalVisible');
  },
  toggleNewProjectModalVisible ({ commit }) {
    commit('toggleNewProjectModalVisible');
  }
};

const mutations = {
  toggleOpenProjectModalVisible (state) {
    state.openProjectModal.visible = !state.openProjectModal.visible;
  },
  toggleNewProjectModalVisible (state) {
    state.newProjectModal.visible = !state.newProjectModal.visible;
  },
  setNewProjectModalErrorMessage (state, message) {
    state.newProjectModal.errorMessage = message;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
