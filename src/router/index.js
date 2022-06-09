import VueRouter from "vue-router";
import Vue from "vue";



import routes  from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

export default router;