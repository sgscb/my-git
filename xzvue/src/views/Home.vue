<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>我的第一个脚手架项目！</h1>
    <myheader></myheader>
    <h2>我的名字:{{uname}}</h2>
    <div>
      {{data}}
    </div>
  </div>
</template>

<script>
import Myheader from "../components/MyHeader"
import carousel from "./carousel"
  
export default {
  data(){
    return {
      uname:"东东",
      data:""
    }
  },
  mounted(){
    this.axios.get("/index")
    .then(result=>{
      this.data=result.data
    })
  },
  components:{
  carousel,Myheader
  }
}
</script>
  
<style>
.home>h1{
  background-color:red;
  color:yellow
}
</style>