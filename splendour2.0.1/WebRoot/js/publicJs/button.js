var choice;

function mouseOverT(){
	    playClickSound();
		document.b4.src="images/checkViewImage/tip2.png";
}
function mouseOutT(){
		document.b4.src="images/checkViewImage/tip1.png";
}

function mouseoverNA(){
	playClickSound();
	document.northA0.src="images/sceneViewImage/northamerica3.gif";
}
function mouseoutNA(){
	document.northA0.src="images/sceneViewImage/northamerica2.gif";
}
function mouseoverSA(){
		playClickSound();
	document.southA0.src="images/sceneViewImage/southamerica3.gif";
}
function mouseoutSA(){
	document.southA0.src="images/sceneViewImage/southamerica2.gif";
}
function mouseoverAF(){
		playClickSound();
	document.africa0.src="images/sceneViewImage/africa3.gif";
}
function mouseoutAF(){
	document.africa0.src="images/sceneViewImage/africa2.gif";
}
function mouseoverEU(){
		playClickSound();
	document.europe0.src="images/sceneViewImage/europe3.gif";
}
function mouseoutEU(){
	document.europe0.src="images/sceneViewImage/europe2.gif";
}
function mouseoverCH(){
		playClickSound();
	document.china0.src="images/sceneViewImage/china3.gif";
}
function mouseoutCH(){
	document.china0.src="images/sceneViewImage/china2.gif";
}
function mouseoverAU(){
		playClickSound();
	document.austrilia0.src="images/sceneViewImage/austrilia3.gif";
}
function mouseoutAU(){
	document.austrilia0.src="images/sceneViewImage/austrilia2.gif";
}

function mouseoverShop(){
	playClickSound();
	document.shop.src="images/gameViewImage/shop2.png";
}
function mouseoutShop(){
	document.shop.src="images/gameViewImage/toolbutton1.gif";
}
function mouseoverRemovebee(){
	playClickSound();
	document.removebee.src="images/gameViewImage/removebee2.png";
	$("#tool1_num").html(toolnum[0]);
}
function mouseoutRemovebee(){
	document.removebee.src="images/gameViewImage/toolbutton1.gif";
	$("#tool1_num").html("");
}
function mouseoverButterflygod(){
	playClickSound();
	document.butterflygod.src="images/gameViewImage/butterflygod2.png";
	$("#tool2_num").html(toolnum[1]);
}
function mouseoutButterflygod(){
	document.butterflygod.src="images/gameViewImage/toolbutton1.gif";
	$("#tool2_num").html("");
}
function mouseoverNet(){
	playClickSound();
	document.net.src="images/gameViewImage/net22.png";
	$("#tool3_num").html(toolnum[2]);
}
function mouseoutNet(){
	document.net.src="images/gameViewImage/toolbutton1.gif";
	$("#tool3_num").html("");
}
function mouseoverClock(){
	playClickSound();
	document.clock.src="images/gameViewImage/clock2.png";
	$("#tool4_num").html(toolnum[3]);
}
function mouseoutClock(){
	document.clock.src="images/gameViewImage/toolbutton1.gif";
	$("#tool4_num").html("");
}
function mouseoverLure(){
	playClickSound();
	document.lure.src="images/gameViewImage/lure2.png";
	$("#tool5_num").html(toolnum[4]);
}
function mouseoutLure(){
	document.lure.src="images/gameViewImage/toolbutton1.gif";
	$("#tool5_num").html("");
}

function mouseoverTooltip(){
	document.tooltip.src="images/gameViewImage/knowTool2.png";
}
function mouseoutTooltip(){
	document.tooltip.src="images/gameViewImage/knowTool.png";
}

function mouseOvershopbar(){
	document.shopbar.src="images/gameViewImage/shopbar2.png";
}
function mouseOutshopbar(){
	document.shopbar.src="images/gameViewImage/shopbar1.gif";
}
function mouseOvershopbarB(){
	document.shopbarB.src="images/gameViewImage/shopbar3.png";
}
function mouseOutshopbarB(){
	document.shopbarB.src="images/gameViewImage/shopbar1.gif";
}

function mouseOverLT(){
	document.luretoolbuy.src="images/gameViewImage/luretoolbuy2.png";
}
function mouseOutLT(){
	document.luretoolbuy.src="images/gameViewImage/luretoolbuy1.gif";
}
function mouseOverBG(){
	document.butterflygodtoolbuy.src="images/gameViewImage/butterflygodtoolbuy2.png";
}
function mouseOutBG(){
	document.butterflygodtoolbuy.src="images/gameViewImage/butterflygodtoolbuy1.gif";
}
function mouseOverN(){
	document.nettoolbuy.src="images/gameViewImage/nettoolbuy2.png";
}
function mouseOutN(){
	document.nettoolbuy.src="images/gameViewImage/nettoolbuy1.gif";
}
function mouseOverRB(){
	document.removebeetoolbuy.src="images/gameViewImage/removebeetoolbuy2.png";
}
function mouseOutRB(){
	document.removebeetoolbuy.src="images/gameViewImage/removebeetoolbuy1.gif";
}
function mouseOverC(){
	document.clocktoolbuy.src="images/gameViewImage/clocktoolbuy2.png";
}
function mouseOutC(){
	document.clocktoolbuy.src="images/gameViewImage/clocktoolbuy1.gif";
}
function mouseOverP1(){
	document.price1.src="images/gameViewImage/price1-2.png";
}
function mouseOutP1(){
	document.price1.src="images/gameViewImage/price1-1.png";
}
function mouseOverP2(){
	document.price2.src="images/gameViewImage/price2-2.png";
}
function mouseOutP2(){
	document.price2.src="images/gameViewImage/price2-1.png";
}
function mouseOverP3(){
	document.price3.src="images/gameViewImage/price3-2.png";
}
function mouseOutP3(){
	document.price3.src="images/gameViewImage/price3-1.png";
}
function mouseOverP4(){
	document.price4.src="images/gameViewImage/price4-2.png";
}
function mouseOutP4(){
	document.price4.src="images/gameViewImage/price4-1.png";
}
function mouseOverP5(){
	document.price5.src="images/gameViewImage/price5-2.png";
}
function mouseOutP5(){
	document.price5.src="images/gameViewImage/price5-1.png";
}
function mouseOverP6(){
	document.price6.src="images/gameViewImage/price6-2.png";
}
function mouseOutP6(){
	document.price6.src="images/gameViewImage/price6-1.png";
}
function mouseOverlogin(){
	document.dologin.src="images/loginViewImage/l1.png";
}
function mouseOutlogin(){
	document.dologin.src="images/loginViewImage/l.png";
}
function mouseOverregist(){
	document.goregist.src="images/loginViewImage/r1.png";
}
function mouseOutregist(){
	document.goregist.src="images/loginViewImage/r.png";
}
function mouseOverregister(){
	document.doregist.src="images/loginViewImage/register2.png";
}
function mouseOutregister(){
	document.doregist.src="images/loginViewImage/register1.png";
}
function mouseOverreset(){
	document.doreset.src="images/loginViewImage/re1.png";
}
function mouseOutreset(){
	document.doreset.src="images/loginViewImage/re.png";
}
function mouseOverback(){
	document.cancel.src="images/loginViewImage/cancel2.png";
}
function mouseOutback(){
	document.cancel.src="images/loginViewImage/cancel1.png";
}

function chooseCH(){
	setCookie("background", "0");
	location.href= "gameViewForOne.html";
}
function chooseNA(){
	setCookie("background", "1");
	location.href= "gameViewForOne.html";
}
function chooseSA(){
	setCookie("background", "2");
	location.href= "gameViewForOne.html";
}
function chooseEU(){
	setCookie("background", "3");
	location.href= "gameViewForOne.html";
}
function chooseAU(){
	setCookie("background", "4");
	location.href= "gameViewForOne.html";
}
function chooseAF(){
	//setCookie("background", "5");
	location.href= "gameViewForTwo.html";
}

function mouseOverstart(){
	document.start.src="images/mainViewImage/leaf1-2.png";
}
function mouseOutstart(){
	document.start.src="images/mainViewImage/leaf1-1.gif";
}
function mouseOverhelp(){
	document.help.src="images/mainViewImage/leaf2-2.png";
}
function tostart(){
	window.open('loginView.html','','height=700, width=1366');
	window.opener = null;
    window.open(' ', '_self', ' ');
    window.close();
	//location.href= "loginView.html";
}
function mouseOuthelp(){
	document.help.src="images/mainViewImage/leaf2-1.gif";
}
function tohelp(){
	var xAngle=0;
	xAngle += 90;
	document.getElementById('board').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	fadeInbackH(5);
	var myVideo = document.getElementById("video");  
    myVideo.play();  
	
}
function mouseOveraboutgame(){
	document.aboutgame.src="images/mainViewImage/leaf3-2.png";
}
function mouseOutaboutgame(){
	document.aboutgame.src="images/mainViewImage/leaf2-1.gif";
}
function toaboutgame(){
	var xAngle=0;
	xAngle += 180;
	document.getElementById('board').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	fadeInbackG(5);
}
function mouseOveraboutus(){
	document.aboutus.src="images/mainViewImage/leaf4-2.png";
}
function mouseOutaboutus(){
	document.aboutus.src="images/mainViewImage/leaf4-1.gif";
}
function toaboutus(){
	var xAngle=0;
	xAngle -= 90;
	document.getElementById('board').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	fadeInbackU(5);
}
function mouseOverbackM1(){
	document.backM1.src="images/mainViewImage/backtomain1.png";
}
function mouseOutbackM1(){
	document.backM1.src="images/mainViewImage/backM1.png";
}

function mouseOversell(){
	document.sell.src="images/gameViewImage/sell2.png";
}
function mouseOutsell(){
	document.sell.src="images/gameViewImage/sell1.png";
}

function mouseOveraboutBF(){
	document.aboutbutterfly.src="images/gameViewImage/aboutBF2.png";
}
function mouseOutaboutBF(){
	document.aboutbutterfly.src="images/gameViewImage/aboutBF1.png";
}

function mouseOversellsure(){
	document.sellsure.src="images/gameViewImage/sellsure2.png";
}
function mouseOutsellsure(){
	document.sellsure.src="images/gameViewImage/sellsure1.png";
}
/*
function playPause() {  
  
        var myVideo = document.getElementById("video");  
  
       if (myVideo.paused)  
  
           myVideo.play();  
  
       else  
  
           myVideo.pause();  
       }  
  function Stop()  
  {  
     var  myVideo = document.getElementById("video");  
     myVideo.currentTime=0;  
     myVideo.pause();  
  }  
*/
function mouseOverbackH(){
	document.backH.src="images/mainViewImage/backtomain2.png";
}
function mouseOutbackH(){
	document.backH.src="images/mainViewImage/backtomain1.png";
}
function mouseOverbackH2(){
	document.backH2.src="images/mainViewImage/backtomain2.png";
}
function mouseOutbackH2(){
	document.backH2.src="images/mainViewImage/backtomain1.png";
}
function backtomainH(){
	var xAngle=90;
	xAngle -= 90;
	document.getElementById('board').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	var myVideo = document.getElementById("video");  
    myVideo.pause(); 
	fadeOutbackH(5);
}

function mouseOverbackG(){
	document.backG.src="images/mainViewImage/backtomain2.png";
}
function mouseOutbackG(){
	document.backG.src="images/mainViewImage/backtomain1.png";
}
function backtomainG(){
	var xAngle=180;
	xAngle -= 180;
	document.getElementById('board').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	fadeOutbackG(5);
}
function mouseOverbackU(){
	document.backU.src="images/mainViewImage/backtomain2.png";
}
function mouseOutbackU(){
	document.backu.src="images/mainViewImage/backtomain1.png";
}
function backtomainU(){
	var xAngle=-90;
	xAngle += 90;
	document.getElementById('board').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	fadeOutbackU(5);
}

function mouseOversellback(){
	document.sellback.src="images/gameViewImage/sellback2.png";
}
function mouseOutsellback(){
	document.sellback.src="images/gameViewImage/sellback1.png";
}
function backtogame(){
	var yangle=0;
	yAngle += 180;
	document.getElementById('board').style[prop] = "rotateY("+yAngle+"deg)rotateY("+yAngle+"deg)";
}

function mouseOvershowall(){
	document.showall.src="images/gameViewImage/showall2.png";
}
function mouseOutshowall(){
	document.showall.src="images/gameViewImage/showall1.png";
}
function mouseOveraboutbb(){
	document.aboutbbb.src="images/gameViewImage/aboutbb2.png";
}
function mouseOutaboutbb(){
	document.aboutbbb.src="images/gameViewImage/aboutbb1.png";
}
function cancelaboutbb(){
	fadeOutABF1(5);
	fadeOutABF2(5);
	fadeOutABF3(5);
	fadeOutABF4(5);
	fadeOutABF5(5);
	fadeOutABF6(5);
	fadeOutABF7(5);
	fadeOutABF8(5);
	fadeOutABF9(5);
	fadeOutABF0(5);
	fadeOutaboutB(5);
	fadeOutaboutbb(5);
}
function allshow(){
	fadeInABF1(10);
	fadeInABF2(10);
	fadeInABF3(10);
	fadeInABF4(10);
	fadeInABF5(10);
	fadeInABF6(10);
	fadeInABF7(10);
	fadeInABF8(10);
	fadeInABF9(10);
	fadeInABF0(10);
	fadeInaboutB(10);
	fadeInaboutbb(10);
}

