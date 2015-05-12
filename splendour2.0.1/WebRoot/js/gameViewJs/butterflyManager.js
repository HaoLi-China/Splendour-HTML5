var groupState = 0;

(function() {

	var ns = Q.use("butterfly"), game = ns.game;

	var ButterflyManager = ns.ButterflyManager = function(container) {
		this.butterflyPool = [];
		this.poolSize = game.params.num || 12;
		this.minNumButterflyScreen = this.poolSize >> 1;
		this.maxNumButterflyScreen = this.poolSize;
		this.enabled = true;

		this.container = container;
		this.butterflyes = [];
		this.makeCounter = game.fps * 2;

		this.initPool();
	};

	ButterflyManager.prototype.initPool = function() {
		for ( var i = 0; i < this.poolSize; i++) {
			var butterfly = new ns.Butterfly(ns.R.butterflyTypes[1]);
			butterfly.getDrawable(game.stage.context);
			this.butterflyPool[i] = butterfly;

		}
	};

	ButterflyManager.prototype.update = function() {
		if (!this.enabled)
			return;

		for ( var i = 0; i < this.butterflyes.length; i++) {
			var butterfly = this.butterflyes[i];
			if (butterfly.captured) {
				this.butterflyes.splice(i, 1);
				i--;
			} else if (butterfly.isOutOfScreen()) {
				if (butterfly.hasShown
						|| butterfly.changeDirCounter < -game.fps * 10) {
					this.butterflyes.splice(i, 1);
					this.butterflyPool.push(butterfly);
					butterfly.parent.removeChild(butterfly);
					i--;
				}
			} else if (!butterfly.hasShown) {
				butterfly.hasShown = true;
			}
		}

		if (--this.makeCounter <= 0) {
			this.makeCounter = this.butterflyes.length < this.minNumButterflyScreen ? game.fps * 2
					: game.fps * 3;
			this.makeButterfly();
		}
	};

	ButterflyManager.prototype.makeButterfly = function() {
		if (this.butterflyes.length >= this.poolSize)
			return;

		// 产生随机数从而确定蝴蝶类型
		var len = ns.R.butterflyTypes.length;
		//console.log("getlevel"+getlevel);
		if(getlevel<10){
			var chance = Math.random() * (len-6) >> 0;
		}
		else if(getlevel>=10&&getlevel<20){
			var chance = Math.random() * (len-5) >> 0;
		}
		else if(getlevel>=20&&getlevel<30){
			var chance = Math.random() * (len-4) >> 0;
		}
		else if(getlevel>=30&&getlevel<40){
			var chance = Math.random() * (len-3) >> 0;
		}
		else{
			var chance = Math.random() * (len-2) >> 0;
		}
		
		var index=0;
		console.log("groupState"+groupState);
		if (groupState == 0) {
			var ramdom = Math.random() *48 + 1 >> 0;
			if(ramdom==48){
				index = 12;
			}
			else if(ramdom<48&&ramdom>=42){
				index = 11;
			}
			else{
				index = Math.random() *chance + 1 >> 0;
			}
		}
		else {
			index = 12;
		}
		console.log("index"+index);

		var type = ns.R.butterflyTypes[index];

		var num = Math.random() * type.mixin.maxNumGroup + 1 >> 0;
		if (num > this.butterflyPool.length)
			num = this.butterflyPool.length;
		if (num <= 0)
			return;

		// 初始化蝴蝶参数
		var group = this.butterflyPool.splice(0, num), cy = game.height >> 1;
		var typeWidth = type.frames[0].rect[2], typeHeight = type.frames[0].rect[3];
		var sx = Math.random() > 0.5 ? -typeWidth : game.width + typeWidth;
		var sy = Math.random() * 200 + (game.height >> 1) - 100 >> 0;
		var speed = Math.random() * (type.mixin.maxSpeed - type.mixin.minSpeed)
				+ type.mixin.minSpeed;
		var degree = (Math.random() * 20 - 10 >> 0);
		if (sx > 0)
			degree += 180;
		// 使蝴蝶动起来
		for ( var i = 0; i < num; i++) {
			var butterfly = group[i];
			butterfly.setType(type);
			butterfly.moving = true;
			butterfly.canTurning = true;
			butterfly.hasShown = false;
			butterfly.captured = false;
			butterfly.speed = speed;
			butterfly.setDirection(degree);
			butterfly.changeDirection(degree);

			this.butterflyes.push(butterfly);
			this.container.addChild(butterfly);
		}
		ns.ButterflyGroup.setRandomPatten(group, sx, sy);
	};

})();