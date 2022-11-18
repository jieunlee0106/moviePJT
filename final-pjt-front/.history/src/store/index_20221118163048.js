import Vue from 'vue'
import Vuex from 'vuex'
import accountsStore from './modules/accountsStore'
import moviesStore from './modules/moviesStore';
import createPersistedState from "vuex-persistedstate";
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['accountsStore'],
})

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    accountsStore: accountsStore,
    moviesStore: moviesStore,
    plugins: [vuexLocal.plugin],
  }
})
