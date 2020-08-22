//包含首页组件的所有内容
var Index={
  template:`<div>
    <h1 style="color:orange">这里是首页</h1>
    <h3>首页商品列表</h3>
    <ul>
      <li>1号商品...<router-link to="/details">查看详情</router-link></li>
      <li>5号商品...<button @click="gotoDetails">查看详情</button></li>
      <li>13号商品...<router-link to="/details">查看详情</router-link></li>
    </ul>
  </div>`,
  methods:{
    gotoDetails(){
      this.$router.push("/details");
    }
  }
}