import { fatchDetailData,AddOrUpdateShopCar } from "@/api/index"

const state = {
  detailData: {}
};


const actions = {
  // 获取商品详细的action
  async getGoodsInfo({commit},gid) {
    const res = await fatchDetailData(gid);
    
    if(res.code === 200) {
      commit("DETAILLINFO",res.data)
    }
  },
  // 将商品添加到购物车的action
  async addOrUpdateShopCart({commit},{goodsId,goodsNum}) {
    const res = await AddOrUpdateShopCar(goodsId,goodsNum);
    if(res.code == 200) {
      console.log(res.data);
    }
  } 
};


const mutations = {
  DETAILLINFO(state,detailData) {
    state.detailData = detailData 
  }
};



const getters = {
  categoryView: state => state.detailData.categoryView || {},  //标签
  skuInfo: state => state.detailData.skuInfo || {},            //商品数据
  spuSaleAttrList: state => state.detailData.spuSaleAttrList || [] //商品属性
};


export default {
  state,
  actions,
  mutations,
  getters
}
















