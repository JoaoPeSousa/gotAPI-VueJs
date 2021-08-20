import Vue from 'vue'
import Vuex from 'vuex'
import personagens from './modules/gotPersonagens'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    personagens
  }
})
