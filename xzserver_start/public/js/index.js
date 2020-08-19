//专门负责保存index.html页面中所需的所有js代码
var xhr=new XMLHttpRequest();//创建监听对象
xhr.onreadystatechange=function(){//创建监听，接受响应
    if(xhr.readyState==4){
        console.log(xhr.responseText);
    }
}
//打开链接创建请求
// xhr.open("get","http://localhost:5050/index",true);
xhr.open("get","/index",true)
xhr.send();//发送请求