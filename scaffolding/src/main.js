import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MyCounter from "./components/MyCounter"
import Todo from "./components/Todo/Todo"
import axios from "axios"
import {baseURL} from "./assets/js/config"

Vue.component("my-counter",MyCounter);
Vue.component("todo",Todo);

axios.defaults.baseURL=baseURL;
axios.defaults.withCredentials=true;

Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
