function judge() {
	var url = "isOnline?name="
			+ encodeURI(encodeURI(getCookie("username1")));
	console.log("stop");
	$.get(url, null, function(data) {
		if (data == 0) {
			window.alert("请先登录！");
			window.location.href = "loginView.html";
		}else{
			console.log("stop");
			return;
		}
	});
}