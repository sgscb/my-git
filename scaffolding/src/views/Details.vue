<template>
  <div class="details">
    <h2>这里是详情页</h2>
    <hr />
    <h3>查询{{ lid }}号商品的详细信息</h3>
    <h4>
      商品名称: {{ product.title }}<br />
      商品描述: {{ product.subtitle }}<br />
      商品价格:
      <span style="font-size: 2em; color: Blue"
        >¥{{ product.price.toFixed(2) }}</span
      >
    </h4>
  </div>
</template>
<script>
import { getDetails } from "../assets/js/apis/product.js";
import { get } from "http";
export default {
  props: ["lid"], //不用监控，自动根据url中的参数变化，而自动变化。
  data() {
    return {
      product: { price: 0 },
    };
  },
  methods: {
    onload() {
      getDetails(this.lid).then((res) => {
        this.product = res.product;
      });
    },
  },
  created() {
    //只会在首次加载组件时，执行一次。
    this.onload();
  },
  watch: {
    $route() {
      this.onload();
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log(`路由离开details...`);
    if (to.name == "products") {
      to.meta.keepAlive = true;
    }
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log(`路由进入detais...`);
    next();
  },
};
</script>
<style>
</style>
