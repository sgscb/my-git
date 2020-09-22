<template>
  <div id="app">
    <my-header></my-header>
    <corousel></corousel>
    <h1>全局h1样式冲突测试</h1>
    <router-view/>
  </div>
</template>
<script>
import Corousel from "./views/carousel"
import MyHeader from "./components/MyHeader.vue"
export default {
  components:{
    MyHeader,Corousel
  }
}
</script>
<style scoped>
[v-cloak]{display: none;}
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{background-color: darkolivegreen;}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */


/*整个页面的背景色*/
body{
  background-color: #f5f5f5;
  min-width:1000px;
}
/*一级容器定宽居中*/
body>.container{
  width:1000px;
  min-width:1000px;
  margin:0 auto;
}
</style>
