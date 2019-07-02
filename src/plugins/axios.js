import Vue from "vue";
import axios from "axios";
// 注册到组件
Vue.prototype.$axios=axios;
// 注册到非组件或组件
window.axios = axios;

export default axios;