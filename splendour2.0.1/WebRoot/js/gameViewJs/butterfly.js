var caughtState = 0;
var speedState = 0;

(function() {

	var ns = Q.use("butterfly"), game = ns.game;

	var Butterfly = ns.Butterfly = function(type) {
		this.type = type;
		this.speed = 1.0;
		this.moving = true;
		this.canTurning = false;
		this.hasShown = false;
		this.captured = false;

		this.num = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

		Butterfly.superClass.constructor.call(this, type);
		this.id = Q.UIDUtil.createUID("Butterfly");
	};
	Q.inherit(Butterfly, Q.MovieClip);

	Butterfly.prototype.init = function(props) {
		this.changeDirection(this.rotation);
	};
	// 新增
	Butterfly.prototype.addNum = function(index) {
		this.num[index] = this.num[index] + 1
	};

	Butterfly.prototype.setType = function(type) {
		Q.merge(this, type, true);
		Q.merge(this, type.mixin, false);

		this.setDrawable(type.image);
		this._frames.length = 0;
		this.addFrame(type.frames);
		this.gotoAndPlay(0);
	};

	Butterfly.prototype.changeDirection = function(dir) {
		if (dir != undefined) {
			this.setDirection(dir);
		} else {
			var chance = Math.random() > 0.80;
			if (chance) {
				var dir = Math.random() > 0.5 ? 1 : -1;
				var degree = Math.random() * 10 + 20 >> 0;
				this._destRotation = this.rotation + degree * dir >> 0;
			}
		}

		var fps = game.fps, min = fps * 5, max = fps * 10;
		this.changeDirCounter = Math.random() * (max - min + 1) + min >> 1;
	};

	Butterfly.prototype.setDirection = function(dir) {
		if (this.rotation == dir && this.speedX != undefined)
			return;

		if (dir.degree == undefined) {
			var radian = dir * Q.DEG_TO_RAD;
			dir = {
				degree : dir,
				sin : Math.sin(radian),
				cos : Math.cos(radian)
			};
		}

		this.rotation = dir.degree % 360;
		if (speedState == 0) {
			this.speedX = this.speed * dir.cos;
			this.speedY = this.speed * dir.sin;
		} else {
			this.speedX = 0.2 * dir.cos;
			this.speedY = 0.2 * dir.sin;
		}
	};

	Butterfly.prototype.canBeCaptured = function(level) {
		if (caughtState == 0) {
			return this.captureRate * (1 + level * 0.05) > Math.random();
		} else if (caughtState == 2) {
			if (this.captureRate == 0.9) {
				return true;
			}
			return false;
		}
		return true;
	};

	Butterfly.prototype.update = function() {
		// be captured
		if (this.captured) {
			if (--this.capturingCounter <= 0) {
				// coin animation
				var type = this.coin >= 10 ? ns.R.coinAni2 : ns.R.coinAni1;
				var coin = new Q.MovieClip(type);
				coin.x = this.x;
				coin.y = this.y;
				this.parent.addChild(coin);

				// 金币计数
				if (caughtState == 2) {
					var value = "+" + 5;
				} else {
					var value = "+" + this.coin.toString();
				}
				var num = new ns.Num( {
					id : "coinCount",
					src : ns.R.coinText,
					max : value.length,
					gap : 3,
					scaleX : 0.8,
					scaleY : 0.8
				});
				num.x = this.x;
				num.y = this.y;
				num.setValue(value);

				if (value == 1) {
					this.addNum(0);
					btfnum[0]++;
					if(btfselt==0){
						$('#filename').html(
							'<p></br>&nbsp;粉蝶</p>&nbsp;捕到的数目：' + btfnum[0]);
					}
					updateBT("butterfly", "btfnum", 1, "btf1");
					
					console.log("捕到第1种蝴蝶的数目：" + btfnum[0]);
				}
				if (value == 3) {
					this.addNum(1);
					btfnum[1]++;
					if(btfselt==1){
						$('#filename').html(
								'<p></br>&nbsp;纹白蝶</p>&nbsp;捕到的数目：' + btfnum[1]);
					}
					updateBT("butterfly", "btfnum", 1, "btf2");
					
					console.log("捕到第2种蝴蝶的数目：" + btfnum[1]);
				}
				if (value == 5) {
					this.addNum(2);
					btfnum[2]++;
					if(btfselt==2){
						$('#filename').html(
								'<p></br>&nbsp;枯叶蝶</p>&nbsp;捕到的数目：' + btfnum[2]);
					}
					updateBT("butterfly", "btfnum", 1, "btf3");
					
					console.log("捕到第3种蝴蝶的数目：" + btfnum[2]);
				}
				if (value == 8) {
					this.addNum(3);
					btfnum[3]++;
					if(btfselt==3){
						$('#filename').html(
								'<p></br>&nbsp;金线蝶</p>&nbsp;捕到的数目：' + btfnum[3]);
					}
					updateBT("butterfly", "btfnum", 1, "btf4");
					
					console.log("捕到第4种蝴蝶的数目：" + btfnum[3]);
				}
				if (value == 10) {
					this.addNum(4);
					btfnum[4]++;
					if(btfselt==4){
						$('#filename').html(
								'<p></br>&nbsp;光明女神蝶</p>&nbsp;捕到的数目：' + btfnum[4]);
					}
					updateBT("butterfly", "btfnum", 1, "btf5");
					
					console.log("捕到第5种蝴蝶的数目：" + btfnum[4]);
				}
				if (value == 20) {
					this.addNum(5);
					btfnum[5]++;
					if(btfselt==5){
						$('#filename').html(
								'<p></br>&nbsp;红点粉蝶</p>&nbsp;捕到的数目：' + btfnum[5]);
					}
					updateBT("butterfly", "btfnum", 1, "btf6");
					
					console.log("捕到第6种蝴蝶的数目：" + btfnum[5]);
				}
				if (value == 30) {
					this.addNum(6);
					btfnum[6]++;
					if(btfselt==6){
						$('#filename').html(
								'<p></br>&nbsp;黑脉金斑蝶</p>&nbsp;捕到的数目：' + btfnum[6]);
					}
					updateBT("butterfly", "btfnum", 1, "btf7");
					
					console.log("捕到第7种蝴蝶的数目：" + btfnum[6]);
				}
				if (value == 40) {
					this.addNum(7);
					btfnum[7]++;
					if(btfselt==7){
						$('#filename').html(
								'<p></br>&nbsp;蓝凤蝶</p>&nbsp;捕到的数目：' + btfnum[7]);
					}
					updateBT("butterfly", "btfnum", 1, "btf8");
					
					console.log("捕到第8种蝴蝶的数目：" + btfnum[7]);
				}
				if (value == 50) {
					this.addNum(8);
					btfnum[8]++;
					if(btfselt==8){
						$('#filename').html(
								'<p></br>&nbsp;鸟翼蝶</p>&nbsp;捕到的数目：' + btfnum[8]);
					}
					updateBT("butterfly", "btfnum", 1, "btf9");
					
					console.log("捕到第9种蝴蝶的数目：" + btfnum[8]);
				}
				if (value == 60) {
					this.addNum(9);
					btfnum[9]++;
					if(btfselt==9){
						$('#filename').html(
								'<p></br>&nbsp;鬼美人蝶</p>&nbsp;捕到的数目：' + btfnum[9]);
					}
					updateBT("butterfly", "btfnum", 1, "btf10");
					
					console.log("捕到第10种蝴蝶的数目：" + btfnum[9]);
				}
				
				if (value == -60) {
					this.addNum(9);
				}
				if (value == 90) {
					this.addNum(10);
				}

				this.parent.addChild(num);

				Q.Tween.to(num, {
					y : num.y - 50
				}, {
					time : 800,
					onComplete : function(tween) {
						tween.target.parent.removeChild(tween.target);
					}
				});

				var tx = game.head.x+410, ty = game.height-180;
				// var tx = game.bottom.x + 100, ty = game.height;
				Q.Tween.to(coin, {
					x : tx,
					y : ty
				}, {
					time : 800,
					onComplete : function(tween) {
						tween.target.parent.removeChild(tween.target);
					}
				});

				// remove the butterfly to butterfly pool
				this.parent.removeChild(this);
				game.player.captureButterfly(this);
				game.butterflyManager.butterflyPool.push(this);
			}
			return;
		}

		// 移动
		if (this.moving) {
			this.x += this.speedX;
			this.y += this.speedY;
		}

		// 改变方向
		if (this._destRotation != null) {
			var delta = this._destRotation - this.rotation;
			var step = 0.1, realStep = delta > 0 ? step : -step;
			var r = this.rotation + realStep;

			if (delta == 0 || (realStep > 0 && r >= this._destRotation)
					|| (realStep < 0 && r <= this._destRotation)) {
				this.setDirection(this._destRotation);
				this._destRotation = null;
			} else {
				this.setDirection(r);
			}
		} else if (--this.changeDirCounter <= 0 && this.canTurning) {
			this.changeDirection();
		}
	};

	Butterfly.prototype.isOutOfScreen = function() {
		if (this.x < -this.width || this.x > game.width + this.width
				|| this.y < -this.height || this.y > game.height + this.height) {
			return true;
		} else if (this.x > 100 && this.x < game.width - 100 && this.y > 100
				&& this.y < game.height - 100) {
			this.canTurning = true;
		}
		return false;
	};

})();