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
    },
    LOGED_OUT(state) {
      state.user = null;
      state.token = null;
    }
  },
  actions: {
    logIn({ commit }, payload) {
      commit('LOGED_IN', payload)
    },
    logOut({ commit }) {
      localStorage.removeItem('token');
      commit('LOGED_OUT')
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
