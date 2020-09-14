function ajax({url,type,callback,data}){
				console.log(data)
				console.log(data.indexOf("="))
	return new Promise(function(resolve,reject){
//小黄人4部曲
//1.创建异步对象
			var xhr=new XMLHttpRequest();//不变
			if(data!==undefined&&type=="get"&&data.indexOf("=") == -1){
				url+=data;
			}else{
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
					// var result=JSON.parse(xhr.responseText)
					var result=xhr.responseText
					resolve(result)
					// var result=xhr.responseText
					// callback(result)
					console.log(result)
				}
			}
			if(type=="post"){
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			}
			if(type=="post"){
				xhr.send(data);
				// console.log(data)
			}else{
			//3.发送请求
			xhr.send();
		}
	})
}
// xhr.open(type,url,true);
// xhr.onreadystatechange=function(){
// 	if(xhr.readyState==4){
// 		var result=JSON.parse(xhr.responseText)
// 	//door(result);
// 	// callback(result)
// 		resolve(result);//开门，并将结果，反馈到外部！功能类似于普通函数的return
// 	}
// }
// if(type=="post"){//只有发送的是post请求时，才需要添加请求头
// 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
// }
// if(type=="post"){//只有post请求，才会将参数放在send()中发送
// 	xhr.send(data);
// }else{//而如果是get请求，send()中什么都没有
// 	xhr.send();