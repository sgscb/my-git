<template>
  <div id="products">
    <h2>查询{{kw}}相关的商品</h2>
    <ul>
      <li><router-link to="/details/5">查看5号商品详情</router-link></li>
      <li><router-link to="/details/12">查看12号商品详情</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  props:["kw"],
  mounted(){
    console.log(`搜索 ${this.kw} 相关的商品`)
  },
  beforeRouteEnter(to, from, next){
    console.log(to);
    console.log(from);
    console.log("进入商品列表页面");
    next();
  },
  beforeRouteLeave(to, from , next){ 
    console.log("离开商品列表页面");
    if(to.name=="details"){
      from.meta.keepAlive=true;
    }
    next();
  }
}
</script>
<style>

</style>
