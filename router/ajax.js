const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();

//consume_user用户表表接口
//1用户登录  login		ok
 r.get("/login/:user_username&:user_pwd",(req,res)=>{
	 let obj=req.params;
	  console.log(obj); 
	 //查询数据库
	 var sql ="SELECT * FROM consume_user WHERE user_username=? AND user_pwd=?";
	 pool.query(sql,[obj.user_username,obj.user_pwd],(err,result)=>{
		 if(err) throw err;
		/* console.log(result); */
		 if(result.length>0){
			 res.send(result);
		 }else{
			  res.send("0");
		 }
	 });
 });
 
 //2.用户注册
 //2.1注册前根据user_username进行查找有无此用户
 r.get("/find/user_username/:user_username",(req,res)=>{
 	 let obj=req.params;
 	  console.log(obj); 
 	 //查询数据库
 	 var sql ="SELECT * FROM consume_user WHERE user_username=?";
 	 pool.query(sql,[obj.user_username,obj.user_pwd],(err,result)=>{
 		 if(err) throw err;
 		/* console.log(result); */
 		 if(result.length>0){
 			 res.send("1");
 		 }else{
 			  res.send("0");
 		 }
 	 });
 });
//2.2用户注册
r.post("/reg",(req,res)=>{
	 let obj=req.body;
	pool.query('INSERT INTO  consume_user SET?',[obj],(err,result)=>{
		if(err) throw err;
		 console.log(result); 
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//consume_info消费记录表接口
//1.根据info_uid查询当前info_uid的消费记录表consume_info
r.get("/consume_info_list/:info_uid",(req,res)=>{
	let obj=req.params;
	var sql ="SELECT * FROM consume_info WHERE info_uid=? ORDER BY info_date DESC";
	pool.query(sql,[obj.info_uid],(err,result)=>{
		if(result.length>0){
		 	res.send(result);
		}else{
		 	 res.send("0");
		}
	});
});

//2.根据info_id删除消费记录   /del/${_info_id}
r.delete("/del/:info_id",(req,res)=>{
	 let obj=req.params;
	/* console.log(obj.pid); */
	 var sql ="DELETE FROM consume_info WHERE info_id=?";
	 pool.query(sql,[obj.info_id],(err,result)=>{
	 	if(err) throw err;
	 	/* console.log(result); */
	 	if(result.affectedRows>0){
	 		res.send("1");
	 	}else{
	 		res.send("0");
	 	}
	 });
});

//3.1根据info_id查询消费记录表consume_info    /consume_info_list_1/${_info_id}
r.get("/consume_info_list_1/:info_id",(req,res)=>{
	let obj=req.params;
	var sql ="SELECT * FROM consume_info WHERE info_id=?";
	pool.query(sql,[obj.info_id],(err,result)=>{
		if(result.length>0){
		 	res.send(result);
		}else{
		 	 res.send("0");
		}
	});
});

//3.2根据info_id修改  xhr.open("put","/ajax/update",true);
r.put("/update",(req,res)=>{
	let obj=req.body;
	console.log(obj.info_id);
	var sql="UPDATE consume_info  SET? WHERE info_id=?";
	pool.query(sql,[obj,obj.info_id],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//4添加consume_info    xhr.open("post","/ajax/add",true);
r.post("/add",(req,res)=>{
	let obj=req.body;
	console.log(obj);
	pool.query('INSERT INTO consume_info SET?',[obj],(err,result)=>{
	  if(err) throw err;
	  console.log(result);
	  if(result.affectedRows>0){
	  	res.send("1");
	  }else{
	  	res.send("0");
	  }
	});
});

//导出路由器对象
module.exports=r;