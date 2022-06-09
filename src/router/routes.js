import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

export default [
  {
    path: '/detail/:goodsid',
    component: Detail
  },
  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/search/:keyword?',
    // path: '/search/',
    name:'search',
    component: Search,
    meta: { show: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  {
    path: '*',
    redirect: '/home'
  }
]