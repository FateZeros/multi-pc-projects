/** 基础版 main.js */
import Vue from 'vue'
import App from '../project1/App.vue'
/** 引入项目参数 */
import pageConfig from './config'

Vue.prototype.PAGE_CONFIG = pageConfig
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
