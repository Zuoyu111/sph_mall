// home模块的小仓库

import { fetchCategoryListData } from '@/api/index'


const state = { 
  categoryList: []
};

const mutations = { 
  CATEGORY(state,categoryList) {
    
    state.categoryList = categoryList
  }
};

const actions = {
  async fetchCategoryListData( { commit } ) {
    const res = await fetchCategoryListData();
    
    if(res.code === 200) {
      commit("CATEGORY",res.data);
    }
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}












