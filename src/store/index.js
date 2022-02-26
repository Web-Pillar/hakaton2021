import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import schoolModule from './modules/school'
import casinoModule from './modules/casino'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    compareIds: [],
  },
  mutations: {
    LOGED_IN(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },
    LOGED_OUT(state) {
      state.user = null;
      state.token = null;
    },
    ADD_COMPARE(state, id) {
      const index = state.compareIds.indexOf(id);
      if(index === -1) {
        state.compareIds.push(id);
      } else {
        state.compareIds = state.compareIds.filter(i => i !== id);
      }
    },
    CLEAR_COMPARE(state) {
      state.compareIds = [];
    },
  },
  actions: {
    logIn({ commit }, payload) {
      commit('LOGED_IN', payload);
    },
    logOut({ commit }) {
      localStorage.removeItem('token');
      commit('LOGED_OUT');
    },
    addCompare({ commit }, id) {
      commit('ADD_COMPARE', id);
    },
    clearCompare({ commit }) {
      commit('CLEAR_COMPARE');
    },
  },
  getters: {
    getToken: state => state.token,
    authUser: state => state.user,
  },
  modules: {
    userModule,
    schoolModule,
    casinoModule,
  }
})
