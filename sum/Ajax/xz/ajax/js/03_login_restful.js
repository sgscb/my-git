		function login(){
				var $uname=uname.value;
				var $upwd=upwd.value;
				//非空验证----------坑
				//1.创建xhr异步对象
				ajax({
					url:"/ajax/login_restful/",
					type:"get",
					data:`${$uname}&${$upwd}`
				}).then(res=>{
					console.log(res)
					d1.innerHTML=res
				})
			}
			// xhr.open("get",`/ajax/login_restful/${$uname}&${$upwd}`,true);
