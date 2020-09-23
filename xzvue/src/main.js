import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入MyHeader.vue文件中的模块对象内容，保存在变量MyHeader中
import MyHeader from "./components/MyHeader" //扩展名.vue或.js都可省略
import axios from "axios"

//让MyHeader变成全局组件:
Vue.component("my-header",MyHeader)
// axios.defaults.baseURL="http://xzserver.applinzi.com";
axios.defaults.baseURL="http://localhost:5050";
//如果在客户端使用http代理跨域，baseURL不要写真实的服务器地址，而应该写http代替提供的接口地址的别名，比如: /api
// axios.defaults.baseURL="/api";
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
