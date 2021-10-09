const sidebar = {
  namespaced: true,
  state: () => ({
    isVisible: false,
  }),
  getters: {
    isVisible(state) {
      return state.isVisible;
    },
  },
  actions: {
    setVisibility({ commit }, visibility) {
      console.log('setting visibility', visibility);
      commit('SET_VISIBILITY', visibility);
    },
  },
  mutations: {
    SET_VISIBILITY(state, visibility) {
      console.log('mutating visibility', visibility);
      state.isVisible = visibility;
    },
  },
};

export default sidebar;
