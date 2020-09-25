import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/details/:lid',
    //暂时不要把Details.vue引入项目
    //只有当用户访问到details时，才将Details组件引入项目中
    //而且webpackChunkName:是在指示，将Details.vue文件单独打包压缩为一个文件。文件名为details
    component: () => import(
      /* webpackChunkName: "details" */ 
      '../views/Details.vue'
    ),
    props:true
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
