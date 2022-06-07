import axios from "axios";

// 引入进度条 发请求时使用
import nprogress from "nprogress";
// 引入进度条样式
// start: 进度条开始  done: 进度条结束
import 'nprogress/nprogress.css'


const request = axios.create({
  baseURL: 'http://gmall-h5-api.atguigu.cn/api',
  timeout: 5000
})


request.interceptors.request.use((config) => {
  // config.headers = 
  nprogress.start();
  return config
})

request.interceptors.response.use(res => {
  nprogress.done()
  return res.data
},err => {
  console.log(err);
})

export default request