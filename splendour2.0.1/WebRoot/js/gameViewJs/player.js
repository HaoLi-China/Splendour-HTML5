var netState = 0;
var playAllow=false;

(function() {

	var ns = Q.use("butterfly"), game = ns.game;

	var Player = ns.Player = function(props) {
		this.id = null;
		this.coin = 0;
		this.numCapturedButterflyes = 0;

		this.hand = null;
		this.handMinus = null;
		this.handPlus = null;
		this.coinNum = null;

		props = props || {};
		Q.merge(this, props, true);

		this.init();
	};

	Player.prototype.init = function() {
		var me = this, power = 2;

		this.hand = new ns.Hand(ns.R.handTypes[power]);

		this.coinNum = new ns.Num( {
			id : "coinNum",
			src : ns.R.numBlack,
			max : 6,
			gap : 3,
			autoAddZero : true
		});
		this.coinNum.x = game.head.x + 337;
		this.coinNum.y = game.head.y + 80;
		this.updateCoin(this.coin);

		game.stage.addChild(this.hand, this.coinNum);
	};

	Player.prototype.fire = function(targetPoint) {
		var hand = this.hand, power = hand.power, speed = 5;

		var dir = ns.Utils.calcDirection(hand, targetPoint), degree = dir.degree;
		if (degree == -90)
			degree = 0;
		else if (degree < 0 && degree > -90)
			degree = -degree;
		else if (degree >= 180 && degree <= 270)
			degree = 180 - degree;
		hand.fire(degree);

		var sin = Math.sin(degree * Q.DEG_TO_RAD), cos = Math.cos(degree
				* Q.DEG_TO_RAD);
		
		if (netState == 0) {
			var net = new ns.Net(ns.R.nets[power - 1]);
		} else {
			var net = new ns.Net(ns.R.nets[6]);
		}

		net.x = targetPoint.x;
		net.y = targetPoint.y;
		net.rotation = degree;

		net.power = power;

		net.speedX = speed * sin;
		net.speedY = speed * cos;
		game.stage.addChild(net);

		// deduct coin
		this.updateCoin(-power, true);
	}

	Player.prototype.captureButterfly = function(butterfly) {
		this.updateCoin(butterfly.coin, true);
		this.numCapturedButterflyes++;
	};

	Player.prototype.updateCoin = function(coin, increase) {
		
		console.log("此次增加的金币"+coin);
        
        console.log(increase);	
        if(increase){
        	updateUser("user", "money", coin);
        }
		
        if(!increase){
        	$("#levelbar").html(getlevel);
        	//更改进度条显示
            var probar_x = parseInt((852-674)* getexp/(300+getlevel*100))+674;
            var probar = document.getElementById("probar");
            probar.style.position="absolute";
            probar.style.left=probar_x+"px";
            probar.style.top="43px";
        }
		//捕到的蝴蝶获得的金币
		if(coin>0&&coin<=90){
			playButtterSound();
			startDraw(1);
			getexp+=coin;
			//向数据库传入经验值
			updateUser("user", "exp", coin)
			
			if(getexp>=300+getlevel*100){
				
				updateUser("user", "exp", -(300+getlevel*100));
				
				getexp=getexp-(300+getlevel*100);
				
                //更改进度条显示
                var probar_x = parseInt((852-674)* getexp/(300+(getlevel+1)*100))+674;
                var probar = document.getElementById("probar");
                probar.style.position="absolute";
                probar.style.left=probar_x+"px";
                probar.style.top="43px";
                
                //向数据库传入等级值
				getlevel=getlevel+1;
				//更改等级显示
				updateUser("user", "level", 1);
				
               $("#levelbar").html(getlevel);
			}else{
                //更改进度条显示
                var probar_x = parseInt((852-674)* getexp/(300+getlevel*100))+674;
                var probar = document.getElementById("probar");
                probar.style.position="absolute";
                probar.style.left=probar_x+"px";
                probar.style.top="43px";
            }
		}
		if(coin<-2){
			playBeeSound()
			startDraw(2);
		}

		
		console.log("现在的经验值"+getexp);
		console.log("现在的等级值"+getlevel);
		
        //卖道具消耗的金币
       if(coin>=-700&&coin<=-150){
       }

		if (increase){
			this.coin += coin;
		}
		else{
			this.coin = coin;
		}
		if (this.coin > 999999){
			this.coin = 999999;
			playAllow=false;
		}
		else if (this.coin <= 0){
			updateUser("user", "money", -this.coin);
			this.coin = 0;
			playAllow=false;
		}
		else{
			playAllow=true;
		}	

        getmoney =this.coin;
        console.log("getmoney"+getmoney);
        
        this.coinNum.setValue(this.coin);
	};
})();