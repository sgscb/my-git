//专门保存路由和路由字典
var routes=[
  {path:"/",component:Index},
  {path:"/details/:lid",component:Details,props:true},
  {path:"*",component:NotFound}
]

var router=new VueRouter({
    routes
})