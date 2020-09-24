var Index={
  template:`
  <div>
  <my-header></my-header>
  <h1 style="color:red">这里是首页</h1>
  <h3>首页商品列表</h3>
  <ul>
    <li>1号商品...<router-link to="/details/1">查看详情</router-link></li>
    <li>1号商品...<button @click="gotoDetails(5)">查看详情</button></li>
    <li>1号商品...<router-link to="/details/13">查看详情</router-link></li>
  </ul>
  </div>`,
  methods:{
    gotoDetails(lid){
      this.$router.push(`/details/${lid}`)
    }
  }
}