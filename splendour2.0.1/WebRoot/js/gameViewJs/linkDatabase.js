//接收19条，分割20
function getBT(){
	var loginuser = getCookie("username1");
	console.log("初始化从cookies得到的用户名："+loginuser);
	//var url = "getbt?username="+encodeURI(encodeURI("lihao"));
	var url = "getbt?username="+encodeURI(encodeURI(loginuser));
	$.get(url, null, function(data){
		var chdata = data.split('?');
		var status = parseInt(chdata[0]);
		if(status==1){
			getmoney=parseInt(chdata[1]);
			getexp=parseInt(chdata[2]);
			getlevel=parseInt(chdata[3]);
			for(var i =4;i<9;i++){
				toolnum[i-4]=parseInt(chdata[i]);
			}
			for(var i =9;i<19;i++){
				btfnum[i-9]=parseInt(chdata[i]);
			}
			game.player.updateCoin(getmoney,false);
		}else{
			alert("从服务器获取数据失败，请检查网络重新进入！");
		}
		console.log(data);
	});
}


