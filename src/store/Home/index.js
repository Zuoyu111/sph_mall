// home模块的小仓库

import {fetchBannerData, fetchCategoryListData, fetchFloorData} from '@/api/index'


const state = { 
  categoryList: [],
  bannerList: [],
  floorData: []
};

const mutations = { 
  CATEGORY(state,categoryList) {
    state.categoryList = categoryList
  },
  BANNER(state,bannerList) {
    state.bannerList = bannerList
  },
  Floor(state,floorData) {
    state.floorData = floorData
  }
};

const actions = {
  //获取首页三级联动数据
  async fetchCategoryListData( { commit } ) {
    const res = await fetchCategoryListData();
    
    if(res.code === 200) {
      commit("CATEGORY",res.data);
    }
  },
  //获取首页轮播图模拟数据
  async fetchBannerData( { commit }) {
    const res = await fetchBannerData();
    
    if( res.code === 200) {
      commit("BANNER",res.data);
    }
  },

  //获取floor数据
  async fetchFloorData({ commit }) {
    const res = await fetchFloorData()
    if(res.code === 200) {
      commit("Floor",res.data)
    }
  }

};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}












