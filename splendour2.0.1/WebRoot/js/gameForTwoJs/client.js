var ws = null;
var id = null;
var userName1 = null;
var userName2 = null;
var point2 = 0;
var isOnline = true;
var time = 60;
var sign = 0;
var timeCount = 0;
var signCount = 0;

//启动webSocket服务器
function startServer() {

	judge();

	// 设定WebSocket,协议是ws，请求是指向对应的WebSocketServlet的
	var url = "ws://192.168.1.102:8080/splendour2.0.1/splendour.ws";

	// 创建WebSocket实例，下面那个MozWebSocket是Firefox的实现
	if ('WebSocket' in window) {
		ws = new WebSocket(url);
	} else if ('MozWebSocket' in window) {
		ws = new MozWebSocket(url);
	} else {
		alert('Unsupported.');
		return;
	}

	// WebSocket握手完成，连接成功的回调
	ws.onopen = function() {

		//这里userName1是从数据库中读出的自己的用户名
		userName1 = getCookie("username1");
		console.log(userName1);
		document.getElementById("name1").innerText = userName1;
	};

	// 收到服务器发送的文本消息
	ws.onmessage = function(event) {
		var message = event.data;
		console.log(message);
		var xL = message.split("/");
		if (xL[0] == "id") {
			id = xL[1] * 1;
		} else if (xL[1] == "time") {
			timeCount++;
			time = xL[2] * 1;
			if (time > 9) {
				document.getElementById("time").innerText = time;
			} else {
				document.getElementById("time").innerText = "0" + time;
			}
			if (time == 0) {

				if (point > point2) {
					//更新数据库金币数量，自己加100金币,对方减100金币
					updateUser("user", "money", 100);
					updateUser("user", "money", -100, 2);
					gameState = 1;//胜利
				} else if (point < point2) {
					gameState = 2;//失败
				} else {
					gameState = 4;//平局
				}
				flag = false;
				ws.close();
				clearInterval(si);
				console.log("gameState:" + gameState);
			}
		} else if (xL[1] == "sign") {
			sign = xL[2] * 1;
			signCount++;
		} else if (xL[0] == "start") {
			flag = true;
			pathId1 = xL[1] * 1;
			pathId2 = xL[2] * 1;
			pathId3 = xL[3] * 1;
			pathId4 = xL[4] * 1;
			pathId5 = xL[5] * 1;
			pathId6 = xL[6] * 1;
			pathId7 = xL[7] * 1;
			pathId8 = xL[8] * 1;
			pathId9 = xL[9] * 1;
			pathId10 = xL[10] * 1;
			sendMyMessage();
			startclock();
		} else {
			xL1 = xL[1] * 1;
			xL2 = xL[2] * 1;
			xL3 = xL[3] * 1;
			xL4 = xL[4] * 1;
			xL5 = xL[5] * 1;
			xL6 = xL[6] * 1;
			xL7 = xL[7] * 1;
			xL8 = xL[8] * 1;
			xL9 = xL[9] * 1;
			xL10 = xL[10] * 1;
			userName2 = xL[11];
			if (userName2 != userName1) {
				point2 = xL[12] * 1;

				document.getElementById("name2").innerText = userName2;

				//setCookie("username2",userName2);

				if (point2 < 10) {
					document.getElementById("score2").innerText = "00" + point2;
				} else if (point2 < 100) {
					document.getElementById("score2").innerText = "0" + point2;
				} else {
					document.getElementById("score2").innerText = point2;
				}
			}
			if (point < 10) {
				document.getElementById("score1").innerText = "00" + point;
			} else if (point < 100) {
				document.getElementById("score1").innerText = "0" + point;
			} else {
				document.getElementById("score1").innerText = point;
			}
		}
	};

	// 关闭WebSocket的回调
	ws.onclose = function() {
	};
}

//向服务器发送消息
function sendMyMessage() {
	var textMessage = id + "/" + xL1 + "/" + xL2 + "/" + xL3 + "/" + xL4 + "/"
			+ xL5 + "/" + xL6 + "/" + xL7 + "/" + xL8 + "/" + xL9 + "/" + xL10
			+ "/" + userName1 + "/" + point;
	if (ws != null && textMessage != '') {
		// 通过WebSocket想向服务器发送一个文本信息
		ws.send(textMessage);
	}
}

//关闭页面前调用
window.onbeforeunload = function() {

	if (time > 0 && time != 60 && flag != false) {
		gameState = 6;//中途退出
		flag = false;
		ws.close();
		//ws.close();
		//confirm('你将失去100个金币。');
		//window.open("loseView.html");
		//window.open("loseView.html", "_blank"); 
		//alert("Hello dreamdu!");
		//return("2121");
		/*if (confirm('您确定要断开？')) {
			gameState = 6;中途退出			flag = false;
			ws.close();
			return true;
		} else {
			return ("提示：做逃兵会失去200个金币。");
		}*/
	}
}
