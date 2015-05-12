/*
 * 
 * 蝴蝶资源	
 * 
 * */

var butterfly1 = new Image();// 蝴蝶一
var butterfly2 = new Image();// 蝴蝶二
var butterfly3 = new Image();// 蝴蝶三
var butterfly4 = new Image();// 蝴蝶四
var butterfly5 = new Image();// 蝴蝶五
var butterfly6 = new Image();// 蝴蝶六
var butterfly7 = new Image();// 蝴蝶七
var butterfly8 = new Image();// 蝴蝶八
var butterfly9 = new Image();// 蝴蝶九
var butterfly10 = new Image();// 蝴蝶十

//初始化资源
butterfly1.src = "images/gameViewImage/butterfly1.png";// 蝴蝶一
butterfly2.src = "images/gameViewImage/butterfly2.png";// 蝴蝶二
butterfly3.src = "images/gameViewImage/butterfly3.png";// 蝴蝶三
butterfly4.src = "images/gameViewImage/butterfly4.png";// 蝴蝶四
butterfly5.src = "images/gameViewImage/butterfly5.png";// 蝴蝶五
butterfly6.src = "images/gameViewImage/butterfly6.png";// 蝴蝶六
butterfly7.src = "images/gameViewImage/butterfly7.png";// 蝴蝶七
butterfly8.src = "images/gameViewImage/butterfly8.png";// 蝴蝶八
butterfly9.src = "images/gameViewImage/butterfly9.png";// 蝴蝶九
butterfly10.src = "images/gameViewImage/butterfly10.png";// 蝴蝶十

// 蝴蝶大小
var butterWidth1 = 80;
var butterHeight1 = 1360 / 17;
var butterWidth2 = 60;
var butterHeight2 = 1020 / 17;
var butterWidth3 = 70;
var butterHeight3 = 1190 / 17;
var butterWidth4 = 70;
var butterHeight4 = 1190 / 17;
var butterWidth5 = 90;
var butterHeight5 = 1530 / 17;
var butterWidth6 = 50;
var butterHeight6 = 1120 / 14;
var butterWidth7 = 66;
var butterHeight7 = 1620 / 18;
var butterWidth8 = 98;
var butterHeight8 = 1800 / 18;
var butterWidth9 = 150;
var butterHeight9 = 3600 / 18;
var butterWidth10 = 120;
var butterHeight10 = 2160 / 18;

// 蝴蝶飞行速度
var butter1Speed = 3;
var butter2Speed = 4;
var butter3Speed = 5;
var butter4Speed = 6;
var butter5Speed = 7;
var butter6Speed = 8;
var butter7Speed = 9;
var butter8Speed = 10;
//var butter9Speed = 1/Math.PI;//这是角度
//var butter10Speed = 1/(2*Math.PI);//这是角度
var butter9Speed = 11;
var butter10Speed = 12;

// 蝴蝶捕获概率（百分之几）
/*var butter1Rate = 80;
var butter2Rate = 75;
var butter3Rate = 65;
var butter4Rate = 60;
var butter5Rate = 55;
var butter6Rate = 45;
var butter7Rate = 40;
var butter8Rate = 35;
var butter9Rate = 25;
var butter10Rate = 20;*/

var butter1Rate = 100;
var butter2Rate = 100;
var butter3Rate = 100;
var butter4Rate = 100;
var butter5Rate = 100;
var butter6Rate = 100;
var butter7Rate = 100;
var butter8Rate = 100;
var butter9Rate = 100;
var butter10Rate = 100;

// 捕获相应蝴蝶获得的分数
var butter1Points = 1;
var butter2Points = 2;
var butter3Points = 3;
var butter4Points = 4;
var butter5Points = 5;
var butter6Points = 6;
var butter7Points = 7;
var butter8Points = 8;
var butter9Points = 9;
var butter10Points = 10;

//轨迹为圆的蝴蝶的轨迹属性
//半径
//var r9=120;
//var r10=220;

//圆心
//var a9=502;
//var b9=315;
//var a10=502;
//var b10=315;

//角度
//var angle9=0;
//var angle10=Math.PI;

// 蝴蝶飞行轨迹
//横坐标轨迹
function getXPath(x,butterId) {
	var xpath=0;
	switch (butterId) {
	case 1:
		xpath=x+butter1Speed;
		break;
	case 2:
		xpath=x+butter2Speed;
		break;
	case 3:
		xpath=x+butter3Speed;
		break;
	case 4:
		xpath=x+butter4Speed;
		break;
	case 5:
		xpath=x+butter5Speed;
		break;
	case 6:
		xpath=x+butter6Speed;
		break;
	case 7:
		xpath=x+butter7Speed;
		break;
	case 8:
		xpath=x+butter8Speed;
		break;
	case 9:
		/*if(angle9<2*Math.PI){
			angle9+=butter9Speed;
		}
		else{
			angle9=	butter9Speed;
		}
		xpath=a9+r9*Math.cos(angle9);*/
		xpath=x+butter9Speed;
		break;
	case 10:
		/*if(angle10<2*Math.PI){
			angle10+=butter10Speed;
		}
		else{
			angle10=butter10Speed;
		}
		xpath=a10+r10*Math.cos(angle10);*/
		xpath=x+butter10Speed;
		break;
	}
return xpath;
}
//纵坐标轨迹
function getYPath(x, width, pathId) {
	var ypath=0;
	switch (pathId) {
	case 1:
		ypath = 100 * Math.sin(2 * Math.PI * x / width) + 300;
		break;
	case 2:
		ypath = 100 * Math.sin(4 * Math.PI * x / width) + 300;
		break;
	case 3:
		ypath = 200 * Math.sin(Math.PI * x / width) + 300;
		break;

	case 4:
		ypath = 100 * Math.cos( Math.PI * x / width) + 300;
		break;
	case 5:
		ypath = 100 * Math.cos(2 * Math.PI * x / width) + 200;
		break;
	case 6:
		ypath = 100 * Math.cos(2 * Math.PI * x / width) + 400;
		break;
	case 7:
		ypath = 150 * Math.cos( Math.PI * x / width) + 150;
		break;
	case 8:
		ypath = 150 * Math.sin(2 * Math.PI * x / width) + 500;
		break;
	case 9:
		//ypath=b9+r9*Math.sin(angle9);
		ypath = 200 * Math.cos(Math.PI * x / width) + 300;
		break;
	case 10:
		//ypath=b10+r10*Math.sin(angle10);
		ypath = 100 * Math.cos(4 * Math.PI * x / width) + 300;
		break;
	}
return ypath;
}
