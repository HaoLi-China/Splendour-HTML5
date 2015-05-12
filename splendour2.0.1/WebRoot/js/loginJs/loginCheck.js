//执行登录以及之前的验证
function doLogin(){
	var username=trim($("#username").val());
   	var userpass=trim($("#userpass").val());
	if(username.length==0)
    {
     	$("#username").focus();
        $("#lr").html("用户名不能为空！");
        return false;
    }
    if(userpass.length==0)
    {
	    $("#userpass").focus();
        $("#lr").html("密码不能为空！");
        return false;
    }
	var inCode = trim($("#checkcode").val().toUpperCase());
    console.log(inCode);
	if(inCode.length ==0) {
        $("#checkcode").focus();
        $("#lr").html("验证码不能为空！");
	    return false;
	}

    //用户名和密码以及验证码都符合要求则向服务器提交登录请求
    var url = "login?name=" + encodeURI(encodeURI(username))+"&pass="+userpass+"&check="+inCode;
    url = convertURL(url);
    $.get(url,null,function(data){
        if(data==1){
            $("#username").val("");
            $("#userpass").val("");
            $("#username").focus();
            $("#lr").html("用户不存在，请重新登录！");
            return;
        }
        if(data==2){
            $("#lr").html("登录成功！");
            //保存用户名到Cookies
            setCookie("username1",username)
            //console.log();
            //登录成功后跳转
            window.location.href="checkForefingerView.html";
            return;
        }
        if(data==3){
            $("#userpass").val("");
            $("#userpass").focus();
            $("#lr").html("密码错误，重新输入！");
            return;
        }
        if(data==4){
            $("#checkcode").val("");
            $("#checkcode").focus();
            $("#lr").html("验证码错误！");
            return;
        }else{
            $("#lr").html("未找到页面，网络错误！！");
        }
    });

}
