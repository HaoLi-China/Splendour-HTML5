//向服务器请求都是返回1成功，0失败，其他未联网

//向数据库请求更新用户金币，等级，经验
/*
 * 格式:
 * 金币：updateUser("user", "money", 更新数目)
 * 等级：updateUser("user", "level", 更新数目)
 * 经验：updateUser("user", "exp", 更新数目)
 * username从Cookies中获得
 */
function updateUser(form, article, varia, or) {
	if (or == 2) {
		//var loginuser = getCookie("username2");
		var loginuser = document.getElementById("name2").innerText
	} else {
		var loginuser = getCookie("username1");
	}
	console.log("更新用户时的用户名：" + loginuser);
	//分别代表要更新的表名，列名，更新的数目以及用户名
	//	var url = "update?form=" + form + "&article=" + article + "&varia=" + varia
	//			+ "&username=" + encodeURI(encodeURI(loginuser));
	//	$.get(url, null, function(data) {
	//		$("#updateresult").html(data);
	//		console.log(data);
	//	});
	$.ajax( {
		type : "POST", //http请求方式
		url : "update", //服务器段url地址
		data : "form=" + form + "&article=" + article + "&varia=" + varia
				+ "&username=" + encodeURI(encodeURI(loginuser)), //发送给服务器段的数据
		dataType : "html", //告诉JQuery返回的数据格式
		success : function callback(data){
		      		console.log(data);
		         } ,
		error : function errorcallback(data){
		      		alert("您与服务器断开连接，以后进行单机游戏，或者连上网络重新开始");
		         }
	});
}

//向数据库请求更新用户不同种类蝴蝶数目，不同工具数目
/*
 * 格式:
 * 蝴蝶：updateBT("butterfly", "btfnum", 更新数目 , btfname)
 * btfname为btf1-btf10
 * 工具：updateBT("tool", "toolnum", 更新数目 , toolname)
 * toolname为tool1-tool5
 * username从Cookies中获得
 */
function updateBT(form, article, varia, btname) {
	//user从Cookies中获得
	var loginuser = getCookie("username1");
	//分别代表要更新的表名，列名，更新的数目以及用户名
//	var url = "update?form=" + form + "&article=" + article + "&varia=" + varia
//			+ "&username="
//			+ encodeURI(encodeURI(loginuser) + "&btname=" + btname);
//	$.get(url, null, function(data) {
//		$("#updateresult").html(data);
//	});
	$.ajax( {
	type : "POST", //http请求方式
	url : "update", //服务器段url地址
	data : "form=" + form + "&article=" + article + "&varia=" + varia
			+ "&username="
			+ encodeURI(encodeURI(loginuser) + "&btname=" + btname), //发送给服务器段的数据
	dataType : "html", //告诉JQuery返回的数据格式
	success : function callback(data){
	      		console.log(data);
	         } ,
	error : function errorcallback(data){
	      		alert("您与服务器断开连接，以后进行单机游戏，或者连上网络重新开始");
	         }
	});
}