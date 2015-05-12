//用户名校验的方法
//这个方法将使用XMLHTTPRequest对象来进行AJAX的异步数据交互
var xmlhttp;
function isOnline() {
	
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    if (!xmlhttp) {
        alert("XMLHttpRequest对象创建失败!!");
        return;
    } else {
        alert(xmlhttp.readyState);
    }
    xmlhttp.onreadystatechange = callback;
    xmlhttp.open("GET","isOnlineServlet",false);
    xmlhttp.send(null);
}

//回调函数
function callback() {
    if (xmlhttp.readyState == 4) {
        console.log(xmlhttp.status);
        if (xmlhttp.status == 200) {
            var responseText = xmlhttp.responseText;
        } else {
            alert("出错了！！！");
        }
    }
}


