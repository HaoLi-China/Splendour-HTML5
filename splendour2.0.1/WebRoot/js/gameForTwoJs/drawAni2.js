var sid = null;

var myCavans = document.getElementById('canvas1');
var myCtx = myCavans.getContext('2d');

var frameNum = 0;

var effect1 = new Image();// 效果1
effect1.src = "images/gameViewImage/effect1.png";
var effect2 = new Image();// 效果2
effect2.src = "images/gameViewImage/effect2.png";

//显示捕捉时的动画
function drawCaughtAni() {
	myCavans.width = 1024;
	myCavans.height = 768;
	switch (frameNum) {
	case 0:
		myCtx.drawImage(effect1, xL-75, yL-75);
		break;
	case 1:
		myCtx.drawImage(effect2, xL-75, yL-75);
		break;
	}
	frameNum++;
	if (frameNum == 2) {
		clearInterval(sid);
		frameNum = 0;
		myCavans.width = 1024;
	    myCavans.height = 768;
	}
}

//每隔100ms执行一次操作
function startDraw() {
		clearInterval(sid);
		sid = setInterval("drawCaughtAni()", 100);
}
