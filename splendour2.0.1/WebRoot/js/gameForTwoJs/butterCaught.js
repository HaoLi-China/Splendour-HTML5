//画布1
var canvas1 = document.getElementById('canvas1');
ctx1 = canvas.getContext('2d');

// 分数
var point = 0;

// 蝴蝶被捕后的动画
function drawButterCaught(x, y, Id) {
	var num1 = 12;
	var num2 = 12;
	var num3 = 12;
	var num4 = 12;
	var num5 = 12;
	var num6 = 10;
	var num7 = 12;
	var num8 = 12;
	var num9 = 12;
	var num10 = 12;
	//worker线程	
	var drawcaught = new Worker('js/utilitiesJs/drawButter.js');
	drawcaught.postMessage(0);

	drawcaught.onmessage = function(event) {
		canvas1.width = 1024;
		canvas1.height = 768;

		switch (Id) {
		case 1:
			drawButter1(x, y, num1);
			num1++;
			if (num1 > 17) {
				return;
			}
			break;
		case 2:
			drawButter2(x, y, num2);
			num2++;
			if (num2 > 17) {
				return;
			}
			break;
		case 3:
			drawButter3(x, y, num3);
			num3++;
			if (num3 > 17) {
				return;
			}
			break;
		case 4:
			drawButter4(x, y, num4);
			num4++;
			if (num4 > 17) {
				return;
			}
			break;
		case 5:
			drawButter5(x, y, num5);
			num5++;
			if (num5 > 17) {
				return;
			}
			break;
		case 6:
			drawButter6(x, y, num6);
			num6++;
			if (num6 > 14) {
				return;
			}
			break;
		case 7:
			drawButter7(x, y, num7);
			num7++;
			if (num7 > 18) {
				return;
			}
			break;
		case 8:
			drawButter8(x, y, num8);
			num8++;
			if (num8 > 18) {
				return;
			}
			break;
		case 9:
			drawButter9(x, y, num9);
			num9++;
			if (num9 > 18) {
				return;
			}
			break;
		case 10:
			drawButter10(x, y, num10);
			num10++;
			if (num10 > 18) {
				return;
			}
			break;
		}
	};
}

// 画蝴蝶一
function drawButter1(x,y,num) {
	ctx1.drawImage(butterfly1, 0, butterHeight1 * num, butterWidth1,
			butterHeight1, x-butterWidth1/2, y-butterHeight1/2, butterWidth1, butterHeight1);
}

// 画蝴蝶二
function drawButter2(x,y,num) {
	ctx1.drawImage(butterfly2, 0, butterHeight2 * num, butterWidth2,
			butterHeight2, x-butterWidth2/2, y-butterHeight2/2, butterWidth2, butterHeight2);
}

// 画蝴蝶三
function drawButter3(x,y,num) {
	ctx1.drawImage(butterfly3, 0, butterHeight3 * num, butterWidth3,
			butterHeight3, x-butterWidth3/2, y-butterHeight3/2, butterWidth3, butterHeight3);
}

// 画蝴蝶四
function drawButter4(x,y,num) {
	ctx1.drawImage(butterfly4, 0, butterHeight4 * num, butterWidth4,
			butterHeight4, x-butterWidth4/2, y-butterHeight4/2, butterWidth4, butterHeight4);
}

// 画蝴蝶五
function drawButter5(x,y,num) {
	ctx1.drawImage(butterfly5, 0, butterHeight5 * num, butterWidth5,
			butterHeight5, x-butterWidth5/2, y-butterHeight5/2, butterWidth5, butterHeight5);
}

// 画蝴蝶六
function drawButter6(x,y,num) {
	ctx1.drawImage(butterfly6, 0, butterHeight6 * num, butterWidth6,
			butterHeight6, x-butterWidth6/2, y-butterHeight6/2, butterWidth6, butterHeight6);
}

// 画蝴蝶七
function drawButter7(x,y,num) {
	ctx1.drawImage(butterfly7, 0, butterHeight7 * num, butterWidth7,
			butterHeight7, x-butterWidth7/2, y-butterHeight7/2, butterWidth7, butterHeight7);
}

// 画蝴蝶八
function drawButter8(x,y,num) {
	ctx1.drawImage(butterfly8, 0, butterHeight8 * num, butterWidth8,
			butterHeight8, x-butterWidth8/2, y-butterHeight8/2, butterWidth8, butterHeight8);
}

// 画蝴蝶九
function drawButter9(x,y,num) {
	ctx1.drawImage(butterfly9, 0, butterHeight9 * num, butterWidth9,
			butterHeight9, x-butterWidth9/2, y-butterHeight9/2, butterWidth9, butterHeight9);
}

// 画蝴蝶十
function drawButter10(x,y,num) {
	ctx1.drawImage(butterfly10, 0, butterHeight10 * num, butterWidth10,
			butterHeight10, x-butterWidth10/2, y-butterHeight10/2, butterWidth10, butterHeight10);
}


// 捕捉蝴蝶
function catchButter(x, y) {
	if (x > xL1 - butterWidth1 / 2 && x < xL1 + butterWidth1 / 2
			&& y > yL1 - butterHeight1 / 2 && y < yL1 + butterHeight1 / 2) {
		if(isCaught(1)){
			playButtterSound();
		drawButterCaught(xL1,yL1,1);
		point+=butter1Points;
		xL1=getNewLocation();
		}
	}
	if (x > xL2 - butterWidth2 / 2 && x < xL2 + butterWidth2 / 2
			&& y > yL2 - butterHeight2 / 2 && y < yL2 + butterHeight2 / 2) {
		if(isCaught(2)){
			playButtterSound();
		drawButterCaught(xL2,yL2,2);
		point+=butter2Points;
		xL2=getNewLocation();
		}
	}
	if (x > xL3 - butterWidth3 / 2 && x < xL3 + butterWidth3 / 2
			&& y > yL3 - butterHeight3 / 2 && y < yL3 + butterHeight3 / 2) {
		if(isCaught(3)){
			playButtterSound();
		drawButterCaught(xL3,yL3,3);
		point+=butter3Points;
		xL3=getNewLocation();
		}
	}
	if (x > xL4 - butterWidth4 / 2 && x < xL4 + butterWidth4 / 2
			&& y > yL4 - butterHeight4 / 2 && y < yL4 + butterHeight4 / 2) {
		if(isCaught(4)){
			playButtterSound();
		drawButterCaught(xL4,yL4,4);
		point+=butter4Points;
		xL4=getNewLocation();
		}
	}
	if (x > xL5 - butterWidth5 / 2 && x < xL5 + butterWidth5 / 2
			&& y > yL5 - butterHeight5 / 2 && y < yL5 + butterHeight5 / 2) {
		if(isCaught(5)){
			playButtterSound();
		drawButterCaught(xL5,yL5,5);
		point+=butter5Points;
		xL5=getNewLocation();
		}
	}
	if (x > xL6 - butterWidth6 / 2 && x < xL6 + butterWidth6 / 2
			&& y > yL6 - butterHeight6 / 2 && y < yL6 + butterHeight6 / 2) {
		if(isCaught(6)){
			playButtterSound();
		drawButterCaught(xL6,yL6,6);
		point+=butter6Points;
		xL6=getNewLocation();
		}
	}
	if (x > xL7 - butterWidth7 / 2 && x < xL7 + butterWidth7 / 2
			&& y > yL7 - butterHeight7 / 2 && y < yL7 + butterHeight7 / 2) {
		if(isCaught(7)){
			playButtterSound();
		drawButterCaught(xL7,yL7,7);
		point+=butter7Points;
		xL7=getNewLocation();
		}
	}

	if (x > xL8 - butterWidth8 / 2 && x < xL8 + butterWidth8 / 2
			&& y > yL8 - butterHeight8 / 2 && y < yL8 + butterHeight8 / 2) {
		if(isCaught(8)){
			playButtterSound();
		drawButterCaught(xL8,yL8,8);
		point+=butter8Points;
		xL8=getNewLocation();
		}
	}
	if (x > xL9 - butterWidth9 / 2 && x < xL9 + butterWidth9 / 2
			&& y > yL9 - butterHeight9 / 2 && y < yL9 + butterHeight9 / 2) {
		if(isCaught(9)){
			playButtterSound();
		drawButterCaught(xL9,yL9,9);
		//point+=butter9Points;
		//angle9=Math.random()*2*Math.PI;
		xL9=getNewLocation();
	}
	}
	if (x > xL10 - butterWidth10 / 2 && x < xL10 + butterWidth10 / 2
			&& y > yL10 - butterHeight10 / 2 && y < yL10 + butterHeight10 / 2) {
		if(isCaught(10)){
			playButtterSound();
		drawButterCaught(xL10,yL10,10);
		//point+=butter10Points;
		//angle10=Math.random()*2*Math.PI;
		xL10=getNewLocation();
		}
	}
}

// 获取新的坐标值
function getNewLocation(){
	var newX=0;
	var random=0;
	random=parseInt(Math.random()*10+1);
	switch(random){
		case 1:
		newX=-90;
	break;	
	case 2:
		newX=-80;
		break;	
	case 3:
		newX=-70;
		break;
	case 4:
		newX=-60;
		break;
	case 5:
		newX=-50;
		break;
	case 6:
		newX=1024+50;
		break;
	case 7:
		newX=1024+60;
		break;
	case 8:
		newX=1024+70;
		break;
	case 9:
		newX=1024+80;
		break;
	case 10:
		newX=1024+90;
		break;
	}
	return newX;
}

// 获取0-100中的一个随机数
function isCaught(Id){
var rand;
var bool=false;
rand= parseInt(Math.random()*100+1);
switch(Id){
case 1:
	if(rand<=butter1Rate){
		bool=true;
	}
	break;
case 2:
	if(rand<=butter2Rate){
		bool=true;
	}
	break;
case 3:
	if(rand<=butter3Rate){
		bool=true;
	}
	break;
case 4:
	if(rand<=butter4Rate){
		bool=true;
	}
	break;
case 5:
	if(rand<=butter5Rate){
		bool=true;
	}
	break;
case 6:
	if(rand<=butter6Rate){
		bool=true;
	}
	break;
case 7:
	if(rand<=butter7Rate){
		bool=true;
	}
	break;
case 8:
	if(rand<=butter8Rate){
		bool=true;
	}
	break;
case 9:
	if(rand<=butter9Rate){
		bool=true;
	}
	break;
case 10:
	if(rand<=butter10Rate){
		bool=true;
	}
	break;
}
return bool;
}
