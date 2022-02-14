import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import schoolModule from './modules/school'

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
  getters: {
    getToken: state => state.token,
    authUser: state => state.user,
  },
  modules: {
    userModule,
    schoolModule,
  }
})
