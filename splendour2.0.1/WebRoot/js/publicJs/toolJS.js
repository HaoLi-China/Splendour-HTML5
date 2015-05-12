/*
 *setopacity function for all the functions below
 */
function SetOpacity(ev, v) {
	ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')'
			: ev.style.opacity = v / 100;
}

/*
 *shop
 */
function fadeInshop(speed, opacity) {
	var elem = document.getElementById('boardB');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutshop(speed, opacity) {
	var elem = document.getElementById('boardB');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}

/*
 *removebee 
 */
function fadeInremovebee(speed, opacity) {
	var elem = document.getElementById('lighting');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutremovebee(speed, opacity) {
	var elem = document.getElementById('lighting');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function popoutremovebee() {
	
	if(toolnum[0]>0){
        toolnum[0]-=1;
        console.log("使用第1个道具，剩余数量为："+toolnum[0]);
        updateBT("tool", "toolnum", -1 , "tool1")
    }else{
        console.log("第1个道具数量不足，请购买！");
        return;
    }
	
	fadeInremovebee(10);
	window.setTimeout("fadeInremovebee()", 200);
	window.setTimeout("fadeInremovebee()", 400);
	window.setTimeout("fadeOutremovebee()", 1000);

	netState = 1;
	caughtState = 2;
	game.player.fire( {
		x : 512,
		y : 340
	});
	netState = 0;
}

/*
 *butterflygod
 */
function fadeInbutterflygod(speed, opacity) {
	var elem = document.getElementById('butterflygodtool');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutbutterflygod(speed, opacity) {
	var elem = document.getElementById('butterflygodtool');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function popoutbutterflygod() {

    if(toolnum[1]>0){
        toolnum[1]-=1;
        console.log("使用第2个道具，剩余数量为："+toolnum[1]);
        updateBT("tool", "toolnum", -1 , "tool2")
    }else{
        console.log("第2个道具数量不足，请购买！");
        return;
    }
	
	fadeInbutterflygod(50);
	window.setTimeout("fadeOutbutterflygod()", 1100);

	netState = 1;
	caughtState = 1;
	game.player.fire( {
		x : 512,
		y : 340
	});
	netState = 0;
}

/*
 *net
 */
function fadeInnet1(speed, opacity) {
	var elem = document.getElementById('nettool1');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeInnet2(speed, opacity) {
	var elem = document.getElementById('nettool2');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeInnet3(speed, opacity) {
	var elem = document.getElementById('nettool3');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutnet1(speed, opacity) {
	var elem = document.getElementById('nettool1');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeOutnet2(speed, opacity) {
	var elem = document.getElementById('nettool2');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeOutnet3(speed, opacity) {
	var elem = document.getElementById('nettool3');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function popoutnet() {

    if(toolnum[2]>0){
        toolnum[2]-=1;
        console.log("使用第3个道具，剩余数量为："+toolnum[2]);
        updateBT("tool", "toolnum", -1 , "tool3")
    }else{
        console.log("第3个道具数量不足，请购买！");
        return;
    }
	
	fadeInnet1(30);
	window.setTimeout("fadeInnet2(2)", 500);
	window.setTimeout("fadeOutnet1()", 500);
	window.setTimeout("fadeInnet3(8)", 550);
	window.setTimeout("fadeOutnet2(10)", 600);
	window.setTimeout("fadeOutnet3()", 1200);

	//var ns = Q.use("butterfly");
	/*for(var i=1;i<=12;i++){
	ns.R.butterflyTypes[i].mixin.captureRate=1;
	}*/
	caughtState = 1;
	// 父线程调用子线程的部分，时刻进行响应
	var worker = new Worker('js/utilitiesJs/timeLimit.js');
	var times = 0;
	worker.postMessage(0);
	worker.onmessage = function(event) {
		if (times == 1) {
			/*ns.R.butterflyTypes[1].mixin.captureRate=0.55;
			ns.R.butterflyTypes[2].mixin.captureRate=0.50;
			ns.R.butterflyTypes[3].mixin.captureRate=0.45;
			ns.R.butterflyTypes[4].mixin.captureRate=0.40;
			ns.R.butterflyTypes[5].mixin.captureRate=0.35;
			ns.R.butterflyTypes[6].mixin.captureRate=0.30;
			ns.R.butterflyTypes[7].mixin.captureRate=0.25;
			ns.R.butterflyTypes[8].mixin.captureRate=0.20;
			ns.R.butterflyTypes[9].mixin.captureRate=0.15;
			ns.R.butterflyTypes[10].mixin.captureRate=0.10;
			ns.R.butterflyTypes[11].mixin.captureRate=0.9;
			ns.R.butterflyTypes[12].mixin.captureRate=0.01;*/
			caughtState = 0;
			worker.terminate();
		}
		times++;
	};
	/*	net.x= 1024;
		net.y= 680;
		game.player.fire( {
			x : 512,
			y : 340
		});
		//net.x=recordX;
		//net.y= recordY;
	 */
	/*game.butterflyManager.butterflyes[0].speed=12;	
	game.butterflyManager.butterflyes[1].speed=12;	
	game.butterflyManager.butterflyes[2].speed=12;	
	game.butterflyManager.butterflyes[3].speed=12;	
	game.butterflyManager.butterflyes[4].speed=12;	
	game.butterflyManager.butterflyes[5].speed=12;	
	game.butterflyManager.butterflyes[6].speed=12;	
	game.butterflyManager.butterflyes[7].speed=12;	*/

}

/*
 *clock
 */
function fadeInclock1(speed, opacity) {
	var elem = document.getElementById('clocktool1');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeInclock2(speed, opacity) {
	var elem = document.getElementById('clocktool2');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutclock1(speed, opacity) {
	var elem = document.getElementById('clocktool1');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeOutclock2(speed, opacity) {
	var elem = document.getElementById('clocktool2');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
var Img = function() {
	var g = function(id) {
		return document.getElementById(id);
	}, el = document.createElement("div"), rotateAtt = (el.style.transform === "") ? "transform"
			: el.style.WebkitTransform === "" ? "WebkitTransform"
					: el.style.MozTransform === "" ? "MozTransform"
							: "OTransform", //mozilla : opera
	i = 0, sinDeg = 0, cosDeg = 0, timer = null, rotate = function(target,
			degree) {
		target = g(target);
		clearInterval(timer);
		var orginW = target.clientWidth, orginH = target.clientHeight, run = function(
				angle) {
			target.style[rotateAtt] = "rotate(" + angle + "deg)";
		};
		timer = setInterval(function() {
			i += 1;
			run(i);
			if (i > degree - 1) {
				i = 0;
				clearInterval(timer);
			}
		}, 10);
	}
	return {
		rotate : rotate
	}
}();
function imgrotate() {
	Img.rotate('clocktool2', 180);
}
function popoutclock() {

    if(toolnum[3]>0){
        toolnum[3]-=1;
        console.log("使用第4个道具，剩余数量为："+toolnum[3]);
        updateBT("tool", "toolnum", -1 , "tool4")
    }else{
        console.log("第4个道具数量不足，请购买！");
        return;
    }
	
	fadeInclock1(50);
	fadeInclock2(50);
	window.setTimeout("imgrotate()", 1000);
	window.setTimeout("fadeOutclock1()", 2600);
	window.setTimeout("fadeOutclock2()", 2600);
	speedState = 1;
	// 父线程调用子线程的部分，时刻进行响应
	var worker = new Worker('js/utilitiesJs/timeLimit.js');
	var times = 0;
	worker.postMessage(0);
	worker.onmessage = function(event) {
		if (times == 1) {
			speedState = 0;
			worker.terminate();
		}
		times++;
	};
}

/*
 *lure
 */
function fadeInlure1(speed, opacity) {
	var elem = document.getElementById('luretool1');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeInlure2(speed, opacity) {
	var elem = document.getElementById('luretool2');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeInlure3(speed, opacity) {
	var elem = document.getElementById('luretool3');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeInlure4(speed, opacity) {
	var elem = document.getElementById('luretool4');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutlure1(speed, opacity) {
	var elem = document.getElementById('luretool1');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeOutlure2(speed, opacity) {
	var elem = document.getElementById('luretool2');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeOutlure3(speed, opacity) {
	var elem = document.getElementById('luretool3');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeOutlure4(speed, opacity) {
	var elem = document.getElementById('luretool4');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function popoutlure() {

    if(toolnum[4]>0){
        toolnum[4]-=1;
        console.log("使用第5个道具，剩余数量为："+toolnum[4]);
        updateBT("tool", "toolnum", -1 , "tool5")
    }else{
        console.log("第5个道具数量不足，请购买！");
        return;
    }
	
	fadeInlure1(30);
	window.setTimeout("fadeInlure2()", 1000);
	window.setTimeout("fadeOutlure1()", 1300);
	window.setTimeout("fadeInlure3()", 1700);
	window.setTimeout("fadeOutlure2()", 2000);
	window.setTimeout("fadeInlure4()", 2400);
	window.setTimeout("fadeOutlure3()", 2700);
	window.setTimeout("fadeOutlure4()", 3100);

	groupState = 1;
	// 父线程调用子线程的部分，时刻进行响应
	var worker = new Worker('js/utilitiesJs/timeLimit.js');
	var times = 0;
	worker.postMessage(0);
	worker.onmessage = function(event) {
		console.log("groupState1"+groupState);
		if (times == 1) {
			groupState = 0;
			console.log("groupState2"+groupState);
			worker.terminate();
		}
		times++;
	};
}

/*
			 *about butterflies
			*/
function fadeInABF1(speed, opacity){
				var elem = document.getElementById('card-1');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF1(speed, opacity){
				var elem = document.getElementById('card-1');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF2(speed, opacity){
				var elem = document.getElementById('card-2');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF2(speed, opacity){
				var elem = document.getElementById('card-2');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF3(speed, opacity){
				var elem = document.getElementById('card-3');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF3(speed, opacity){
				var elem = document.getElementById('card-3');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF4(speed, opacity){
				var elem = document.getElementById('card-4');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF4(speed, opacity){
				var elem = document.getElementById('card-4');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF5(speed, opacity){
				var elem = document.getElementById('card-5');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF5(speed, opacity){
				var elem = document.getElementById('card-5');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF6(speed, opacity){
				var elem = document.getElementById('card-6');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF6(speed, opacity){
				var elem = document.getElementById('card-6');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF7(speed, opacity){
				var elem = document.getElementById('card-7');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF7(speed, opacity){
				var elem = document.getElementById('card-7');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF8(speed, opacity){
				var elem = document.getElementById('card-8');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF8(speed, opacity){
				var elem = document.getElementById('card-8');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF9(speed, opacity){
				var elem = document.getElementById('card-9');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF9(speed, opacity){
				var elem = document.getElementById('card-9');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInABF0(speed, opacity){
				var elem = document.getElementById('card-0');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutABF0(speed, opacity){
				var elem = document.getElementById('card-0');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}

/*
 *sell samples
 */
function fadeInsellsample(speed, opacity) {
	var elem = document.getElementById('sellsamples');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutsellsample(speed, opacity) {
	var elem = document.getElementById('sellsamples');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}

function fadeInbackH(speed, opacity) {
	var elem = document.getElementById('backtomainH');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutbackH(speed, opacity) {
	var elem = document.getElementById('backtomainH');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeInbackG(speed, opacity) {
	var elem = document.getElementById('backtomainG');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutbackG(speed, opacity) {
	var elem = document.getElementById('backtomainG');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeInbackU(speed, opacity) {
	var elem = document.getElementById('backtomainU');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutbackU(speed, opacity) {
	var elem = document.getElementById('backtomainU');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}

function fadeInaboutB(speed, opacity){
				var elem = document.getElementById('aboutB');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutaboutB(speed, opacity){
				var elem = document.getElementById('aboutB');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInaboutbb(speed, opacity){
				var elem = document.getElementById('aboutbb');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutaboutbb(speed, opacity){
				var elem = document.getElementById('aboutbb');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			
			function fadeInaboutbackimg(speed, opacity){
				var elem = document.getElementById('fabouttmain');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutaboutbackimg(speed, opacity){
				var elem = document.getElementById('fabouttmain');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}		
			function fadeInhelpbackimg(speed, opacity){
				var elem = document.getElementById('fhelptmain');
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function(){
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOuthelpbackimg(speed, opacity){
				var elem = document.getElementById('fhelptmain');
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function(){
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					}else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}		
			function fadeInsha(speed, opacity) {
				var elem = document.getElementById('controls');
				var myVideo = document.getElementById("video");  
				myVideo.pause(); 
				fadeOuthelpbackimg(1);				
				
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function() {
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutsha(speed, opacity) {
				var elem = document.getElementById('controls');
				var myVideo = document.getElementById("video");  
				myVideo.play();  
				fadeInhelpbackimg(1);
				
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function() {
					SetOpacity(elem, val);					
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					} else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
			function fadeInsha2(speed, opacity) {
				var elem = document.getElementById('controls');
				fadeOutaboutbackimg(1);
				
				speed = speed || 20;
				opacity = opacity || 100;
				elem.style.display = 'block';
				SetOpacity(elem, 0);
				var val = 0;
				(function() {
					SetOpacity(elem, val);
					val += 5;
					if (val <= opacity) {
						setTimeout(arguments.callee, speed)
					}
				})();
			}
			function fadeOutsha2(speed, opacity) {
				var elem = document.getElementById('controls');
				fadeInaboutbackimg(1);
				
				speed = speed || 20;
				opacity = opacity || 0;
				var val = 100;
				(function() {
					SetOpacity(elem, val);
					val -= 5;
					if (val >= opacity) {
						setTimeout(arguments.callee, speed);
					} else if (val < 0) {
						elem.style.display = 'none';
					}
				})();
			}
function fadeInFaceOne(speed, opacity) {
	fadeOutFaceTwo();
	var elem = document.getElementById('faceOne');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutFaceOne(speed, opacity) {
	fadeInFaceTwo();
	var elem = document.getElementById('faceOne');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeInFaceTwo(speed, opacity) {
	var elem = document.getElementById('faceTwo');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutFaceTwo(speed, opacity) {
	var elem = document.getElementById('faceTwo');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}



function fadeInFaceThree(speed, opacity) {
	fadeOutFaceFour();
	var elem = document.getElementById('FaceThree');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutFaceThree(speed, opacity) {
	fadeInFaceFour();
	var elem = document.getElementById('FaceThree');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}
function fadeInFaceFour(speed, opacity) {
	var elem = document.getElementById('FaceFour');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutFaceFour(speed, opacity) {
	var elem = document.getElementById('FaceFour');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}



function fadeInloading(speed, opacity) {
	var elem = document.getElementById('loading');
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutloading(speed, opacity) {
	var elem = document.getElementById('loading');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 2;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();	
}

function fadeOutloadingpage(speed, opacity) {
	var elem = document.getElementById('loadingpage');
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 2;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();	
}