//专门保存路由器和路由字典
var routes=[
  {path:"/", component:Index},
  {path:"/details",component:Details}
]
var router=new VueRouter({
  routes
})