//获取cookie中相应的值
function getCookie(name) {
	var arr = document.cookie
			.match(new RegExp("(^|)" + name + "=([^;]*)(;|$)"));
	if (arr != null)
		return unescape(arr[2]);
	return null;
}
		
		