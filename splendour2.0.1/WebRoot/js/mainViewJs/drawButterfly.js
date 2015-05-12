var canvas;// 画布
var count = 0;// 用于计数
var imageWidth = 50;// 蝴蝶图片宽度
var imageHeight = 50;// 蝴蝶图片高度
var angle = 0;// 角度
var r = 160;// 圆的半径
var a = 512;// 圆心横坐标
var b = 320;// 圆心纵坐标
var xL1 = a + r * Math.cos(angle * 0.017453293) - imageWidth / 2;// 蝴蝶横坐标
var yL1 = b + r * Math.sin(angle * 0.017453293) - imageHeight / 2;// 蝴蝶纵坐标

var butterfly1 = new Image();// 蝴蝶0
var butterfly2 = new Image();// 蝴蝶1
var butterfly3 = new Image();// 蝴蝶2
var butterfly4 = new Image();// 蝴蝶3
var butterfly5 = new Image();// 蝴蝶1
var butterfly6 = new Image();// 蝴蝶2
var butterfly7 = new Image();// 蝴蝶3

// 蝴蝶图片
butterfly1.src = "images/publicImage/wait1.png";
butterfly2.src = "images/publicImage/wait2.png";
butterfly3.src = "images/publicImage/wait3.png";
butterfly4.src = "images/publicImage/wait4.png";
butterfly5.src = "images/publicImage/wait3.png";
butterfly6.src = "images/publicImage/wait2.png";
butterfly7.src = "images/publicImage/wait1.png";

// 画布，用于画蝴蝶
canvas = document.getElementById('mycanvas');
ctx = canvas.getContext('2d');

// 设置蝴蝶坐标
function setCoordinate() {
	if (angle < 360) {
		angle += 9;
	} else {
		angle = 9;
	}
	xL1 = a + r * Math.cos(angle * 0.017453293) - imageWidth / 2;
	yL1 = b + r * Math.sin(angle * 0.017453293) - imageHeight / 2;
}

// 画蝴蝶
function drawButterfly(num) {
	switch (num) {
	case 0:
		ctx.drawImage(butterfly1, xL1, yL1);
		break;
	case 1:
		ctx.drawImage(butterfly2, xL1, yL1);
		break;
	case 2:
		ctx.drawImage(butterfly3, xL1, yL1);
		break;
	case 3:
		ctx.drawImage(butterfly4, xL1, yL1);
		break;
	case 4:
		ctx.drawImage(butterfly5, xL1, yL1);
		break;
	case 5:
		ctx.drawImage(butterfly6, xL1, yL1);
		break;
	case 6:
		ctx.drawImage(butterfly7, xL1, yL1);
		break;
	}
}

// 画图方法
function draw() {

	canvas.width = 1024;
	canvas.height = 663;

	setCoordinate();
	drawButterfly(count);

	// 设置光圈位置
	var x = xL1 - 600;
	var y = yL1 - 135;
	var d = Math.round(Math.sqrt(parseInt(x * x + y * y)) / 5);
	text.style.textShadow = -x + 'px ' + -y + 'px ' + (d + 9) + 'px black';
	x = xL1 - 1000;
	y = yL1 - 650;
	spot.style.backgroundPosition = x + 'px ' + y + 'px';

	if (count < 6) {
		count++;
	} else {
		count = 0;
	}
}

// worker线程
var worker = new Worker('js/utilitiesJs/drawButter.js');
worker.postMessage(12);

worker.onmessage = function(event) {
	draw();
};
