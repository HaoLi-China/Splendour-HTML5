var video;
var photoCanvas;
var photoCtx;

var sign = 0;//标记位

//在捕蝶时两个手指的状态，‘-2’只识别出黄色，‘-1’只识别出红色，‘0’都未识别，‘1’状态连个手指张开，‘2’状态抓取动作，同时必须从‘1’到‘2’才识别为抓取
var status = 0;
//用户捕蝶的响应坐标的位置
var xpoint = -1;
var ypoint = -1;
//下面是两色块现在计算得到的坐标和上次计算的坐标
var r_xpoint = -1;
var r_ypoint = -1;
//上次坐标
var rp_xpoint = -1;
var rp_ypoint = -1;
var b_xpoint = -1;
var b_ypoint = -1;
//上次坐标
var bp_xpoint = -1;
var bp_ypoint = -1;

//手指在屏幕上的坐标
var xL = 0;
var yL = 0;

//食指色块颜色范围
var forefingerHmin = 0;
var forefingerSmin = 0;
var forefingerVmin = 0;
var forefingerHmax = 0;
var forefingerSmax = 0;
var forefingerVmax = 0;

//拇指色块颜色范围
var thumbSmin = 0;
var thumbVmin = 0;
var thumbHmax = 0;
var thumbSmax = 0;
var thumbVmax = 0;

var XDIVISOR = 0;
var YDIVISOR = 0;

//是否支持webkitGetUserMedia
var is_webkit = false;

if (navigator.getUserMedia || navigator.webkitGetUserMedia) {
	function init() {
		video = document.getElementById('monitor');
		photoCanvas = document.getElementById('photo');
		if (navigator.getUserMedia) {
			navigator.getUserMedia( {
				video : true
			}, gotStream, noStream);
			is_webkit = false;
		} else if (navigator.webkitGetUserMedia) {
			try {
				navigator.webkitGetUserMedia('video', gotStream, noStream);
			} catch (exception) {
				navigator.webkitGetUserMedia( {
					video : true
				}, gotStream, noStream);
			}

			is_webkit = true;
		}
		photoCtx = photoCanvas.getContext('2d');
	}

	// 获得视频流
	function gotStream(stream) {
		if (!is_webkit) {
			video.src = stream;
		} else {
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

	//RGB to HSV
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
	//计算色块颜色范围	
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

	//色块及手势识别
	function recognize() {

		photoCanvas.width = video.videoWidth;
		photoCanvas.height = video.videoHeight;
		photoCtx.drawImage(video, 0, 0);
		var imgdata = photoCtx.getImageData(0, 0, photoCanvas.width,
				photoCanvas.height);

		if (sign == 0) {
			sign = 1;
			XDIVISOR = 1024;
			YDIVISOR = parseInt((photoCanvas.height / photoCanvas.width)
					* XDIVISOR);
		}

		//对上次坐标进行赋值
		rp_xpoint = r_xpoint;
		rp_ypoint = r_ypoint;
		bp_xpoint = b_xpoint;
		bp_ypoint = b_ypoint;
		//本次坐标还原
		r_xpoint = -1;
		r_ypoint = -1;
		b_xpoint = -1;
		b_ypoint = -1;

		//红色像素点的储存数组
		var r_xarr = new Array();
		var r_yarr = new Array();
		//黄色像素点的储存数组
		var b_xarr = new Array();
		var b_yarr = new Array();

		if (status == -2 || status == -1 || status == 0) {
			//上次未识别到，进行全部像素点的扫描
			for ( var x = 0; x < photoCanvas.width; x++) {
				for ( var y = 0; y < photoCanvas.height; y++) {

					var redValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4);
					var greenValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4) + 1;
					var blueValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4) + 2;

					var r = imgdata.data[redValueForPixel];
					var g = imgdata.data[greenValueForPixel];
					var b = imgdata.data[blueValueForPixel];

					//HSV测试
					setRGBToHSV(r, g, b);
					if (h < forefingerHmax && h > forefingerHmin
							&& s > forefingerSmin && s < forefingerSmax
							&& v > forefingerVmin && v < forefingerVmax) {//食指色块的测试
						r_xarr.push(x);
						r_yarr.push(y);
					}
					if (h < thumbHmax && h > thumbHmin && s > thumbSmin
							&& s < thumbSmax && v > thumbVmin && v < thumbVmax) {//拇指色块的测试
						b_xarr.push(x);
						b_yarr.push(y);
					}
				}
			}
		}

		else {
			//否则在上次记录的色块中心点坐标周围进行扫描  
			//红色识别
			for ( var x = rp_xpoint - 25; x < rp_xpoint + 25; x++) {
				for ( var y = rp_ypoint - 25; y < rp_ypoint + 25; y++) {
					var redValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4);
					var greenValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4) + 1;
					var blueValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4) + 2;
					var r = imgdata.data[redValueForPixel];
					var g = imgdata.data[greenValueForPixel];
					var b = imgdata.data[blueValueForPixel];

					//HSV测试
					setRGBToHSV(r, g, b);

					if (h < forefingerHmax && h > forefingerHmin
							&& s > forefingerSmin && s < forefingerSmax
							&& v > forefingerVmin && v < forefingerVmax) {//食指色块的测试
						r_xarr.push(x);
						r_yarr.push(y);
					}
				}
			}
			//黄色识别
			for ( var x = bp_xpoint - 25; x < bp_xpoint + 25; x++) {
				for ( var y = bp_ypoint - 25; y < bp_ypoint + 25; y++) {
					var redValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4);
					var greenValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4) + 1;
					var blueValueForPixel = (y * (photoCanvas.width * 4))
							+ (x * 4) + 2;

					var r = imgdata.data[redValueForPixel];
					var g = imgdata.data[greenValueForPixel];
					var b = imgdata.data[blueValueForPixel];

					//HSV测试
					setRGBToHSV(r, g, b);
					if (h < thumbHmax && h > thumbHmin && s > thumbSmin
							&& s < thumbSmax && v > thumbVmin && v < thumbVmax) {//拇指色块的测试
						b_xarr.push(x);
						b_yarr.push(y);
					}
				}
			}
		}

		//红色像素点的个数
		var r_d_length = r_xarr.length;
		var r_xadd = 0;
		var r_yadd = 0;
		//像素点的个数，少于某个值，提示未找到控制器，大于则提示控制器距离太近，无法准确定位
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

		//黄色色像素点的个数
		var b_d_length = b_xarr.length;
		var b_xadd = 0;
		var b_yadd = 0;

		//像素点的个数，少于某个值，提示未找到控制器，大于则提示控制器距离太近，无法准确定位
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

		//对两点坐标进行对比，判断现在手的状态
		if ((r_xpoint == -1 || r_ypoint == -1)
				&& (b_xpoint != -1 && b_ypoint != -1)) { //有色块未识别出来，手势未识别，状态还不是
			status = -1;
		} else if ((r_xpoint != -1 && r_ypoint != -1)
				&& (b_xpoint == -1 || b_ypoint == -1)) {
			status = -2;
		} else if ((r_xpoint == -1 || r_ypoint == -1)
				&& (b_xpoint == -1 || b_ypoint == -1)) {
			status = 0;
		} else if (Math.abs(r_xpoint - b_xpoint) > 30
				|| Math.abs(r_ypoint - b_ypoint) > 30) { //两色块像素距离太大，手指伸开的动作
			status = 1;
		} else { //否则两色块距离在一定范围内，用户抓取
			if (status == 1) {
				status = 2;
				//得到用户抓蝴蝶的响应点坐标
				xpoint = parseInt((r_xpoint + b_xpoint) / 2);
				ypoint = parseInt((r_ypoint + b_ypoint) / 2);
				xL = (xpoint / photoCanvas.width) * XDIVISOR;
				yL = (ypoint / photoCanvas.height) * YDIVISOR;
				//抓蝴蝶
				playCaughtSound();	
				startDraw(4);
				catchButter(xL, yL);
				if (isOnline) {
					sendMyMessage();
				}
			}
		}
	}
	init();
	countRange();

	//父线程调用子线程的部分，时刻进行响应

	var shoot = new Worker('js/utilitiesJs/shoot.js');
	shoot.postMessage(0);

	shoot.onmessage = function(event) {
		if (flag) {
			recognize();
		}
	};
} else {
	document.getElementById('errorMessage').textContent = 'No native camera support available.';
}