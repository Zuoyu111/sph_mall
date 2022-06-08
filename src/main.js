import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局使用awesome-swiper

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)



//三级联动组件 -- 全局组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)

//引入mockServer.js --- mock数据
import '@/mock/mockServe'

Vue.config.productionTip = false


new Vue({
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
