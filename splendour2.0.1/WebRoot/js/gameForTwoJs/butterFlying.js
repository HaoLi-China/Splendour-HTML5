//画布
var canvas;
var ctx;

//标志位
var flag=false;
var gameState=0;

//每只蝴蝶的坐标
var xL1 = -100;
var yL1 = 0;
var xL2 = 120;
var yL2 = 0;
var xL3 = 240;
var yL3 = 0;
var xL4 = 360;
var yL4 = 0;
var xL5 = 480;
var yL5 = 0;
var xL6 = 600;
var yL6 = 0;
var xL7 = 720;
var yL7 = 0;
var xL8 = 840;
var yL8 = 0;
var xL9 = 0;
var yL9 = 0;
var xL10 = 0;
var yL10 = 0;

//帧计数
var count1 = 0;
var count2 = 1;
var count3 = 2;
var count4 = 3;
var count5 = 4;
var count6 = 5;
var count7 = 6;
var count8 = 7;
var count9 = 8;
var count10 = 9;
var waitCount = 0;

//路径Id（用于选择路径）
var pathId1=parseInt(Math.random()*8+1);
var pathId2=parseInt(Math.random()*8+1);
var pathId3=parseInt(Math.random()*8+1);
var pathId4=parseInt(Math.random()*8+1);
var pathId5=parseInt(Math.random()*8+1);
var pathId6=parseInt(Math.random()*8+1);
var pathId7=parseInt(Math.random()*8+1);
var pathId8=parseInt(Math.random()*8+1);
//var pathId9=9;
//var pathId10=10;
var pathId9=parseInt(Math.random()*8+1);
var pathId10=parseInt(Math.random()*8+1);

var waitImage1 = new Image();// 等待图片1
var waitImage2 = new Image();// 等待图片2
var waitImage3 = new Image();// 等待图片3
var waitImage4 = new Image();// 等待图片4
waitImage1.src = "images/gameViewImage/wait1.png";// 等待图片1
waitImage2.src = "images/gameViewImage/wait2.png";// 等待图片2
waitImage3.src = "images/gameViewImage/wait3.png";// 等待图片3
waitImage4.src = "images/gameViewImage/wait4.png";// 等待图片3

var winImage = new Image();// 胜利提示界面
var loseImage = new Image();// 失败提示界面
var escapeImage = new Image();// 对方离开界面
var equalImage = new Image();// 平局界面
winImage.src = "images/gameViewImage/win.png";// 胜利提示界面
loseImage.src = "images/gameViewImage/lose.png";// 失败提示界面
escapeImage.src = "images/gameViewImage/escape.png";// 对方离开界面
equalImage.src = "images/gameViewImage/equal.png";// 平局界面

//初始化画布
function initCanvas() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
}

//画蝴蝶一
function drawButterfly1(num) {
	ctx.drawImage(butterfly1, 0, butterHeight1 * num, butterWidth1,
			butterHeight1, xL1-butterWidth1/2, yL1-butterHeight1/2, butterWidth1, butterHeight1);
}

//画蝴蝶二
function drawButterfly2(num) {
	ctx.drawImage(butterfly2, 0, butterHeight2 * num, butterWidth2,
			butterHeight2, xL2-butterWidth2/2, yL2-butterHeight2/2, butterWidth2, butterHeight2);
}

//画蝴蝶三
function drawButterfly3(num) {
	ctx.drawImage(butterfly3, 0, butterHeight3 * num, butterWidth3,
			butterHeight3, xL3-butterWidth3/2, yL3-butterHeight3/2, butterWidth3, butterHeight3);
}

//画蝴蝶四
function drawButterfly4(num) {
	ctx.drawImage(butterfly4, 0, butterHeight4 * num, butterWidth4,
			butterHeight4, xL4-butterWidth4/2, yL4-butterHeight4/2, butterWidth4, butterHeight4);
}

//画蝴蝶五
function drawButterfly5(num) {
	ctx.drawImage(butterfly5, 0, butterHeight5 * num, butterWidth5,
			butterHeight5, xL5-butterWidth5/2, yL5-butterHeight5/2, butterWidth5, butterHeight5);
}

//画蝴蝶六
function drawButterfly6(num) {
	ctx.drawImage(butterfly6, 0, butterHeight6 * num, butterWidth6,
			butterHeight6, xL6-butterWidth6/2, yL6-butterHeight6/2, butterWidth6, butterHeight6);
}

//画蝴蝶七
function drawButterfly7(num) {
	ctx.drawImage(butterfly7, 0, butterHeight7 * num, butterWidth7,
			butterHeight7, xL7-butterWidth7/2, yL7-butterHeight7/2, butterWidth7, butterHeight7);
}

//画蝴蝶八
function drawButterfly8(num) {
	ctx.drawImage(butterfly8, 0, butterHeight8 * num, butterWidth8,
			butterHeight8, xL8-butterWidth8/2, yL8-butterHeight8/2, butterWidth8, butterHeight8);
}

//画蝴蝶九
function drawButterfly9(num) {
	ctx.drawImage(butterfly9, 0, butterHeight9 * num, butterWidth9,
			butterHeight9, xL9-butterWidth9/2, yL9-butterHeight9/2, butterWidth9, butterHeight9);
}

//画蝴蝶十
function drawButterfly10(num) {
	ctx.drawImage(butterfly10, 0, butterHeight10 * num, butterWidth10,
			butterHeight10, xL10-butterWidth10/2, yL10-butterHeight10/2, butterWidth10, butterHeight10);
}

//画等待界面
function drawWaitingView(){
	switch(waitCount){
	case 0:
		ctx.drawImage(waitImage1, 387, 180);
		waitCount++;
		break;
	case 1:
		ctx.drawImage(waitImage2, 387, 180);
		waitCount++;
		break;
	case 2:
		ctx.drawImage(waitImage3, 387, 180);
		waitCount++;
		break;
	case 3:
		ctx.drawImage(waitImage4, 387, 180);
		waitCount=0;
		break;
	}
}

//画胜利界面
function drawWinView(){
		ctx.drawImage(winImage, 212, 124);
}

//画失败界面
function drawLoseView(){
		ctx.drawImage(loseImage, 262, 90);
}

//画对方离开界面
function drawEscapeView(){
		ctx.drawImage(escapeImage, 262, 90);
}

//画平局界面
function drawEqualView(){
		ctx.drawImage(equalImage, 212, 175);
}

//计数
function count(){
	if (count1 < 11) {
		count1++;
	} 
	else {
		count1 = 0;
	}
	
	if (count2 < 11) {
		count2++;
	} 
	else {
		count2 = 0;
	}
	
	if (count3 < 11) {
		count3++;
	} 
	else {
		count3 = 0;
	}
	
	if (count4 < 11) {
		count4++;
	} 
	else {
		count4 = 0;
	}
	
	if (count5 < 11) {
		count5++;
	} 
	else {
		count5 = 0;
	}
	
	if (count6 < 9) {
		count6++;
	} 
	else {
		count6 = 0;
	}
	
	if (count7 < 11) {
		count7++;
	} 
	else {
		count7 = 0;
	}
	
	if (count8 < 11) {
		count8++;
	} 
	else {
		count8 = 0;
	}
	
	if (count9 < 11) {
		count9++;
	} 
	else {
		count9 = 0;
	}
	
	if (count10 < 11) {
		count10++;
	} 
	else {
		count10 = 0;
	}
}

//画飞行时的蝴蝶
function drawFlying() {
	canvas.width = 1024;
	canvas.height = 768;
	if(flag){
	setLocation();

	count();

	drawButterfly1(count1);
	drawButterfly2(count2);
	drawButterfly3(count3);
	drawButterfly4(count4);
	drawButterfly5(count5);
	drawButterfly6(count6);
	drawButterfly7(count7);
	drawButterfly8(count8);
	drawButterfly9(count9);
	drawButterfly10(count10);
	}
	else{
		if(gameState==0){//游戏还未开始
			drawWaitingView();
		}
		else if(gameState==1){//时间到，赢得胜利
			drawWinView();
		}
		else if(gameState==2){//时间到，失败
			drawLoseView();
		}
		else if(gameState==3){//对方离开，胜利
			drawEscapeView();
		}
		else if(gameState==4){//平局
			drawEqualImage();
		}
		else if(gameState==5){//自己断线
			window.location = "offlineView.html";
		}
	}
}

//设置蝴蝶位置
function setLocation() {
	//设置蝴蝶1坐标
	if (xL1 < canvas.width+100) {
		xL1=getXPath(xL1,1);
	} else {
		xL1 =-100;
	}
	yL1 = getYPath(xL1, canvas.width, pathId1);
	
	//设置蝴蝶2坐标
	if (xL2 < canvas.width+100) {
		xL2=getXPath(xL2,2);
	} else {
		xL2 = -100;
	}
	yL2 = getYPath(xL2, canvas.width, pathId2);
	
	//设置蝴蝶3坐标
	if (xL3 < canvas.width+100) {
		xL3=getXPath(xL3,3);
	} else {
		xL3 = -100;
	}
	yL3 = getYPath(xL3, canvas.width, pathId3);
	
	//设置蝴蝶4坐标
	if (xL4 < canvas.width+100) {
		xL4=getXPath(xL4,4);
	} else {
		xL4 = -100;
	}
	yL4 = getYPath(xL4, canvas.width, pathId4);
	
	//设置蝴蝶5坐标
	if (xL5 < canvas.width+100) {
		xL5=getXPath(xL5,5);
	} else {
		xL5 = -100;
	}
	yL5 = getYPath(xL5, canvas.width, pathId5);
	
	//设置蝴蝶6坐标
	if (xL6 < canvas.width+100) {
		xL6=getXPath(xL6,6);
	} else {
		xL6 = -100;
	}
	yL6 = getYPath(xL6, canvas.width, pathId6);
	
	//设置蝴蝶7坐标
	if (xL7 < canvas.width+100) {
		xL7=getXPath(xL7,7);
	} else {
		xL7 = -100;
	}
	yL7 = getYPath(xL7, canvas.width, pathId7);
	
	//设置蝴蝶8坐标
	if (xL8 < canvas.width+100) {
		xL8=getXPath(xL8,8);
	} else {
		xL8 = -100;
	}
	yL8 = getYPath(xL8, canvas.width, pathId8);
	
	//设置蝴蝶9坐标
	/*xL9=getXPath(xL9,9);
	yL9 = getYPath(xL9, canvas.width, pathId9);*/
	if (xL9 < canvas.width+100) {
		xL9=getXPath(xL9,9);
	} else {
		xL9 = -100;
	}
	yL9 = getYPath(xL9, canvas.width, pathId9);
	
	//设置蝴蝶10坐标
	/*xL10=getXPath(xL10,10);
	yL10 = getYPath(xL10, canvas.width,pathId10);*/
	if (xL10 < canvas.width+100) {
		xL10=getXPath(xL10,10);
	} else {
		xL10 = -100;
	}
	yL10 = getYPath(xL10, canvas.width, pathId10);
}

initCanvas();

//Worker线程
var flying = new Worker('js/utilitiesJs/drawButter.js');
flying.postMessage(0);

flying.onmessage = function(event) {
	drawFlying();
};

/*  window.onload = function() {      
 var canvas =document.getElementById("canvas");      
 var ctx =canvas.getContext("2d");      
 var butterfly1 = new Image();//蝴蝶一
 var butterfly2 = new Image();//蝴蝶二
 var butterfly3 = new Image();//蝴蝶三
 var butterfly4 = new Image();//蝴蝶四
 var butterfly5 = new Image();//蝴蝶五
 var butterfly6 = new Image();//蝴蝶六
 var butterfly7 = new Image();//蝴蝶七
 var butterfly8 = new Image();//蝴蝶八
 var butterfly9 = new Image();//蝴蝶九
 var butterfly10 = new Image();//蝴蝶九
 
butterfly1.onload=function(){  
 ctx.drawImage(butterfly1,0, 0,80,1360/17,100,100,80,1360/17);  
 }      
butterfly1.src = "images/butterfly1.png";//蝴蝶一
  //butterfly1.src = "images/butterfly2.png";//蝴蝶二
  //butterfly1.src = "images/butterfly3.png";//蝴蝶三
  //butterfly1.src = "images/butterfly4.png";//蝴蝶四
 // butterfly1.src = "images/butterfly5.png";//蝴蝶五
 // butterfly1.src = "images/butterfly6.png";//蝴蝶六
 // butterfly1.src = "images/butterfly7.png";//蝴蝶七
 // butterfly1.src = "images/butterfly8.png";//蝴蝶八
 // butterfly1.src = "images/butterfly9.png";//蝴蝶九
 // butterfly1.src = "images/butterfly10.png";//蝴蝶十         
}*/
