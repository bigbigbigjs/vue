import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//在这里引入资源会优化，在index.html里通过标签引入也可以，但是并不优化。
//引入全局样式
import'./assets/css/base.css'
//引入全局js
import'./assets/js/font.js'
// 引入路由
import router from './plugins/router'
// 引入axios
import axios from './plugins/axios'
// 配置前端baseUrl
Vue.prototype.baseUrl = require('../config/config').active

new Vue({
  render: h => h(App),
  router,axios
}).$mount('#app')
