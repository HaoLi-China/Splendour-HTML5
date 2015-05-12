//重置
function FormReset(){
	$("#username").val("");
   	$("#userpass").val("");	
	$("#checkcode").val("");
}
//去字符串左右空格;
function trim(s){
	return s.replace(/(^\s*)|(\s*$)/g, "");
}
//加载验证码图片
function loadImage(lorr) {
    if(lorr==1){
	    document.getElementById("randImage").src = "jsp/image.jsp?" + Math.random();
    }
    if(lorr==2){
	    document.getElementById("r_randImage").src = "jsp/image.jsp?" + Math.random();
    }
}
//转入注册界面
function goRegister(){
	document.getElementById("loginDiv").style.display="none";
	document.getElementById("registerDiv").style.display="inline";
    document.getElementById("r_randImage").src = "jsp/image.jsp?" + Math.random();
}
//返回登录界面
function doCancel(){
	document.getElementById("loginDiv").style.display="inline";
	document.getElementById("registerDiv").style.display="none";
    document.getElementById("randImage").src = "jsp/image.jsp?" + Math.random();
}

//给url地址增加时间戳，骗过浏览器，不读取缓存
function convertURL(url) {
    //获取时间戳
    var timstamp = (new Date()).valueOf();
    //将时间戳信息拼接到url上
    //url = "AJAXServer"
    if (url.indexOf("?") >= 0) {
        url = url + "&t=" + timstamp;
    } else {
        url = url + "?t=" + timstamp;
    }
    return url;
}