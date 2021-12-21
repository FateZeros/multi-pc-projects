import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** 引入 rem */
import '@/utils/rem.js'

/** 引入antd-design-vue */
import initAntd from '@/utils/initAntd'
initAntd(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
