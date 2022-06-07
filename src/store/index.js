import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

import home from './Home'
import search from './Search'


const store = new Vuex.Store({
  modules: {
    home,
    search
  }
})

export default store