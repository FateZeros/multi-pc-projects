import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home'
const config = require('@/pages/project1/config')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: () => import('@/components/layout/index1.vue')
    component: () => import(`@/components/layout/${config.layout}.vue`)
  }
]

const router = new VueRouter({
  routes
})

export default router
