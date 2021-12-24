import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用公共登录页面
import Login from '@/components/login'
const config = require('@/pages/project1/config')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/dash-board',
    component: () => import(`@/components/layout/${config.layout}.vue`),
    children: [
      {
        path: '/home/dash-board',
        name: 'home-dashboard',
        component: () => import('@/pages/project1/views/dash-board'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
