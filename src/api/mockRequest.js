import axios from "axios";

// 引入进度条 发请求时使用
import nprogress from "nprogress";
// 引入进度条样式
// start: 进度条开始  done: 进度条结束
import 'nprogress/nprogress.css'


const mock_request = axios.create({
  baseURL: '/mock',
  timeout: 5000
})


mock_request.interceptors.request.use((config) => {
  // config.headers = 
  nprogress.start();
  return config
})

mock_request.interceptors.response.use(res => {
  nprogress.done()
  return res.data
},err => {
  console.log(err);
})

export default mock_request