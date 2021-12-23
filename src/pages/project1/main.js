import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* ------------ 动态引入模块 Start -------------- */
/** 引入 rem */
import '@/utils/rem.js'
/** 引入 permission */
import './permission'

/** 引入antd-design-vue */
import initAntd from '@/utils/init-antd'

/** mock 数据 */

import '../../../mock'

initAntd(Vue)
/* ------------ 动态引入模块 End -------------- */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
