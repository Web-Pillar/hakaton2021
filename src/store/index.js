import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    LOGED_IN(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    }
  },
  actions: {
    logIn({ commit }, payload) {
      commit('LOGED_IN', payload)
    }
  },
  modules: {
  }
})
