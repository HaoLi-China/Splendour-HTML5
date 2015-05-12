var video;
var canvas;
var ctx;
var canvas0;
var ctx0;

var sign = 0;// 标记位

/*
 * 在捕蝶时两个手指的状态，‘-2’只识别出食指色块，‘-1’只识别出拇指色块，‘0’都未识别，
 * ‘1’状态连个手指张开，‘2’状态抓取动作，同时必须从‘1’到‘2’才识别为抓取
 */
var status = 0;

// 用户捕蝶的响应坐标的位置
var xpoint = -1;
var ypoint = -1;

// 下面是两色块现在计算得到的坐标和上次计算的坐标
var r_xpoint = -1;
var r_ypoint = -1;

// 上次坐标
var rp_xpoint = -1;
var rp_ypoint = -1;
var b_xpoint = -1;
var b_ypoint = -1;

// 上次坐标
var bp_xpoint = -1;
var bp_ypoint = -1;

var xL = 0;
var yL = 0;

// 食指色块颜色范围
var forefingerHmin = 0;
var forefingerSmin = 0;
var forefingerVmin = 0;
var forefingerHmax = 0;
var forefingerSmax = 0;
var forefingerVmax = 0;

// 拇指色块颜色范围
var thumbSmin = 0;
var thumbVmin = 0;
var thumbHmax = 0;
var thumbSmax = 0;
var thumbVmax = 0;

// 视频宽度和高度常量
var XDIVISOR = 0;
var YDIVISOR = 0;

// 计数
var stateCount1 = 0;
var positionCount1 = 0;
var positionCount2 = 0;
var positionCount3 = 0;
var positionCount4 = 0;
var positionCount5 = 0;
var positionCount6 = 0;

// 食指横坐标初值及当前值
var initialX = 0;
var forefingerX = 0;
// 食指纵坐标初值及当前值
var initialY = 0;
var forefingerY = 0;

// 等待图标
var waiting0 = new Image();// 等待0
var waiting1 = new Image();// 等待1
var waiting2 = new Image();// 等待2
var waiting3 = new Image();// 等待3
var waiting4 = new Image();// 等待4
var waiting5 = new Image();// 等待5
var waiting6 = new Image();// 等待6
var waiting7 = new Image();// 等待7
var waiting8 = new Image();// 等待8
var waiting9 = new Image();// 等待9
var waiting10 = new Image();// 等待10
var waiting11 = new Image();// 等待11
var waiting12 = new Image();// 等待12
var waiting13 = new Image();// 等待13
var waiting14 = new Image();// 等待14
var waiting15 = new Image();// 等待15
waiting0.src ="images/publicImage/wait1.png";
waiting1.src ="images/publicImage/wait2.png";
waiting2.src ="images/publicImage/wait3.png";
waiting3.src ="images/publicImage/wait4.png";
waiting4.src ="images/publicImage/wait3.png";
waiting5.src ="images/publicImage/wait2.png";
waiting6.src ="images/publicImage/wait1.png";
waiting7.src ="images/publicImage/wait1.png";
waiting8.src ="images/publicImage/wait2.png";
waiting9.src ="images/publicImage/wait3.png";
waiting10.src ="images/publicImage/wait4.png";
waiting11.src ="images/publicImage/wait3.png";
waiting12.src ="images/publicImage/wait2.png";
waiting13.src ="images/publicImage/wait1.png";
waiting14.src ="images/publicImage/wait1.png";
waiting15.src ="images/publicImage/wait2.png";

//是否支持webkitGetUserMedia
var  is_webkit = false;

if (navigator.getUserMedia || navigator.webkitGetUserMedia) {
	function init() {
		video = document.getElementById('monitor');
		canvas = document.getElementById('photo');
		if(navigator.getUserMedia){
			navigator.getUserMedia({video:true}, gotStream, noStream);
			is_webkit=false;
		}
		else if(navigator.webkitGetUserMedia){
			try{
				navigator.webkitGetUserMedia('video', gotStream, noStream);
			}
			catch(exception){
				navigator.webkitGetUserMedia({video:true}, gotStream, noStream);
			}
			
			is_webkit=true;
		}
		ctx = canvas.getContext('2d');
		canvas0 = document.getElementById('mycanvas');
		ctx0 = canvas0.getContext('2d');
	}

	// 获得视频流
	function gotStream(stream) {
		if (!is_webkit) {
            video.src = stream;
        }
        else {
            video.src = webkitURL.createObjectURL(stream);
        }
		video.onerror = function() {
			stream.stop();
			streamError();
		};
	}

	//无视频流
	function noStream() {
		document.getElementById('errorMessage').textContent = 'No camera available.';
	}

	//视频流错误
	function streamError() {
		document.getElementById('errorMessage').textContent = 'Camera error.';
	}

	// RGB to HSV
	function setRGBToHSV(r1, r2, r3) {
		var maxJ = Math.max(r1, r2, r3);
		var minJ = Math.min(r1, r2, r3);
		var _max = maxJ - minJ;
		if (r1 == r2 && r2 == r3) {
			h = 0;
			s = 0;
		} else {
			switch (maxJ) {
			case r1:
				h = (r2 - r3) / _max;
				break;
			case r2:
				h = 2 + (r3 - r1) / _max;
				break;
			case r3:
				h = 4 + (r1 - r2) / _max;
				break;
			}
			h *= 60;
			if (h < 0)
				h += 360;
			h = Math.round(h);
			s = Math.round(100 * (maxJ - minJ) / maxJ);
		}
		v = Math.round(100 * maxJ / 255);
	}

	// 画等待图标
	function drawWaitImage(num) {
		switch (num) {
		case 0:
			ctx0.drawImage(waiting0, forefingerX, forefingerY);
			break;
		case 1:
			ctx0.drawImage(waiting1, forefingerX, forefingerY);
			break;
		case 2:
			ctx0.drawImage(waiting2, forefingerX, forefingerY);
			break;
		case 3:
			ctx0.drawImage(waiting3, forefingerX, forefingerY);
			break;
		case 4:
			ctx0.drawImage(waiting4, forefingerX, forefingerY);
			break;
		case 5:
			ctx0.drawImage(waiting5, forefingerX, forefingerY);
			break;
		case 6:
			ctx0.drawImage(waiting6, forefingerX, forefingerY);
			break;
		case 7:
			ctx0.drawImage(waiting7, forefingerX, forefingerY);
			break;
		case 8:
			ctx0.drawImage(waiting8, forefingerX, forefingerY);
			break;
		case 9:
			ctx0.drawImage(waiting9, forefingerX, forefingerY);
			break;
		case 10:
			ctx0.drawImage(waiting10, forefingerX, forefingerY);
			break;
		case 11:
			ctx0.drawImage(waiting11, forefingerX, forefingerY);
			break;
		case 12:
			ctx0.drawImage(waiting12, forefingerX, forefingerY);
			break;
		case 13:
			ctx0.drawImage(waiting13, forefingerX, forefingerY);
			break;
		case 14:
			ctx0.drawImage(waiting14, forefingerX, forefingerY);
			break;
		case 15:
			ctx0.drawImage(waiting15, forefingerX, forefingerY);
			break;
		}
	}

	// 色块取值范围
	function countRange() {
		forefingerHmin = parseInt(getCookie("forefingerHmin")) - 5;
		forefingerSmin = parseInt(getCookie("forefingerSmin")) - 10;
		forefingerVmin = parseInt(getCookie("forefingerVmin")) - 10;
		forefingerHmax = parseInt(getCookie("forefingerHmax")) + 5;
		forefingerSmax = parseInt(getCookie("forefingerSmax")) + 10;
		forefingerVmax = parseInt(getCookie("forefingerVmax")) + 10;

		thumbHmin = parseInt(getCookie("thumbHmin")) - 5;
		thumbSmin = parseInt(getCookie("thumbSmin")) - 10;
		thumbVmin = parseInt(getCookie("thumbVmin")) - 10;
		thumbHmax = parseInt(getCookie("thumbHmax")) + 5;
		thumbSmax = parseInt(getCookie("thumbSmax")) + 10;
		thumbVmax = parseInt(getCookie("thumbVmax")) + 10;
	}

	// 食指手势识别
	function forefingerReco() {
		if (status == -2) {
			stateCount1++;
			canvas0.width = 1024;
			canvas0.height = 768;
			forefingerX = (r_xpoint / canvas.width) * XDIVISOR;
			forefingerY = (r_ypoint / canvas.height) * YDIVISOR;
			if (forefingerX > 163 && forefingerX < 243 && forefingerY > 590
					&& forefingerY < 670) {
				positionCount1++;
				if(positionCount1==1){
				mouseoverShop();
				}
				drawWaitImage(positionCount1 - 1);
			} else {
				positionCount1 = 0;
				mouseoutShop();
			}
			if (forefingerX > 253 && forefingerX < 333 && forefingerY > 582
					&& forefingerY < 662) {
				positionCount2++;
				if(positionCount2==1){
				mouseoverRemovebee();
				}
				drawWaitImage(positionCount2 - 1);
			} else {
				positionCount2 = 0;
				mouseoutRemovebee()
			}
			if (forefingerX > 355 && forefingerX < 435 && forefingerY > 580
					&& forefingerY < 660) {
				positionCount3++;
				if(positionCount3==1){
				mouseoverButterflygod();
				}
				drawWaitImage(positionCount3 - 1);
			} else {
				positionCount3 = 0;
				mouseoutButterflygod();
			}
			if (forefingerX > 587 && forefingerX < 667 && forefingerY > 588
					&& forefingerY < 668) {
				positionCount4++;
				if(positionCount4==1){
				mouseoverNet();
				}
				drawWaitImage(positionCount4 - 1);
			} else {
				positionCount4 = 0;
				mouseoutNet();
			}
			if (forefingerX > 677 && forefingerX < 737 && forefingerY > 575
					&& forefingerY < 655) {
				positionCount5++;
				if(positionCount5==1){
				mouseoverClock();
				}
				drawWaitImage(positionCount5 - 1);
			} else {
				positionCount5 = 0;
				mouseoutClock();
			}
			if (forefingerX > 767 && forefingerX < 827 && forefingerY > 580
					&& forefingerY < 660) {
				positionCount6++;
				if(positionCount6==1){
				mouseoverLure();
				}
				drawWaitImage(positionCount6 - 1);
			} else {
				positionCount6 = 0;
				mouseoutLure();
			}
			if (positionCount1 > 15) {
				fadeInshop(10);
				positionCount1 = 0;
			}
			if (positionCount2 > 15) {
				popoutremovebee();
				positionCount2 = 0;
			}
			if (positionCount3 > 15) {
				popoutbutterflygod();
				positionCount3 = 0;
			}
			if (positionCount4 > 15) {
				popoutnet();
				positionCount4 = 0;
			}
			if (positionCount5 > 15) {
				popoutclock();
				positionCount5 = 0;
			}
			if (positionCount6 > 15) {
				popoutlure();
				positionCount6 = 0;
			}
		} else {
			stateCount1 = 0;
			forefingerX = 0;
		}
		if (stateCount1 == 1) {
			initialX = forefingerX;
			initialY = forefingerY;
		}
		if (stateCount1 > 0 && forefingerX - initialX > 600
				&& forefingerY < 500 && initialY < 500) {
			fadeOutFaceOne();
		}
		if (stateCount1 > 0 && initialX - forefingerX > 600
				&& forefingerY < 500 && initialY < 500) {
			window.location = "sceneView.html";
		}
	}

	// 色块识别
	function recognize() {

		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		ctx.drawImage(video, 0, 0);

		var imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height);

		if (sign == 0) {
			sign = 1;
			XDIVISOR = 1024;
			YDIVISOR = parseInt((canvas.height / canvas.width) * XDIVISOR);
		}

		// 对上次坐标进行赋值
		rp_xpoint = r_xpoint;
		rp_ypoint = r_ypoint;
		bp_xpoint = b_xpoint;
		bp_ypoint = b_ypoint;

		// 本次坐标还原
		r_xpoint = -1;
		r_ypoint = -1;
		b_xpoint = -1;
		b_ypoint = -1;

		// 食指色块像素点的储存数组
		var r_xarr = new Array();
		var r_yarr = new Array();

		// 拇指色块像素点的储存数组
		var b_xarr = new Array();
		var b_yarr = new Array();

		if (status == -2 || status == -1 || status == 0) {
			// 上次未识别到，进行全部像素点的扫描
			for ( var x = 0; x < canvas.width; x++) {
				for ( var y = 0; y < canvas.height; y++) {

					var redValueForPixel = (y * (canvas.width * 4)) + (x * 4);
					var greenValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 1;
					var blueValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 2;

					var r = imgdata.data[redValueForPixel];
					var g = imgdata.data[greenValueForPixel];
					var b = imgdata.data[blueValueForPixel];

					// HSV测试
					setRGBToHSV(r, g, b);
					if (h < forefingerHmax && h > forefingerHmin
							&& s > forefingerSmin && s < forefingerSmax
							&& v > forefingerVmin && v < forefingerVmax) {// 食指色块的测试
						r_xarr.push(x);
						r_yarr.push(y);
					}
					if (h < thumbHmax && h > thumbHmin && s > thumbSmin
							&& s < thumbSmax && v > thumbVmin && v < thumbVmax) {// 拇指色块的测试
						b_xarr.push(x);
						b_yarr.push(y);
					}
				}
			}
		}

		else {
			// 否则在上次记录的色块中心点坐标周围进行扫描
			// 食指色块识别
			for ( var x = rp_xpoint - 25; x < rp_xpoint + 25; x++) {
				for ( var y = rp_ypoint - 25; y < rp_ypoint + 25; y++) {
					var redValueForPixel = (y * (canvas.width * 4)) + (x * 4);
					var greenValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 1;
					var blueValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 2;
					var r = imgdata.data[redValueForPixel];
					var g = imgdata.data[greenValueForPixel];
					var b = imgdata.data[blueValueForPixel];

					// HSV测试
					setRGBToHSV(r, g, b);

					if (h < forefingerHmax && h > forefingerHmin
							&& s > forefingerSmin && s < forefingerSmax
							&& v > forefingerVmin && v < forefingerVmax) {// 食指色块的测试
						r_xarr.push(x);
						r_yarr.push(y);
					}
				}
			}
			// 拇指色块识别
			for ( var x = bp_xpoint - 25; x < bp_xpoint + 25; x++) {
				for ( var y = bp_ypoint - 25; y < bp_ypoint + 25; y++) {
					var redValueForPixel = (y * (canvas.width * 4)) + (x * 4);
					var greenValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 1;
					var blueValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 2;

					var r = imgdata.data[redValueForPixel];
					var g = imgdata.data[greenValueForPixel];
					var b = imgdata.data[blueValueForPixel];

					// HSV测试
					setRGBToHSV(r, g, b);
					if (h < thumbHmax && h > thumbHmin && s > thumbSmin
							&& s < thumbSmax && v > thumbVmin && v < thumbVmax) {// 拇指色块的测试
						b_xarr.push(x);
						b_yarr.push(y);
					}
				}
			}
		}

		// 食指色块像素点的个数
		var r_d_length = r_xarr.length;
		var r_xadd = 0;
		var r_yadd = 0;
		// 像素点的个数，少于某个值，提示未找到控制器，大于则提示控制器距离太近，无法准确定位
		if (r_d_length > 3 && r_d_length < 10000) {
			for ( var x = 0; x < r_xarr.length; x++) {
				r_xadd = r_xadd + r_xarr[x];
			}
			r_xpoint = parseInt(r_xadd / r_xarr.length);
			for ( var y = 0; y < r_yarr.length; y++) {
				r_yadd = r_yadd + r_yarr[y];
			}
			r_ypoint = parseInt(r_yadd / r_yarr.length);
		}

		// 拇指色块像素点的个数
		var b_d_length = b_xarr.length;
		var b_xadd = 0;
		var b_yadd = 0;

		// 像素点的个数，少于某个值，提示未找到控制器，大于则提示控制器距离太近，无法准确定位
		if (b_d_length > 3 && b_d_length < 10000) {
			for ( var x = 0; x < b_xarr.length; x++) {
				b_xadd = b_xadd + b_xarr[x];
			}
			b_xpoint = parseInt(b_xadd / b_xarr.length);
			for ( var y = 0; y < b_yarr.length; y++) {
				b_yadd = b_yadd + b_yarr[y];
			}
			b_ypoint = parseInt(b_yadd / b_yarr.length);
		}

		// 对两点坐标进行对比，判断现在手的状态
		if ((r_xpoint == -1 || r_ypoint == -1)
				&& (b_xpoint != -1 && b_ypoint != -1)) { // 只识别出拇指色块
			status = -1;
		} else if ((r_xpoint != -1 && r_ypoint != -1)
				&& (b_xpoint == -1 || b_ypoint == -1)) {// 只识别出食指色块
			status = -2;
		} else if ((r_xpoint == -1 || r_ypoint == -1)
				&& (b_xpoint == -1 || b_ypoint == -1)) {// 两个手指的色块皆未识别出来
			status = 0;
		} else if (Math.abs(r_xpoint - b_xpoint) > 30
				|| Math.abs(r_ypoint - b_ypoint) > 30) { // 两色块像素距离太大，手指伸开的动作
			status = 1;
		} else { // 否则两色块距离在一定范围内，用户抓取
			if (status == 1) {
				status = 2;
				// 得到用户抓蝴蝶的响应点坐标
				xpoint = parseInt((r_xpoint + b_xpoint) / 2);
				ypoint = parseInt((r_ypoint + b_ypoint) / 2);
				xL = (xpoint / canvas.width) * XDIVISOR;
				yL = (ypoint / canvas.height) * YDIVISOR;

				caughtState = 0;// 在butterfly.js中用到

				if(playAllow){
				playCaughtSound();	
				startDraw(3);
				game.player.fire( {
					x : xL,
					y : yL
				});
				}
			}
		}
		forefingerReco();
	}

	init();
	countRange();

	// 父线程调用子线程的部分，时刻进行响应

	var worker = new Worker('js/utilitiesJs/shoot.js');
	worker.postMessage(0);

	worker.onmessage = function(event) {
		recognize();
	};
} else {
	document.getElementById('errorMessage').textContent = 'No native camera support available.';
}