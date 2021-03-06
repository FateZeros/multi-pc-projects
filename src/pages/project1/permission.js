import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'
import { getToken } from '@/utils/auth'

const config = require('./config')

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  console.log(to, 222)
  // start progress bar
  NProgress.start()
  // set page title
  document.title = getPageTitle(to.meta.title, config.projectName)
  const token = getToken()
  if (token) {
    /* has token */
    if (to.path === '/login') {
      next()
      NProgress.done()
    } else {
      next()
    }
  } else {
     /* has no token */
     if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
