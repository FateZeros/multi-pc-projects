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
    path: '/home',
    name: 'home',
    component: () => import(`@/components/layout/${config.layout}.vue`),
    redirect: '/home/dash-board',
    children: [
      {
        path: '/home/dash-board',
        name: 'dash-board',
        component: () => import('@/pages/project1/views/dash-board'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/home/table',
        name: 'home-table',
        meta: {
          title: '表单'
        },
        children: [
          {
            path: '/home/table/test1',
            name: 'table-index',
            component: () => import('@/pages/project1/views/table'),
            meta: {
              title: '测试table1'
            }
          },
          {
            path: '/home/table/test2',
            name: 'table-index2',
            component: () => import('@/pages/project1/views/table'),
            meta: {
              title: '测试table2'
            }
          }
        ]
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
