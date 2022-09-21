import {
  createStore
} from 'vuex'
export default createStore({
  state: {
    theme: 'theme1'
  },
  mutations: {
    setTheme (state, theme) {
      state.theme = theme
    }
  },
  getters: {
    getTheme (state) {
      return state.theme
    }
  },
  actions: {
    commitTheme ({
      commit
    }, name) {
      commit('setTheme', name)
    }
  },
  modules: {}
})
