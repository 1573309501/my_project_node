function reg(){
	var _user_username=user_username.value;
	var _user_pwd=user_pwd.value;
	var _user_name=user_name.value;
	var _user_age=user_age.value;
	var _user_phone=user_phone.value;
	var _user_email=user_email.value;
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			var r=xhr.responseText;
			if(r==1){
				alert("注册成功");
				location.href=`login.html`;
			}else{
				alert("注册失败");
				return;
			}
		}
	}
	xhr.open("POST","/ajax/reg",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var formdata=`user_username=${_user_username}&user_pwd=${_user_pwd}&user_name=${_user_name}&user_age=${_user_age}&user_phone=${_user_phone}&user_email=${_user_email}`;
	xhr.send(formdata);
}

function find(){
	var _user_username=user_username.value;
	if(!_user_username){
		alert("用户名不能为空");
		return;
	}
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			var r=xhr.responseText;
			console.log(r);
			if(r==1){
				user_username_msg.innerHTML=`<span id="user_username_msg1">该用户名已被占用</span>`;
				return;
			}else{
				user_username_msg.innerHTML=`<span id="user_username_msg1" class="text-white">√</span>`;
			}
		}
	}
	xhr.open("GET",`/ajax/find/user_username/${_user_username}`,true);
	xhr.send();
}
function check_user_pwd(){
	var _user_pwd=user_pwd.value;
	var reg=/^(?![0-9a-z]+$)(?![A-Za-z]+$)[0-9A-Za-z]{6,}$/;
	var bool=reg.test(_user_pwd);
	if(bool==false || _user_pwd==""){
		user_pwd_msg.innerHTML=`<span id="user_pwd_msg1">请输入合格的密码</span>`;
	}else{
		user_pwd_msg.innerHTML=`<span id="user_pwd_msg1" class="text-white">√</span>`;
	}
}
function check_user_name(){
	var _user_name=user_name.value;
	var reg = /^([A-Za-z]|[\u4e00-\u9fa5]){2,20}$/;
	var bool=reg.test(_user_name);
	if(bool==false || _user_name==""){
		user_name_msg.innerHTML=`<span  id="user_name_msg1">请输入2-20位中文或英文</span>`;
	}else{
		user_name_msg.innerHTML=`<span  id="user_name_msg1" class="text-white">√</span>`;
	}
}
function check_user_age(){
	var _user_age=user_age.value;
	if(!_user_age ||_user_age <=0 || _user_age>=150 ){
		user_age_msg.innerHTML=`<span id="user_age_msg1">格式不正确</span>`;
	}else{
		user_age_msg.innerHTML=`<span id="user_age_msg1" class="text-white">√</span>`;
	}
	
}
function check_user_phone(){
	var _user_phone=user_phone.value;
	var reg=/((\+86|0086)\s+)?1[3-9]\d{9}/;
	var bool=reg.test(_user_phone);
	if(!bool || !user_phone){
		user_phone_msg.innerHTML=`<span  id="user_phone_msg1">请输入正确的电话</span>`;
	}else {
		user_phone_msg.innerHTML=`<span  id="user_phone_msg1" class="text-white">√</span>`;
	}
}
	

function check_user_email(){
	var _user_email=user_email.value;
	var reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var bool=reg.test(_user_email);
	if(!bool || !_user_email){
		user_email_msg.innerHTML=`<span  id="user_email_msg1">请输入正确的邮箱</span>`;
	}else {
		user_email_msg.innerHTML=`<span  id="user_email_msg1" class="text-white">√</span>`;
		return true;
	}
}
function check(){
	if(user_username_msg1.innerHTML== "√"&&  user_pwd_msg1.innerHTML== "√"  && user_name_msg1.innerHTML== "√" && user_age_msg1.innerHTML== "√"  &&  user_phone_msg1.innerHTML== "√" && user_email_msg1.innerHTML=="√"  ){
		btn.innerHTML=`<button type="button"  onclick="reg()" class="my_button_1 btn-primary">提交</button>`;
	}else {
		alert("请填入合格的信息");
		return;
	}
}