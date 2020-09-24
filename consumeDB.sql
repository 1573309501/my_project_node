SET NAMES utf8;
DROP DATABASE IF EXISTS	consumeDB;
CREATE DATABASE consumeDB CHARSET=utf8;
USE consumeDB;

#创建用户表consume_user
CREATE TABLE  consume_user(
user_id INT PRIMARY KEY AUTO_INCREMENT,
user_username VARCHAR(20)  ,
user_name VARCHAR(20) ,     
user_pwd  VARCHAR(20),    
user_age  INT ,      
user_phone VARCHAR(11) ,          
user_email  VARCHAR(30)    
);
#向consume_user表中插入具体信息
INSERT INTO consume_user VALUES(1,'老头','陈卓','1513359501',50,'13896837825','1513359501@qq.com');
INSERT INTO consume_user VALUES(2,'多多','李松韬','1526659801',18,'15685742135','1526659801@qq.com');
INSERT INTO consume_user VALUES(3,'别过','孙菲菲','sff158',19,'15685782135','1456328@qq.com');
INSERT INTO consume_user VALUES(4,'梦话西游','杨非梦','r14562',24,'15685748135','1512338514@qq.com');
INSERT INTO consume_user VALUES(5,'传奇世界','徐青','xu18745',20,'15183642841','1592248421@qq.com');
INSERT INTO consume_user VALUES(6,'乐多派','刘亚鑫','lyx58964',21,'13898526782','1572208514@qq.com');
INSERT INTO consume_user VALUES(7,'享乐多','任乐乐','rllrll',18,'15178933524','1573309501@qq.com');
INSERT INTO consume_user VALUES(8,'小菲睡醒了','李路一','llylly',80,'15178953527','1571308579@qq.com');
INSERT INTO consume_user VALUES(9,'闭嘴','王立玲','rllrll',18,'15867952733','1553379231@qq.com');
INSERT INTO consume_user VALUES(10,'嫦娥妹妹','高芙蓉','gfrgfr',21,'15767942612','1543179251@qq.com');

#创建消费记录表consume_info
CREATE TABLE  consume_info(
info_id INT PRIMARY KEY AUTO_INCREMENT,
info_name VARCHAR(20) NOT NULL, #商品名称
info_price DECIMAL(20,2) NOT NULL,           
info_count  INT NOT NULL,  
info_money DECIMAL(20,2) NOT NULL,   
info_type  VARCHAR(20) NOT NULL,
info_date  DATE NOT NULL,      
info_remark VARCHAR(100) ,         
info_uid  INT NOT NULL,
foreign key(info_uid) references consume_user(user_id)
);
INSERT INTO consume_info VALUES(1,'大衣','240',1,'240','百货消费','2020-7-4','今天消费很开心',1);
INSERT INTO consume_info VALUES(2,'大衣','240',1,'240','百货消费','2020-7-4','今天消费很开心',2);
INSERT INTO consume_info VALUES(3,'大衣','240',1,'240','百货消费','2020-7-4','今天消费很开心',3);
INSERT INTO consume_info VALUES(4,'大衣','240',1,'240','百货消费','2020-7-4','今天消费很开心',4);
INSERT INTO consume_info VALUES(5,'大衣','240',1,'240','百货消费','2020-7-4','今天消费很开心',5);
INSERT INTO consume_info VALUES(6,'大衣','240',1,'240','百货消费','2020-7-4','今天消费很开心',6);
INSERT INTO consume_info VALUES(7,'大衣','240',1,'240','百货消费','2020-7-4','今天消费很开心',7);
INSERT INTO consume_info VALUES(8,'猪肉','16',2,'32','生活消费','2020-7-2','今天买的猪肉的肉质很好',7);
INSERT INTO consume_info VALUES(9,'胡罗卜','3',3,'9','生活消费','2020-7-1','今天消费很开心',7);
INSERT INTO consume_info VALUES(10,'电费','0.45',100,'45.00','日常消费','2020-7-5','今天消费很开心',7);
INSERT INTO consume_info VALUES(11,'奶茶','12',1,'12','生活消费','2020-7-6','有奶茶的每一天都很开心',7);
INSERT INTO consume_info VALUES(12,'苹果','8',2,'16','生活消费','2020-7-8','红红火火',7);
INSERT INTO consume_info VALUES(null,'芒果','16',2,'32','生活消费','2020-7-6','',7);
INSERT INTO consume_info VALUES(null,'哈密瓜','3',3,'9','生活消费','2020-7-7','',7);
INSERT INTO consume_info VALUES(null,'水费','0.45',100,'45.00','日常消费','2020-7-8','',7);
INSERT INTO consume_info VALUES(null,'烧仙草','12',1,'12','生活消费','2020-7-9','',7);
INSERT INTO consume_info VALUES(null,'菠萝','8',2,'16','生活消费','2020-7-10','',7);
INSERT INTO consume_info VALUES(null,'西瓜','16',2,'32','生活消费','2020-7-11','',7);
INSERT INTO consume_info VALUES(null,'火锅','240',1,'240','生活消费','2020-7-12','',7);
INSERT INTO consume_info VALUES(null,'水费','0.45',100,'45.00','日常消费','2020-7-13','',7);
INSERT INTO consume_info VALUES(null,'芋圆奶茶','12',1,'12','生活消费','2020-7-4','',7);
INSERT INTO consume_info VALUES(null,'菠萝蜜','8',2,'16','生活消费','2020-7-15','',7);

