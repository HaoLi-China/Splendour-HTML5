(function() {

	var ns = Q.use("butterfly"), game = ns.game;

	var Net = ns.Net = function(props) {
		this.power = 0;
		this.speedX = 0;
		this.speedY = 0;

		Net.superClass.constructor.call(this, props);
		this.id = Q.UIDUtil.createUID("Net");
	};
	Q.inherit(Net, Q.Bitmap);

	Net.prototype.update = function(timeInfo) {
		if (this.isOutOfScreen()) {
			this.destory();
		} else {
			if (this.checkCollision())
				this.destory();
			// 修改
			else
				this.destory();
		}
	};

	Net.prototype.checkCollision = function() {
		var butterflyes = game.butterflyManager.butterflyes, len = butterflyes.length;

		// 检测蝴蝶是否被袭击
		var hitted = false;
		for ( var i = 0; i < len; i++) {
			var butterfly = butterflyes[i];
			if (this.y - this.height * 0.5 > butterfly.y + butterfly.height
					* 0.5
					|| this.y + this.height * 0.5 < butterfly.y
							- butterfly.height * 0.5
					|| this.x - this.width * 0.5 > butterfly.x
							+ butterfly.width * 0.5
					|| this.x + this.width * 0.5 < butterfly.x
							- butterfly.width * 0.5) {
				continue;
			}
			if (this.hitTestObject(butterfly, true)) {
				hitted = true;
				break;
			}
		}
		if (hitted === false)
			return false;

		// 检测蝴蝶是否被捕获
		for ( var i = 0; i < len; i++) {
			var butterfly = butterflyes[i];
			console.log(this.y+"  "+butterfly.y);
			if (this.y - this.height * 0.5 > butterfly.y + butterfly.height
					
					|| this.y + this.height * 0.5 < butterfly.y
							- butterfly.height 
					|| this.x - this.width * 0.5 > butterfly.x
							+ butterfly.width 
					|| this.x + this.width * 0.5 < butterfly.x
							- butterfly.width )
			{
				continue;
			}
			if (this.hitTestObject(butterfly, true)
					&& butterfly.canBeCaptured(this.power - 1)) {
				butterfly.moving = false;
				butterfly.captured = true;

				butterfly.capturingCounter = game.fps >> 1;
				butterfly.gotoAndPlay("capture");
			}
		}
		return true;
	};

	Net.prototype.destory = function() {
		this.parent.removeChild(this);
	};

	Net.prototype.isOutOfScreen = function() {
		return (this.x < -50 || this.x > game.width + 50 || this.y < -50 || this.y > game.height + 50);
	};

})();