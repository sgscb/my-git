import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import MyHeader from "./components/MyHeader"
import axios from 'axios'
// import Carousel from "./views/carousel"
// Vue.component("my-header", MyHeader)

axios.defaults.baseURL="http://xzserver.applinzi.com";
Vue.prototype.axios=axios;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')