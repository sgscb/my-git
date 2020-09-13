function ajax({url,type,callback,data}){
				console.log(data)
	return new Promise(function(resolve,reject){
//小黄人4部曲
//1.创建异步对象
			var xhr=new XMLHttpRequest();//不变
			if(data!==undefined&&type=="get"){
				url+="?"+data;
			}
			console.log(url)

			//2.创建请求,打开连接
			xhr.open(type,url,true);
			//4.接收响应,开启监听---这个function会被调用4次
			xhr.onreadystatechange=function(){
				//4遍中，我们只关注第4遍---xhr.readyState请求状态
				//响应状态码为200----xhr.status
				if(xhr.readyState==4 && xhr.status==200){
					// var r=xhr.responseText;
					// console.log(r);
					var result=JSON.parse(xhr.responseText)
					// callback(result)
					resolve(result)
				}
			}
			if(type=="post"){
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencode");
			}
			if(type=="post"){
				xhr.send(data);
			}else{
			//3.发送请求
			xhr.send();
		}
	})
}
