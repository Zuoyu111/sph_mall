import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

import home from './Home'
import search from './Search'
import detail from './Detail'

const store = new Vuex.Store({
  modules: {
    home,
    search,
    detail
  }
})

export default store