function login(){
  var $uname=uname.value;
  var $upwd=upwd.value;
  if(!$uname){alert("用户名不能为空");return;};
  if(!$upwd){alert("密码不能为空");return;};
  ajax({
    url:"/ajax/post_login",
    type:"post",
    data:`uname=${$uname}&upwd=${$upwd}`
  }).then(result=>{
    d1.innerHTML=result
  })
}