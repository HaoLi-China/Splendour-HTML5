	// 设置cookie
	function setCookie(name,value)
	{
	/*
	 * ---------------setCookie(name,value) -----------------
	 * setCookie(name,value) 功能:设置得变量name的值 参数:name,字符串;value,字符串.
	 * 实例:setCookie('username','baobao')
	 * ---------------setCookie(name,value) -----------------
	 */
		var Days = 30; // 此 cookie 将被保存 30 天
		var exp= new Date();
		exp.setTime(exp.getTime() +Days*24*60*60*1000);
		document.cookie = name +"="+ escape (value) + ";expires=" + exp.toGMTString();
		location.href = "mainView.htm";// 接收页面.
	}
