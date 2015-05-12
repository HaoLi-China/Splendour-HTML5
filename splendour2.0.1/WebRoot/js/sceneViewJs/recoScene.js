var video;
var canvas;//画布一
var canvas1;//画布二

//画布二的宽度和高度
var canvas1Width = 1366;
var canvas1Height = 768;

var ctx;
var ctx1;

//计数
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;

var fingerImg = new Image();//指标图   
fingerImg.src = "images/publicImage/wait1.png";//指标

//指标图片的大小
var imageWidth = 50;
var imageHeight = 50;

//色块在视频中的坐标
var xpoint = 0;
var ypoint = 0;

//标志位（0表示从未识别到识别，1表示识别过程中）
var flag = 0;

//标志位（判断小手是否还在相应的场景地图上）
var sign1 = 0;
var sign2 = 0;
var sign3 = 0;
var sign4 = 0;
var sign5 = 0;
var sign6 = 0;

//小手的坐标
var xL = 0;
var yL = 0;

//食指色块取色范围
var forefingerHmin = 0;
var forefingerSmin = 0;
var forefingerVmin = 0;
var forefingerHmax = 0;
var forefingerSmax = 0;
var forefingerVmax = 0;

//等待图标
var waiting0 = new Image();//等待0 
var waiting1 = new Image();//等待1
var waiting2 = new Image();//等待2
var waiting3 = new Image();//等待3
var waiting4 = new Image();//等待4
var waiting5 = new Image();//等待5
var waiting6 = new Image();//等待6
var waiting7 = new Image();//等待7
var waiting8 = new Image();//等待8
var waiting9 = new Image();//等待9
var waiting10 = new Image();//等待10
var waiting11 = new Image();//等待11
var waiting12 = new Image();//等待12
var waiting13 = new Image();//等待13
var waiting14 = new Image();//等待14
var waiting15 = new Image();//等待15
waiting0.src = "images/publicImage/wait1.png";
waiting1.src = "images/publicImage/wait2.png";
waiting2.src = "images/publicImage/wait3.png";
waiting3.src = "images/publicImage/wait4.png";
waiting4.src = "images/publicImage/wait3.png";
waiting5.src = "images/publicImage/wait2.png";
waiting6.src = "images/publicImage/wait1.png";
waiting7.src = "images/publicImage/wait1.png";
waiting8.src = "images/publicImage/wait2.png";
waiting9.src = "images/publicImage/wait3.png";
waiting10.src = "images/publicImage/wait4.png";
waiting11.src = "images/publicImage/wait3.png";
waiting12.src = "images/publicImage/wait2.png";
waiting13.src = "images/publicImage/wait1.png";
waiting14.src = "images/publicImage/wait1.png";
waiting15.src = "images/publicImage/wait2.png";

//是否支持webkitGetUserMedia
var is_webkit = false;

if (navigator.getUserMedia || navigator.webkitGetUserMedia) {

	//初始化
	function init() {
		video = document.getElementById('monitor');
		canvas = document.getElementById('photo');
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
		ctx = canvas.getContext('2d');
		canvas1 = document.getElementById('canvas1');
		ctx1 = canvas1.getContext('2d');
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

	//计算颜色范围
	function countRange() {
		forefingerHmin = parseInt(getCookie("forefingerHmin")) - 5;
		forefingerSmin = parseInt(getCookie("forefingerSmin")) - 10;
		forefingerVmin = parseInt(getCookie("forefingerVmin")) - 10;
		forefingerHmax = parseInt(getCookie("forefingerHmax")) + 5;
		forefingerSmax = parseInt(getCookie("forefingerSmax")) + 10;
		forefingerVmax = parseInt(getCookie("forefingerVmax")) + 10;
	}

	//画等待图标
	function drawWaitImage(num) {
		switch (num) {
		case 0:
			ctx1.drawImage(waiting0, xL, yL);
			break;
		case 1:
			ctx1.drawImage(waiting1, xL, yL);
			break;
		case 2:
			ctx1.drawImage(waiting2, xL, yL);
			break;
		case 3:
			ctx1.drawImage(waiting3, xL, yL);
			break;
		case 4:
			ctx1.drawImage(waiting4, xL, yL);
			break;
		case 5:
			ctx1.drawImage(waiting5, xL, yL);
			break;
		case 6:
			ctx1.drawImage(waiting6, xL, yL);
			break;
		case 7:
			ctx1.drawImage(waiting7, xL, yL);
			break;
		case 8:
			ctx1.drawImage(waiting8, xL, yL);
			break;
		case 9:
			ctx1.drawImage(waiting9, xL, yL);
			break;
		case 10:
			ctx1.drawImage(waiting10, xL, yL);
			break;
		case 11:
			ctx1.drawImage(waiting11, xL, yL);
			break;
		case 12:
			ctx1.drawImage(waiting12, xL, yL);
			break;
		case 13:
			ctx1.drawImage(waiting13, xL, yL);
			break;
		case 14:
			ctx1.drawImage(waiting14, xL, yL);
			break;
		case 15:
			ctx1.drawImage(waiting15, xL, yL);
			break;
		}
	}

	//画手指图片
	function drawFingerImg() {
		if (xpoint != 0 && ypoint != 0) {
			//绘制手指
			ctx1.drawImage(fingerImg, xL, yL);
		}
	}

	//识别
	function recognize() {
		var xadd = 0;
		var yadd = 0;
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;

		ctx.drawImage(video, 0, 0);
		var imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height);

		var xarr = new Array();
		var yarr = new Array();

		if (flag == 0) {
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

					setRGBToHSV(r, g, b);

					if (h < forefingerHmax && h > forefingerHmin
							&& s > forefingerSmin && s < forefingerSmax
							&& v > forefingerVmin && v < forefingerVmax) {
						xarr.push(x);
						yarr.push(y);
					}

				}
			}
		} else {
			for ( var x = xpoint - 50; x < xpoint + 50; x++) {
				for ( var y = ypoint - 50; y < ypoint + 50; y++) {
					if (x >= 0 && y >= 0) {
						var redValueForPixel = (y * (canvas.width * 4))
								+ (x * 4);
						var greenValueForPixel = (y * (canvas.width * 4))
								+ (x * 4) + 1;
						var blueValueForPixel = (y * (canvas.width * 4))
								+ (x * 4) + 2;

						var r = imgdata.data[redValueForPixel];
						var g = imgdata.data[greenValueForPixel];
						var b = imgdata.data[blueValueForPixel];

						setRGBToHSV(r, g, b);

						if (h < forefingerHmax && h > forefingerHmin
								&& s > forefingerSmin && s < forefingerSmax
								&& v > forefingerVmin && v < forefingerVmax) {
							xarr.push(x);
							yarr.push(y);
						}
					}
				}
			}
		}

		for ( var x = 0; x < xarr.length; x++) {
			xadd = xadd + xarr[x];
		}

		if (xarr.length > 3) {
			xpoint = parseInt(xadd / xarr.length);
		}

		for ( var y = 0; y < yarr.length; y++) {
			yadd = yadd + yarr[y];
		}

		if (yarr.length > 3) {
			ypoint = parseInt(yadd / yarr.length);
			flag = 1;
		} else {
			xpoint = 0;
			ypoint = 0;
			flag = 0;
		}

		//计算坐标值
		xL = (xpoint / canvas.width) * canvas1Width - imageWidth / 2;
		yL = (ypoint / canvas.height) * canvas1Height - imageHeight / 2;

		canvas1.width = canvas1Width;
		canvas1.height = canvas1Height;

		if (xL < 410 && xL > 163 && yL < 467 && yL > 227) {
			count1++;
			if(count1==1){
			mouseoverNA();
			}
			sign1 = 1;
			drawWaitImage(count1 - 1);
		} else {
			count1 = 0;
			if (xL < 504 && xL > 312 && yL < 619 && yL > 423) {
				count2++;
				if(count2==1){
				mouseoverSA();
				}
				sign2 = 1;
				drawWaitImage(count2 - 1);
			} else {
				count2 = 0;
				if (xL < 803 && xL > 598 && yL < 625 && yL > 349) {
					count3++;
					if(count3==1){
					mouseoverAF();
					}
					sign3 = 1;
					drawWaitImage(count3 - 1);
				} else {
					count3 = 0;
					if (xL < 807 && xL > 560 && yL < 342 && yL > 114) {
						count4++;
						if(count4==1){
						mouseoverEU();
						}
						sign4 = 1;
						drawWaitImage(count4 - 1);
					} else {
						count4 = 0;
						if (xL < 1113 && xL > 866 && yL < 445 && yL > 212) {
							count5++;
							if(count5==1){
								mouseoverCH();	
							}
							sign5 = 1;
							drawWaitImage(count5 - 1);
						} else {
							count5 = 0;
							if (xL < 1137 && xL > 989 && yL < 600 && yL > 490) {
								count6++;
								if(count6==1){
								mouseoverAU();
								}
								sign6 = 1;
								drawWaitImage(count6 - 1);
							} else {
								count6 = 0;
								drawFingerImg();
							}
						}
					}
				}
			}
		}
		if (count1 > 15) {
			chooseNA();
		}
		if (count2 > 15) {
			chooseSA();
		}
		if (count3 > 15) {
			chooseAF();
		}
		if (count4 > 15) {
			chooseEU();
		}
		if (count5 > 15) {
			chooseCH();
		}
		if (count6 > 15) {
			chooseAU();
		}
		if (count1 == 0 && sign1 == 1) {
			mouseoutNA();
			sign1 = 0;
		}
		if (count2 == 0 && sign2 == 1) {
			mouseoutSA();
			sign2 = 0;
		}
		if (count3 == 0 && sign3 == 1) {
			mouseoutAF();
			sign3 = 0;
		}
		if (count4 == 0 && sign4 == 1) {
			mouseoutEU();
			sign4 = 0;
		}
		if (count5 == 0 && sign5 == 1) {
			mouseoutCH();
			sign5 = 0;
		}
		if (count6 == 0 && sign6 == 1) {
			mouseoutAU();
			sign6 = 0;
		}
	}

	init();
	countRange();

	//worker线程
	var worker = new Worker('js/utilitiesJs/shoot.js');
	worker.postMessage(12);

	worker.onmessage = function(event) {
		recognize();
	};
} else {
	document.getElementById('errorMessage').textContent = 'No native camera support available.';
}
