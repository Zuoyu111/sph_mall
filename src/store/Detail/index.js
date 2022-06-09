import { fatchDetailData } from "@/api/index"

const state = {
  detailData: {}
};


const actions = {
  // 获取商品详细的actions
  async getGoodsInfo({commit},gid) {
    const res = await fatchDetailData(gid);
    console.log(res);
    if(res.code === 200) {
      commit("DETAILLINFO",res.data)
    }
  }


};


const mutations = {
  DETAILLINFO(state,detailData) {
    state.detailData = detailData
  }
};



const getters = {
  categoryView: state => state.detailData.categoryView
};


export default {
  state,
  actions,
  mutations,
  getters
}
















