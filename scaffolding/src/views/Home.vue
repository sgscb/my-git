<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hr/>
    <router-link to="/products/i5 128g">搜索 i5 128g 相关的商品</router-link>
    <hr/>
    <router-link to="/details/5">查看5号商品的详情</router-link> | <button @click="gotoDetails(12)">查看12号商品的详情</button>
    <hr/>
    <todo></todo>
    <p><my-counter></my-counter></p>
    <p><my-counter></my-counter></p>
    <p><my-counter></my-counter></p>
    <button @click="doit">加载更多</button>
  </div>
</template>

<script>
import {getIndex, getDetails} from "../assets/js/apis/product.js"

export default {
  name: 'home',
  methods:{
    onload(){
      getIndex().then(res=>{
        console.log(res);
      })
    },
    doit(){
      this.onload();
    },
    gotoDetails(lid){
      this.$router.push("/details/"+lid);
    }
  },
  mounted(){//window.onload
    this.onload();
  },
  beforeRouteLeave(to,from,next){
    console.log(`路由离开home...`);
    //如果从首页跳到products
    if(to.name=="products"){
      to.meta.keepAlive=false;
    }
    next();
  },
  beforeRouteEnter(to,from,next){
    console.log(`路由进入home...`);
    next();
  }
}
</script>
