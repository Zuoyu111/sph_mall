import request from './request'


export const fetchCategoryListData = () => {
  return request({
    url: '/product/getBaseCategoryList',
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