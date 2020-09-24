function show_show(_info_id ,_info_uid){
	//获取地址栏中查询字符串的uid
	//获取查询字符串地址栏对象
	/* var obj=new URLSearchParams(location.search);
		var _info_id=obj.get("info_id"); */
	cz.innerHTML=
		`<table border="1" cellspacing="" cellpadding="" class="border-light border-0 w-100 my-1">
			<tr align="center"><th colspan="2" class="py-1">请修改消费信息</th></tr>
			<tr>
				<td align="center">商品名称</td>
				<td><input type="text" id="info_name" class="border-0 bg-transparent w-100 my-1"></td>
			</tr>
			
			<tr>
				<td align="center">价格(元)</td>
				<td><input type="text" id="info_price" class=" bg-transparent border-0 w-100 my-1" placeholder="单位(元)"></td>
			</tr>
			<tr>
				<td align="center">数量</td>
				<td><input type="number" id="info_count" class="bg-transparent border-0 w-100 my-1"></td>
			</tr>
			<tr>
				<td align="center">消费类型</td>
				<td>
					<select name="info_type" value="" size="1" value="" class="border-0  bg-transparent my-1">
						<option id="bh" value ="百货消费" selected class="h6">百货消费</option>
						<option id="sh" value ="生活消费">生活消费</option>
						<option id="rc" value ="日常消费">日常消费</option>
					</select>
				</td>
			</tr>
			<tr>
				<td align="center">消费日期</td>
				<td><input type="date" id="info_date"class=" bg-transparent border-0 my-1" ></td>
			</tr>
			
			<tr>
				<td align="center">备注信息</td>
				<td><input type="text"  id="info_remark" rows="3" cols="5" class=" bg-transparent border-0 w-100 my-1"></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<button type="button" onclick="update(${_info_uid},${_info_id})" class=" my-1 update_style btn" >修改</button>
					<input type="reset"  class=" my-1 update_style btn" />
				</td>
			</tr>
		</table>`;
	//1
	var xhr= new XMLHttpRequest();
	//4
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var r=xhr.responseText;
			if(r==0){
				alert("加载失败");
				return;
			}else{
				var stus=JSON.parse(r);
				info_name.value=stus[0].info_name;
				info_price.value=stus[0].info_price;
				info_count.value=stus[0].info_count;
				info_date.value=stus[0].info_date;
				info_remark.value=stus[0].info_remark;
				if(stus[0].info_type=="百货消费"){
					bh.selected==true;
				}else if(stus[0].info_type=="生活消费"){
					sh.selected==true;
				}else{
					rc.selected==true;
				}
			}
		}
	}
	//2.
	xhr.open("get",`/ajax/consume_info_list_1/${_info_id}`,true);
	//3.
	xhr.send();
}


function update(_info_uid ,_info_id){
	//获取地址栏中查询字符串的uid
	//获取查询字符串地址栏对象
	/* 	var obj=new URLSearchParams(location.search);
		var _info_id=obj.get("info_id");
		var _info_uid=obj.get("info_uid"); */
	//获取用户输入的值
		var _info_name=info_name.value;
		var reg=/^\d{0,20}\.*\d*$/; //输入的是正整数或者正小数
		var bool=reg.test(info_price.value);
		if(bool==true){
			var _info_price=info_price.value;
		}else{
			alert("商品价格格式输入不正确");
			return;
		 }
		 /* console.log(_info_price); */
		var _info_count=info_count.value;
		var _info_date=info_date.value;
		var _info_remark=info_remark.value;
		var _info_money =(Number(_info_count)*Number(_info_price)).toFixed(2);
		/* console.log(_info_money); */
		if(!_info_name){
			alert("商品名称不能为空");
			return;
		}
		if(!_info_price){
			alert("商品价格不能为空");
			return;
		}
				
		if(!_info_count){
			alert("商品数量不能为空");
			return;
		}else if(_info_count<=0){
			alert("请输入合法的值");
			return;
		}
				
		if(!_info_date){
			alert("消费日期不能为空");
			return;
		}
		if(bh.selected==true){
			var _info_type="百货消费";
			}else if(rc.selected==true){
				var _info_type="日常消费";
			}else{
			var _info_type="生活消费";
		}
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			var r=xhr.responseText;
			if(r==1){
				alert("修改成功");
				 location.href=`find_all.html?user_id=${_info_uid}`; 
				 /* <a href="find_all.html?user_id=${_info_uid}">回到首页</a> */
							
			}else{
				alert("修改失败");
				return;
				}
			}
		}
	xhr.open("put","/ajax/update",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var formdata=`info_id=${_info_id}&info_name=${_info_name}&info_price=${_info_price}&info_count=${_info_count}&info_money=${_info_money}&info_date=${_info_date}&info_remark=${_info_remark}&info_type=${_info_type}`;
	xhr.send(formdata);
							
}