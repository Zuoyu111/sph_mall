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
      console.log(res.data,64654646)
      commit('SEARCHDATA',res.data)
    }
  },
};

const getters = {
  goodsList(state) {
    console.log(state);
    return state.searchData.goodsList || []
  },
  attrsList(state) {
    return state.searchData.attrsList || []
  },
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
