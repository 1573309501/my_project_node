
function del(_info_id){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var r=xhr.responseText;
			if(r==1){
				alert("删除成功");
				show();
			}else{
				alert("删除失败");
			} 
		 }
	}
	xhr.open("delete",`/ajax/del/${_info_id}`,true);
	xhr.send();
}


function show(){
	//获取地址栏中查询字符串的uid
	//获取查询字符串地址栏对象
	var obj=new URLSearchParams(location.search);
	var _info_uid=obj.get("user_id");
	//1
	var xhr= new XMLHttpRequest();
	//4.
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var r=xhr.responseText;
			if(r==0){
				alert("加载失败");
				return;
			}else{
				var stus=JSON.parse(r);
				/* console.log(stus); */
				var htmlstr=`
				<table border="1"  align="center" class="text-muted table-striped table-hover table-light  border-0 w-100" >
				<tr align="center">
					<th>商品名称</th>
					<th>价格(元)</th>
					<th>数量</th>
					<th>总金额</th>
					<th>消费类型</th>
					<th>日期</th>
					<th>备注信息</th>
					<th>操作</th>
					</tr>
				`;
				for(var i=0;i<stus.length;i++){
				htmlstr+=`
				<tr align="center">
					<td>${stus[i].info_name}</td>
					<td>${stus[i].info_price}</td>
					<td>${stus[i].info_count}</td>
					<td>${stus[i].info_money}</td>
					<td>${stus[i].info_type}</td>
					<td>${stus[i].info_date}</td>
					<td>${stus[i].info_remark}</td>
					<td>
					<a href="javascript:del(${stus[i].info_id })">删除</a>
					<a href="javascript:show_show(${stus[i].info_id},${stus[i].info_uid})">修改</a>
				
					</td>
					</tr>
				`;
				}
				htmlstr+=`</table>`;
				cz.innerHTML=htmlstr;
				
			}

		}
	}

		//2.
		xhr.open("get",`/ajax/consume_info_list/${_info_uid}`,true);
		//3.
		xhr.send();
		//
		n2.innerHTML=`<a href="javascript:add(${_info_uid})">添加消费</a>`;
		
		
}

/* 主页内容事件/ 需要后期完善 */
function start(){
	var obj=new URLSearchParams(location.search);
	var _info_uid=obj.get("user_id");
	cz.innerHTML=`
	<div class="h5 text-center text-muted my_st">
		<div class="">女士们，先生们，你们好!</div>
		<div class="">欢迎来到多多消费管理系统</div>
	</div>
	`;
	n2.innerHTML=`<a href="javascript:add(${_info_uid})">录入消费</a>`;
}