// getters
import ACCESS_ENUM from "@/access/accessEnum";

const getters = {};

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "not login",
      userRole: ACCESS_ENUM.NOT_LOGIN,
    },
  }),
  getters,
  actions: {
    getLoginUser({ commit, state }, payload) {
      // TODO: remote login
      commit("updateUser", payload);
    },
  },

  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
};
