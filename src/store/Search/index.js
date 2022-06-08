// search模块的小仓库

import { searchData } from "@/api/index";

const state = {
  searchData: {},
};

const mutations = {
  SEARCHDATA(state, searchData) {
    state.searchData = searchData;
  },
};

const actions = {
  // 获取search模块数据
  async fetchSearchData({ commit }, params = {}) {
    const res = await searchData( params );
    
    if(res.code == 200) {
      
      commit('SEARCHDATA',res.data)
    }
  },
};

const getters = {
  // 商品列表
  goodsList(state) {    
    return state.searchData.goodsList || []
  },

  // 属性列表
  attrsList(state) {
    return state.searchData.attrsList || []
  },
  // 面包屑列表
  trademarkList(state) {
    return state.searchData.trademarkList || []
  }

};

export default {
  state,
  mutations,
  actions,
  getters,
};
