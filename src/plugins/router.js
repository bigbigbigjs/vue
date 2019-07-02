import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//import 会静态编译  require 动态编译
import Home from '../pages/home.vue'
import Follow from '../pages/follow.vue'
import Column from '../pages/column.vue'
import User from '../pages/user.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Detail from '../pages/detail.vue'
import ErrorPage from '../components/errorpage.vue'
let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/Column',component:Column},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},

  {path:'/detail/:id',name:'detail',component:Detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:ErrorPage}
];

let router = new VueRouter({
  routes
});

export default router;


