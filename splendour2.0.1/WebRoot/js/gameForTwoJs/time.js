var si = null;
var countNum = 0;//计数
var mark = 0;//计数标志
var curpoint = 0;//现在的值
var prePoint = 0;//之前的值

//更新计时器
function clock() {

	console.log("gameState" + gameState);

	if (id % 2 == 0) {
		prePoint = curpoint;
		curpoint = sign;
		if (prePoint == curpoint) {
			mark++;
		} else {
			mark = 0;
		}

		if (countNum - timeCount > 2) {
			//自己断开连接
			isOnline = false;
			flag = false;
			ws.close();
			clearInterval(si);
			gameState = 5;
		} else if (mark > 5) {
			//对方断开连接	
			ws.send(id + "/remove");
			isOnline = false;
			gameState = 3//对方退出
			flag = false;
			ws.close();
			//更新数据库，自己加100金币，对方减120金币
			updateUser("user", "money", 100);
			updateUser("user", "money", -120, 2);
			
			clearInterval(si);
		}
		time--;
		ws.send(id + "/time/" + time);
	} else {
		prePoint = curpoint;
		curpoint = time;
		if (prePoint == curpoint) {
			mark++;
		} else {
			mark = 0;
		}

		if (countNum - signCount > 2) {
			//自己断开连接
			isOnline = false;
			flag = false;
			ws.close();
			clearInterval(si);
			gameState = 5;
		} else if (mark > 5) {
			//对方断开连接	
			ws.send(id + "/remove");
			isOnline = false;
			gameState = 3//对方退出
			flag = false;
			ws.close();
			//更新数据库，自己加100金币，对方减120金币
            updateUser("user", "money", 100);
			updateUser("user", "money", -120, 2);
				
			clearInterval(si);
		}
		sign++;
		ws.send(id + "/sign/" + sign);
	}
	countNum++;
}

//每隔一秒执行一次更新计时器操作
function startclock() {
	si = setInterval("clock()", 1000);
}
