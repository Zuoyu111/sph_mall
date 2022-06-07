import request from './request'
import mock_request from './mockRequest'


//获取三级联动分类的数据
export const fetchCategoryListData = () => {
  return request({
    url: '/product/getBaseCategoryList',
    method: 'GET'
  })
}


export const searchData = ( params ) => {
  console.log(111)
  return request({
    url:'/list',
    method: 'POST',
    data: params            
  })
}



//获取mock模拟的banner数据
export const fetchBannerData = () => {
  return mock_request({
    url: '/banner',
    method: 'GET'
  })
}

// 获取mock模拟的floor数据
export const fetchFloorData = () => {
  return mock_request({
    url: '/floor',
    method: 'GET'
  })
}
// export const reCategoryList = () => {
//   // return request.get('/product/getBaseCategoryList')
//   return request({
//     path: '/product/getBaseCategoryList',
//     method: "GET"
//   })
// }