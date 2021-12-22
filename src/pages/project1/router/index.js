import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用公共登录页面
import Login from '@/components/login'
const config = require('@/pages/project1/config')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: () => import('@/components/layout/index1.vue')
    component: () => import(`@/components/layout/${config.layout}.vue`)
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
