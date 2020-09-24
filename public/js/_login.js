function login(){
	//获取用户输入的数据
	var _user_username=user_username.value;
	var _user_pwd=user_pwd.value;
	if(!_user_username){
		alert("用户名不能为空");
		return;
	}
	if(!_user_pwd){
		alert("密码不能为空");
		return;
	}
	//创建xhr异步对象
	var xhr=new XMLHttpRequest();
	//创建监听接收响应
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			var r=xhr.responseText;
			console.log(r);
			if(r==0){
				alert("用户名或密码错误");
			}else{
				var stus=JSON.parse(r);
				var _user_id =stus[0].user_id ;
				alert("登录成功");
				location.href=`find_all.html?user_id=${_user_id}`;
			}
		}
	}
	//创建请求，打开连接
	xhr.open("get",`/ajax/login/${_user_username}&${_user_pwd}`,true);
	//
	xhr.send();
}