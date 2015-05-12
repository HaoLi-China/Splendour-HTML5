var video;
var canvas;
var canvas0;
var ctx;
var ctx0;
var count1 = 0;// 计数
var count2 = 0;// 计数

var sign = 0;// 标记位

// 颜色校验后的识别范围
var hmax = 0;
var hmin = 0;
var smax = 0;
var smin = 0;
var vmax = 0;
var vmin = 0;

// 规定的识别范围
var hhmax = 360;
var ssmax = 100;
var vvmax = 100;
var hhmin = 0;
var ssmin = 50;
var vvmin = 50;

var havg1 = new Array();// 盛放h的平均值(左-右)
var savg1 = new Array();// 盛放s的平均值(左-右)
var vavg1 = new Array();// 盛放v的平均值(左-右)

var havg2 = new Array();// 盛放h的平均值(上-下)
var savg2 = new Array();// 盛放s的平均值(上-下)
var vavg2 = new Array();// 盛放v的平均值(上-下)

var havg = new Array();// 盛放h的平均值
var savg = new Array();// 盛放s的平均值
var vavg = new Array();// 盛放v的平均值

// 识别状态（0表示还未识别，1表示识别过程中，2表示识别完成）
var state1 = 0;// （左-右）
var state2 = 0;// （上-下）

// 标志是否开始校验
var flag1 = 0;
var flag2 = 0;

// 校验区域的长度和宽度
var areaLength = 250;
var areaWidth = 60;

// 校验区域的位置
var coordinateX1 = 561 + areaWidth / 2 - 168;
var coordinateY1 = 207 + 125;
var coordinateX2 = 561 + 125 - 168;
var coordinateY2 = 207 + areaWidth / 2;

// 蝴蝶的位置
var xL1 = coordinateX1;
var yL1 = coordinateY1;
var xL2 = coordinateX2;
var yL2 = coordinateY2;

var XDIVISOR = 0;
var YDIVISOR = 0;

// 校验区域对应于相片画布中的位置
var coordX1 = 0;
var coordY1 = 0;
var coordX2 = 0;
var coordY2 = 0;

// 校验区域对应于相片画布中的长度和宽度
var areaLen = 0;
var areaWid = 0;

// 手指在相片画布中的位置
var xpoint1 = 0;
var ypoint1 = 0;
var xpoint2 = 0;
var ypoint2 = 0;

var butterflyImg = new Image();// 蝴蝶图
butterflyImg.src = "images/publicImage/wait1.png";// 蝴蝶

// 图片的宽和高
var imgWidth = 50;
var imgHeight = 50;

//是否支持webkitGetUserMedia
var  is_webkit = false;

if (navigator.getUserMedia || navigator.webkitGetUserMedia) {

	// 初始化视频和画布
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
		canvas0 = document.getElementById('canvid2');
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

	// 无视频流
	function noStream() {
		document.getElementById('errorMessage').textContent = 'No camera available.';
	}

	// 视频流错误
	function streamError() {
		document.getElementById('errorMessage').textContent = 'Camera error.';
	}

	// 将RGB值转为hsv值
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
	
	// 画蝴蝶
	function drawButterfly() {
		canvas0.width = 1366;
		canvas0.height = 768;
		ctx0.drawImage(butterflyImg, xL1 - imgWidth / 2 + 168, yL1 - imgHeight
				/ 2);
		ctx0.drawImage(butterflyImg, xL2 - imgWidth / 2 + 168, yL2 - imgHeight
				/ 2);
	}

	// 色块识别
	function recognize() {
		// 相应颜色的像素点的坐标的值
		var xadd1 = 0;
		var yadd1 = 0;
		var xadd2 = 0;
		var yadd2 = 0;

		// 盛放颜色数组的所有值的和(左-右)
		var hsum1 = 0;
		var ssum1 = 0;
		var vsum1 = 0;

		// 盛放颜色数组的所有值的和(上-下)
		var hsum2 = 0;
		var ssum2 = 0;
		var vsum2 = 0;

		// 用于区别红色的HSV值
		var redsum11 = 0;
		var redsum12 = 0;
		var redsum21 = 0;
		var redsum22 = 0;

		var xp1 = 0;
		var yp1 = 0;
		var xp2 = 0;
		var yp2 = 0;

		// 画布的宽度和高度
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		ctx.drawImage(video, 0, 0); // 将图像画到画布中
		var imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height);// 画布中的RGB矩阵

		if (sign == 0) {
			sign = 1;
			XDIVISOR = 1024;
			YDIVISOR = parseInt((canvas.height / canvas.width) * XDIVISOR);
			// 校验区域对应于相片画布中的位置
			coordX1 = (coordinateX1 / XDIVISOR) * canvas.width;
			coordY1 = (coordinateY1 / YDIVISOR) * canvas.height;
			coordX2 = (coordinateX2 / XDIVISOR) * canvas.width;
			coordY2 = (coordinateY2 / YDIVISOR) * canvas.height;

			// 校验区域对应于相片画布中的长度和宽度
			areaLen = (areaLength / XDIVISOR) * canvas.width;
			areaWid = (areaWidth / YDIVISOR) * canvas.width;
		}

		var xarr1 = new Array();// 盛放横坐标的值
		var yarr1 = new Array();// 盛放纵坐标的值
		var xarr2 = new Array();// 盛放横坐标的值
		var yarr2 = new Array();// 盛放纵坐标的值

		var harr1 = new Array();// 盛放h的值(左-右)
		var sarr1 = new Array();// 盛放s的值(左-右)
		var varr1 = new Array();// 盛放v的值(左-右)

		var harr2 = new Array();// 盛放h的值(上-下)
		var sarr2 = new Array();// 盛放s的值(上-下)
		var varr2 = new Array();// 盛放v的值(上-下)

		// (左-右)
		if ((xpoint1 > coordX1 && xpoint1 < coordX1 + areaLen - areaWid
				&& ypoint1 > coordY1 - areaWid / 2 && ypoint1 < coordY1
				+ areaWid / 2)
				|| flag1 == 1) {
			xp1 = xpoint1;
			yp1 = coordY1;
			state1 = 1;
			flag1 = 0;
		} else if (xpoint1 >= coordX1 + areaLen - areaWid
				&& ypoint1 > coordY1 - areaWid / 2
				&& ypoint1 < coordY1 + areaWid / 2) {
			xL1 = coordinateX1 + areaLength - areaWidth;
			yL1 = coordinateY1;
			state1 = 2;
		} else {
			xL1 = coordinateX1;
			yL1 = coordinateY1;
			xp1 = coordX1;
			yp1 = coordY1;
			state1 = 0;
			havg1 = []; // 赋值为一个空数组以达到清空原数组
			savg1 = []; // 赋值为一个空数组以达到清空原数组
			vavg1 = []; // 赋值为一个空数组以达到清空原数组
		}

		// (上-下)
		if ((ypoint2 > coordY2 && ypoint2 < coordY2 + areaLen - areaWid
				&& xpoint2 > coordX2 - areaWid / 2 && xpoint2 < coordX2
				+ areaWid / 2)
				|| flag2 == 1) {
			xp2 = coordX2;
			yp2 = ypoint2;
			state2 = 1;
			flag2 = 0;
		} else if (ypoint2 >= coordY2 + areaLen - areaWid
				&& xpoint2 > coordX2 - areaWid / 2
				&& xpoint2 < coordX2 + areaWid / 2) {
			xL2 = coordinateX2;
			yL2 = coordinateY2 + areaLength - areaWidth;
			state2 = 2;
		} else {
			xL2 = coordinateX2;
			yL2 = coordinateY2;
			xp2 = coordX2;
			yp2 = coordY2;
			state2 = 0;
			havg2 = []; // 赋值为一个空数组以达到清空原数组
			savg2 = []; // 赋值为一个空数组以达到清空原数组
			vavg2 = []; // 赋值为一个空数组以达到清空原数组
		}

		if (state1 != 2) {
			// 获取一定范围内的像素的hsv值(左-右)
			for ( var x = parseInt(xp1 - areaWid); x < parseInt(xp1 + areaWid); x++) {
				for ( var y = parseInt(yp1 - areaWid / 2); y < parseInt(yp1
						+ areaWid / 2); y++) {
					var redValueForPixel = (y * (canvas.width * 4)) + (x * 4);
					var greenValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 1;
					var blueValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 2;

					var r = imgdata.data[redValueForPixel];
					var g = imgdata.data[greenValueForPixel];
					var b = imgdata.data[blueValueForPixel];

					setRGBToHSV(r, g, b);

					if (h >= hhmin && h <= hhmax && s >= ssmin && s <= ssmax
							&& v >= vvmin && v <= vvmax) {
						// 将坐标值放入数组
						xarr1.push(x);
						yarr1.push(y);

						// 将hsv值放入数组
						harr1.push(h);
						sarr1.push(s);
						varr1.push(v);
					}
				}
			}

			// 计算坐标值
			for ( var x = 0; x < xarr1.length; x++) {
				xadd1 = xadd1 + xarr1[x];
			}

			if (xarr1.length > 80) {
				xpoint1 = parseInt(xadd1 / xarr1.length);
			}

			for ( var y = 0; y < yarr1.length; y++) {
				yadd1 = yadd1 + yarr1[y];
			}

			if (yarr1.length > 80) {
				ypoint1 = parseInt(yadd1 / yarr1.length);
			} else {
				xpoint1 = 0;
				ypoint1 = 0;
			}

			if (xpoint1 > coordX1 && xpoint1 < coordX1 + areaWid / 2
					&& ypoint1 > coordY1 - areaWid / 2
					&& ypoint1 < coordY1 + areaWid / 2) {
				flag1 = 1;
			}

			if (state1 == 1) {
				xL1 = (xpoint1 / canvas.width) * XDIVISOR;
				yL1 = coordinateY1;
			}

			// 将平均值放入数组中
			for ( var a = 0; a < harr1.length; a++) {
				if (harr1[a] >= 0 && harr1[a] < 50) {
					redsum11 = redsum11 + harr1[a];
					count1++;
				}
				if (harr1[a] > 310 && harr1[a] <= 360) {
					redsum12 = redsum12 + harr1[a];
					count2++;
				}
				hsum1 = hsum1 + harr1[a];
			}
			if (count1 == 0 || count2 == 0) {
				havg1.push(hsum1 / harr1.length);
				count1 = 0
				count2 = 0
			} else if (count1 > count2) {
				havg1.push(redsum11 / count1);
				count1 = 0
				count2 = 0
			} else {
				havg1.push(redsum12 / count2);
				count1 = 0
				count2 = 0
			}

			for ( var b = 0; b < sarr1.length; b++) {
				ssum1 = ssum1 + sarr1[b];
			}
			savg1.push(ssum1 / sarr1.length);
			for ( var c = 0; c < varr1.length; c++) {
				vsum1 = vsum1 + varr1[c];
			}
			vavg1.push(vsum1 / varr1.length);
		}

		if (state2 != 2) {
			// 获取一定范围内的像素的hsv值(上-下)
			for ( var x = parseInt(xp2 - areaWid / 2); x < parseInt(xp2
					+ areaWid / 2); x++) {
				for ( var y = parseInt(yp2 - areaWid); y < parseInt(yp2
						+ areaWid); y++) {
					var redValueForPixel = (y * (canvas.width * 4)) + (x * 4);
					var greenValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 1;
					var blueValueForPixel = (y * (canvas.width * 4)) + (x * 4)
							+ 2;

					var r = imgdata.data[redValueForPixel];
					var g = imgdata.data[greenValueForPixel];
					var b = imgdata.data[blueValueForPixel];

					setRGBToHSV(r, g, b);

					if (h >= hhmin && h <= hhmax && s >= ssmin && s <= ssmax
							&& v >= vvmin && v <= vvmax) {
						// 将坐标值放入数组
						xarr2.push(x);
						yarr2.push(y);

						// 将hsv值放入数组
						harr2.push(h);
						sarr2.push(s);
						varr2.push(v);
					}
				}
			}

			// 计算坐标值
			for ( var x = 0; x < xarr2.length; x++) {
				xadd2 = xadd2 + xarr2[x];
			}

			if (xarr2.length > 80) {
				xpoint2 = parseInt(xadd2 / xarr2.length);
			}

			for ( var y = 0; y < yarr2.length; y++) {
				yadd2 = yadd2 + yarr2[y];
			}

			if (yarr2.length > 80) {
				ypoint2 = parseInt(yadd2 / yarr2.length);
			} else {
				xpoint2 = 0;
				ypoint2 = 0;
			}

			if (ypoint2 > coordY2 && ypoint2 < coordY2 + areaWid / 2
					&& xpoint2 > coordX2 - areaWid / 2
					&& xpoint2 < coordX2 + areaWid / 2) {
				flag2 = 1;
			}

			if (state2 == 1) {
				yL2 = (ypoint2 / canvas.height) * YDIVISOR;
				xL2 = coordinateX2;
			}

			// 将平均值放入数组中
			for ( var a = 0; a < harr2.length; a++) {
				if (harr2[a] >= 0 && harr2[a] < 50) {
					redsum21 = redsum21 + harr2[a];
					count1++;
				}
				if (harr2[a] > 310 && harr2[a] <= 360) {
					redsum22 = redsum22 + harr2[a];
					count2++;
				}
				hsum2 = hsum2 + harr2[a];
			}

			if (count1 == 0 || count2 == 0) {
				havg2.push(hsum2 / harr2.length);
				count1 = 0
				count2 = 0
			} else if (count1 > count2) {
				havg2.push(redsum21 / count1);
				count1 = 0
				count2 = 0
			} else {
				havg2.push(redsum22 / count2);
				count1 = 0
				count2 = 0
			}

			for ( var b = 0; b < sarr2.length; b++) {
				ssum2 = ssum2 + sarr2[b];
			}
			savg2.push(ssum2 / sarr2.length);
			for ( var c = 0; c < varr2.length; c++) {
				vsum2 = vsum2 + varr2[c];
			}
			vavg2.push(vsum2 / varr2.length);
		}

		drawButterfly();
	}

	init();

	// worker线程
	var worker = new Worker('js/utilitiesJs/shoot.js');
	worker.postMessage(12);

	worker.onmessage = function(event) {

		if (state1 == 2 && state2 == 2) {
			for ( var m = 0; m < havg1.length; m++) {
				havg.push(havg1[m]);
			}
			for ( var n = 0; n < havg2.length; n++) {
				havg.push(havg2[n]);
			}

			for ( var m = 0; m < savg1.length; m++) {
				savg.push(savg1[m]);
			}
			for ( var n = 0; n < savg2.length; n++) {
				savg.push(savg2[n]);
			}

			for ( var m = 0; m < vavg1.length; m++) {
				vavg.push(vavg1[m]);
			}
			for ( var n = 0; n < vavg2.length; n++) {
				vavg.push(vavg2[n]);
			}

			// 对数组进行排序
			havg.sort();
			savg.sort();
			vavg.sort();

			hmin = parseInt(havg[0]);
			smin = parseInt(savg[0]);
			vmin = parseInt(vavg[0]);
			hmax = parseInt(havg[havg.length - 1]);
			smax = parseInt(savg[havg.length - 1]);
			vmax = parseInt(vavg[havg.length - 1]);

			setCookie("thumbHmin", hmin);
			setCookie("thumbSmin", smin);
			setCookie("thumbVmin", vmin);
			setCookie("thumbHmax", hmax);
			setCookie("thumbSmax", smax);
			setCookie("thumbVmax", vmax);

			window.location = "sceneView.html";
		} else {
			recognize();
		}
	};
} else {
	document.getElementById('errorMessage').textContent = 'No native camera support available.';
}