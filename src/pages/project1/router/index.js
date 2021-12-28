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
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/dash-board',
    component: () => import(`@/components/layout/${config.layout}.vue`),
    meta: {
      title: '面板'
    },
    isMenu: true,
    children: [
      {
        path: 'index',
        name: 'dashboard',
        component: () => import('@/pages/project1/views/dash-board')
      }
    ]
  },
  {
    path: '/table',
    component: () => import(`@/components/layout/${config.layout}.vue`),
    meta: {
      title: '表格'
    },
    isMenu: true,
    children: [
      {
        path: 'index',
        name: 'dashboard',
        component: () => import('@/pages/project1/views/dash-board')
      }
    ]
  },
  {
    path: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
