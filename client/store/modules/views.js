const state = {
  openProjectModal: {
    visible: false
  },
  newProjectModal: {
    errorMessage: '',
    visible: false
  },
  newAnnotationTrackModal: {
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
  },
  toggleNewAnnotationTrackModalVisible ({ commit }) {
    commit('toggleNewAnnotationTrackModalVisible');
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
  },
  toggleNewAnnotationTrackModalVisible (state) {
    state.newAnnotationTrackModal.visible = !state.newAnnotationTrackModal.visible;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
