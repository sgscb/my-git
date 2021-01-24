import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/**
 * 安装这个组件
 * npm i -save @babel/plugin-syntax-dynamic-import
 */
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      keepAlive:true
    }
  },
  {
    path:"/products/:kw",
    name:"products",
    component: ()=>import(/* webpackChunkName: "products" */ '../views/Products.vue'),
    props:true,
    meta:{
      keepAlive:false
    }
  },
  {
    path:'/details/:lid',
    //component: Details,
    component:()=>import(/* webpackChunkName: "details" */ '../views/Details.vue'),
    props:true
  },
  {
    path: '/about',
    name: 'about',
    //component:About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
