var sid1 = null;
var sid2 = null;
var sid3 = null;

var myCavans = document.getElementById('mycanvas');
var myCtx = myCavans.getContext('2d');

var frameNum1 = 0;
var frameNum2 = 0;
var frameNum3 = 0;

var sweat = new Image();// 汗滴
sweat.src = "images/gameViewImage/sweat.png";
var crown = new Image();// 皇冠
crown.src = "images/gameViewImage/crown.png";
var effect1 = new Image();// 效果1
effect1.src = "images/gameViewImage/effect1.png";
var effect2 = new Image();// 效果2
effect2.src = "images/gameViewImage/effect2.png";

//显示捕捉时的动画
function drawCaughtAni() {
	myCavans.width = 1024;
	myCavans.height = 768;
	switch (frameNum3) {
	case 0:
		myCtx.drawImage(effect1, xL-75, yL-75);
		break;
	case 1:
		myCtx.drawImage(effect2, xL-75, yL-75);
		break;
	}
	frameNum3++;
	if (frameNum3 == 2) {
		clearInterval(sid3);
		frameNum3 = 0;
		myCavans.width = 1024;
	    myCavans.height = 768;
	}
}

//抓到蜜蜂时的动画
function drawBeeCaught() {
	myCavans.width = 1024;
	myCavans.height = 768;
	switch (frameNum2) {
	case 0:
		myCtx.drawImage(sweat, 400, 150);
		break;
	case 1:
		myCtx.drawImage(sweat, 400, 200);
		break;
	case 2:
		myCtx.drawImage(sweat, 400, 250);
		break;
	case 3:
		myCtx.drawImage(sweat, 400, 300);
		break;
	}
	frameNum2++;
	if (frameNum2 == 4) {
		clearInterval(sid2);
		frameNum2 = 0;
		myCavans.width = 1024;
	    myCavans.height = 768;
	}
}

//抓到蝴蝶时的动画
function drawButterCaught() {
	myCavans.width = 1024;
	myCavans.height = 768;
	switch (frameNum1) {
	case 0:
		myCtx.drawImage(crown, 362, 50);
		break;
	case 1:
		myCtx.drawImage(crown, 362, 50);
		break;
	case 2:
		myCtx.drawImage(crown, 362, 50);
		break;
	case 3:
		myCtx.drawImage(crown, 362, 50);
		break;
	}
	frameNum1++;
	if (frameNum1 == 4) {
		clearInterval(sid1);
		frameNum1 = 0;
		myCavans.width = 1024;
	    myCavans.height = 768;
	}
}

//每隔100ms执行一次操作
function startDraw(state) {
	switch (state) {
	case 1:
		clearInterval(sid1);
		sid1 = setInterval("drawButterCaught()", 100);
		break;
	case 2:
		clearInterval(sid2);
		sid2 = setInterval("drawBeeCaught()", 100);
		break;
	case 3:
		clearInterval(sid3);
		sid3 = setInterval("drawCaughtAni()", 100);
		break;
	}
}
