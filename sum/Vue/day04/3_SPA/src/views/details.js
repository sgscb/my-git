var Details={
  props:["lid"],
  template:
  `<div>
    <my-header></my-header>
    <h1 style="color:green">这里是详情页</h1>
    <h3>查看{{lid}}号商品的详情页...</h3>
    <router-link to="/">回首页</router-link>
   </div>
  `
}