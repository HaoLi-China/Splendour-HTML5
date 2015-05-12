/**
 * Resource Manager.
 */

(function() {

	var ns = Q.use("butterfly");

	var R = ns.R = {};
	R.sources = [ {
		id : "mainbg",
		size : 456,
		src : "images/gameViewImage/chinascene.png?" + Math.random()
	}, {
		id : "mainbg1",
		size : 456,
		src : "images/gameViewImage/chinascene.png?" + Math.random()
	}, {
		id : "mainbg2",
		size : 456,
		src : "images/gameViewImage/northamericascene.png?" + Math.random()
	}, {
		id : "mainbg3",
		size : 456,
		src : "images/gameViewImage/southamericascene.png?" + Math.random()
	}, {
		id : "mainbg4",
		size : 456,
		src : "images/gameViewImage/europescene.png?" + Math.random()
	}, {
		id : "mainbg5",
		size : 456,
		src : "images/gameViewImage/austriliascene.png?" + Math.random()
	},

	{
		id : "bottom",
		size : 50,
		src : "images/gameViewImage/bottom.gif?" + Math.random()
	}, {
		id : "butterfly1",
		size : 6,
		src : "images/gameViewImage/butterfly1.png?" + Math.random()
	}, {
		id : "butterfly2",
		size : 16,
		src : "images/gameViewImage/butterfly2.png?" + Math.random()
	}, {
		id : "butterfly3",
		size : 11,
		src : "images/gameViewImage/butterfly3.png?" + Math.random()
	}, {
		id : "butterfly4",
		size : 15,
		src : "images/gameViewImage/butterfly4.png?" + Math.random()
	}, {
		id : "butterfly5",
		size : 43,
		src : "images/gameViewImage/butterfly5.png?" + Math.random()
	}, {
		id : "butterfly6",
		size : 45,
		src : "images/gameViewImage/butterfly6.png?" + Math.random()
	}, {
		id : "butterfly7",
		size : 80,
		src : "images/gameViewImage/butterfly7.png?" + Math.random()
	}, {
		id : "butterfly8",
		size : 100,
		src : "images/gameViewImage/butterfly8.png?" + Math.random()
	}, {
		id : "butterfly9",
		size : 104,
		src : "images/gameViewImage/butterfly9.png?" + Math.random()
	}, {
		id : "butterfly10",
		size : 121,
		src : "images/gameViewImage/butterfly10.png?" + Math.random()
	},

	{
		id : "butterfly11",
		size : 121,
		src : "images/gameViewImage/bee.png?" + Math.random()
	}, {
		id : "butterfly12",
		size : 121,
		src : "images/gameViewImage/dragonfly.png?" + Math.random()
	},

	{
		id : "hand1",
		size : 11,
		src : "images/gameViewImage/hand1.gif?" + Math.random()
	}, {
		id : "hand2",
		size : 11,
		src : "images/gameViewImage/hand1.gif?" + Math.random()
	}, {
		id : "hand3",
		size : 11,
		src : "images/gameViewImage/hand1.gif?" + Math.random()
	}, {
		id : "hand4",
		size : 13,
		src : "images/gameViewImage/hand1.gif?" + Math.random()
	}, {
		id : "hand5",
		size : 13,
		src : "images/gameViewImage/hand1.gif?" + Math.random()
	}, {
		id : "hand6",
		size : 15,
		src : "images/gameViewImage/hand1.gif?" + Math.random()
	}, {
		id : "hand7",
		size : 17,
		src : "images/gameViewImage/hand1.gif?" + Math.random()
	},

	{
		id : "net",
		size : 8,
		src : "images/gameViewImage/net.png?" + Math.random()
	}, {
		id : "web",
		size : 93,
		src : "images/gameViewImage/web.png?" + Math.random()
	}, {
		id : "numBlack",
		size : 1,
		src : "images/gameViewImage/number_black.png?" + Math.random()
	}, {
		id : "coinAni1",
		size : 19,
		src : "images/gameViewImage/coinAni1.png?" + Math.random()
	}, {
		id : "coinAni2",
		size : 22,
		src : "images/gameViewImage/coinAni2.png?" + Math.random()
	}, {
		id : "coinText",
		size : 16,
		src : "images/gameViewImage/coinText.png?" + Math.random()
	}, {
		id : "shop1",
		size : 22,
		src : "images/gameViewImage/shop1.png?" + Math.random()
	}, {
		id : "removebee1",
		size : 22,
		src : "images/gameViewImage/removebee1.png?" + Math.random()
	}, {
		id : "butterflygod1",
		size : 22,
		src : "images/gameViewImage/butterflygod1.png?" + Math.random()
	}, {
		id : "net11",
		size : 19,
		src : "images/gameViewImage/net11.png?" + Math.random()
	}, {
		id : "lure1",
		size : 22,
		src : "images/gameViewImage/lure1.png?" + Math.random()
	}, {
		id : "clock1",
		size : 16,
		src : "images/gameViewImage/clock1.png?" + Math.random()
	}, {
		id : "head",
		size : 50,
		src : "images/gameViewImage/toolbar6-1.png?" + Math.random()
	} ];

	R.init = function(images) {

		getBT();
		
		this.images = images;

		this.initResources();
	};

	R.initResources = function() {
		var t = 1;

		if (getCookie("background") == "0") {
			this.mainbg = this.getImage("mainbg1");
		} else if (getCookie("background") == "1") {
			this.mainbg = this.getImage("mainbg2");
		} else if (getCookie("background") == "2") {
			this.mainbg = this.getImage("mainbg3");
		} else if (getCookie("background") == "3") {
			this.mainbg = this.getImage("mainbg4");
		} else if (getCookie("background") == "4") {
			this.mainbg = this.getImage("mainbg5");
		} else {
			this.mainbg = this.getImage("mainbg");
		}
		this.shop1 = this.getImage("shop1");
		this.shopbar1 = {
			image : this.shop1,
			rect : [ 0, 0, 80, 80 ]
		};
		this.removebee = this.getImage("removebee1");
		this.removebeebar = {
			image : this.removebee,
			rect : [ 0, 0, 80, 80 ]
		};
		this.butterflygod = this.getImage("butterflygod1");
		this.butterflygodbar = {
			image : this.butterflygod,
			rect : [ 0, 0, 58, 90 ]
		};
		this.net = this.getImage("net11");
		this.netbar = {
			image : this.net,
			rect : [ 0, 0, 90, 90 ]
		};
		this.clock = this.getImage("clock1");
		this.clockbar = {
			image : this.clock,
			rect : [ 0, 0, 90, 90 ]
		};
		this.lure = this.getImage("lure1");
		this.lurebar = {
			image : this.lure,
			rect : [ 0, 0, 90, 90 ]
		};
		this.head = this.getImage("head");
		this.headbar = {
			image : this.head,
			rect : [ 0, 0, 830, 250 ]
		};

		this.numBlack = {
			image : this.getImage("numBlack"),
			9 : [ 0, 0, 20, 24 ],
			8 : [ 0, 24, 20, 24 ],
			7 : [ 0, 48, 20, 24 ],
			6 : [ 0, 72, 20, 24 ],
			5 : [ 0, 96, 20, 24 ],
			4 : [ 0, 120, 20, 24 ],
			3 : [ 0, 144, 20, 24 ],
			2 : [ 0, 168, 20, 24 ],
			1 : [ 0, 192, 20, 24 ],
			0 : [ 0, 216, 20, 24 ]
		};

		this.coinText = {
			image : this.getImage("coinText"),
			0 : [ 0, 0, 36, 49 ],
			1 : [ 36, 0, 36, 49 ],
			2 : [ 72, 0, 36, 49 ],
			3 : [ 108, 0, 36, 49 ],
			4 : [ 144, 0, 36, 49 ],
			5 : [ 180, 0, 36, 49 ],
			6 : [ 216, 0, 36, 49 ],
			7 : [ 252, 0, 36, 49 ],
			8 : [ 288, 0, 36, 49 ],
			9 : [ 324, 0, 36, 49 ],
			"+" : [ 360, 0, 36, 49 ],
			"-" : [ 396, 0, 36, 49 ]
		};

		this.coinAni1 = {
			image : this.getImage("coinAni1"),
			frames : [ {
				rect : [ 0, 0, 60, 60 ]
			}, {
				rect : [ 0, 60, 60, 60 ]
			}, {
				rect : [ 0, 120, 60, 60 ]
			}, {
				rect : [ 0, 180, 60, 60 ]
			}, {
				rect : [ 0, 240, 60, 60 ]
			}, {
				rect : [ 0, 300, 60, 60 ]
			}, {
				rect : [ 0, 360, 60, 60 ]
			}, {
				rect : [ 0, 420, 60, 60 ]
			}, {
				rect : [ 0, 480, 60, 60 ]
			}, {
				rect : [ 0, 540, 60, 60 ]
			} ],
			regX : 30,
			regY : 30,
			scaleX : 0.8,
			scaleY : 0.8,
			useFrames : true,
			interval : 2
		};

		this.coinAni2 = {
			image : this.getImage("coinAni2"),
			frames : [ {
				rect : [ 0, 0, 60, 60 ]
			}, {
				rect : [ 0, 60, 60, 60 ]
			}, {
				rect : [ 0, 120, 60, 60 ]
			}, {
				rect : [ 0, 180, 60, 60 ]
			}, {
				rect : [ 0, 240, 60, 60 ]
			}, {
				rect : [ 0, 300, 60, 60 ]
			}, {
				rect : [ 0, 360, 60, 60 ]
			}, {
				rect : [ 0, 420, 60, 60 ]
			}, {
				rect : [ 0, 480, 60, 60 ]
			}, {
				rect : [ 0, 540, 60, 60 ]
			} ],
			regX : 30,
			regY : 30,
			scaleX : 0.8,
			scaleY : 0.8,
			useFrames : true,
			interval : 2
		};

		var butterfly1 = {
			image : this.getImage("butterfly1"),
			frames : [ {
				rect : [ 0, 0, 80, 80 ],
				label : "swim"
			}, {
				rect : [ 0, 80, 80, 80 ]
			}, {
				rect : [ 0, 160, 80, 80 ]
			}, {
				rect : [ 0, 240, 80, 80 ]
			}, {
				rect : [ 0, 320, 80, 80 ]
			}, {
				rect : [ 0, 400, 80, 80 ]
			}, {
				rect : [ 0, 480, 80, 80 ]
			}, {
				rect : [ 0, 560, 80, 80 ]
			}, {
				rect : [ 0, 640, 80, 80 ]
			}, {
				rect : [ 0, 720, 80, 80 ]
			}, {
				rect : [ 0, 800, 80, 80 ]
			}, {
				rect : [ 0, 880, 80, 80 ],
				jump : "swim"
			}, {
				rect : [ 0, 960, 80, 80 ],
				label : "capture"
			}, {
				rect : [ 0, 1040, 80, 80 ]
			}, {
				rect : [ 0, 1120, 80, 80 ]
			}, {
				rect : [ 0, 1200, 80, 80 ]
			}, {
				rect : [ 0, 1280, 80, 80 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 10,
				y : 5
			}, {
				x : 55,
				y : 5
			}, {
				x : 55,
				y : 22
			}, {
				x : 10,
				y : 22
			} ],
			mixin : {
				coin : 1,
				captureRate : 1,
				maxNumGroup : 8,
				minSpeed : 0.5,
				maxSpeed : 1.2,
				regX : 35,
				regY : 12,
				useFrames : true,
				interval : 10
			}
		};
		var butterfly2 = {
			image : this.getImage("butterfly2"),
			frames : [ {
				rect : [ 0, 0, 60, 60 ],
				label : "swim"
			}, {
				rect : [ 0, 60, 60, 60 ]
			}, {
				rect : [ 0, 120, 60, 60 ]
			}, {
				rect : [ 0, 180, 60, 60 ]
			}, {
				rect : [ 0, 240, 60, 60 ]
			}, {
				rect : [ 0, 300, 60, 60 ]
			}, {
				rect : [ 0, 360, 60, 60 ]
			}, {
				rect : [ 0, 420, 60, 60 ]
			}, {
				rect : [ 0, 480, 60, 60 ]
			}, {
				rect : [ 0, 540, 60, 60 ]
			}, {
				rect : [ 0, 600, 60, 60 ]
			}, {
				rect : [ 0, 660, 60, 60 ],
				jump : "swim"
			}, {
				rect : [ 0, 720, 60, 60 ],
				label : "capture"
			}, {
				rect : [ 0, 780, 60, 60 ]
			}, {
				rect : [ 0, 840, 60, 60 ]
			}, {
				rect : [ 0, 900, 60, 60 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 20,
				y : 30
			}, {
				x : 100,
				y : 30
			}, {
				x : 100,
				y : 70
			}, {
				x : 20,
				y : 70
			} ],
			mixin : {
				coin : 3,
				captureRate : 1,
				maxNumGroup : 6,
				minSpeed : 0.5,
				maxSpeed : 1.2,
				regX : 67,
				regY : 50,
				useFrames : true,
				interval : 10
			}
		};
		
		var butterfly3 = {
			image : this.getImage("butterfly3"),
			frames : [ {
				rect : [ 0, 0, 70, 70 ],
				label : "swim"
			}, {
				rect : [ 0, 70, 70, 70 ]
			}, {
				rect : [ 0, 140, 70, 70 ]
			}, {
				rect : [ 0, 210, 70, 70 ]
			}, {
				rect : [ 0, 280, 70, 70 ]
			}, {
				rect : [ 0, 350, 70, 70 ]
			}, {
				rect : [ 0, 420, 70, 70 ]
			}, {
				rect : [ 0, 490, 70, 70 ]
			}, {
				rect : [ 0, 560, 70, 70 ]
			}, {
				rect : [ 0, 630, 70, 70 ]
			}, {
				rect : [ 0, 700, 70, 70 ]
			}, {
				rect : [ 0, 770, 70, 70 ],
				jump : "swim"
			}, {
				rect : [ 0, 840, 70, 70 ],
				label : "capture"
			}, {
				rect : [ 0, 910, 70, 70 ]
			}, {
				rect : [ 0, 980, 70, 70 ]
			}, {
				rect : [ 0, 1050, 70, 70 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 5,
				y : 5
			}, {
				x : 72,
				y : 5
			}, {
				x : 72,
				y : 28
			}, {
				x : 5,
				y : 28
			} ],
			mixin : {
				coin : 5,
				captureRate :1,
				maxNumGroup : 6,
				minSpeed : 0.5,
				maxSpeed : 1.2,
				regX : 52,
				regY : 18,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly4 = {
			image : this.getImage("butterfly4"),
			frames : [ {
				rect : [ 0, 0, 70, 70 ],
				label : "swim"
			}, {
				rect : [ 0, 70, 70, 70 ]
			}, {
				rect : [ 0, 140, 70, 70 ]
			}, {
				rect : [ 0, 210, 70, 70 ]
			}, {
				rect : [ 0, 280, 70, 70 ]
			}, {
				rect : [ 0, 350, 70, 70 ]
			}, {
				rect : [ 0, 420, 70, 70 ]
			}, {
				rect : [ 0, 490, 70, 70 ]
			}, {
				rect : [ 0, 560, 70, 70 ]
			}, {
				rect : [ 0, 630, 70, 70 ]
			}, {
				rect : [ 0, 700, 70, 70 ]
			}, {
				rect : [ 0, 770, 70, 70 ],
				jump : "swim"
			}, {
				rect : [ 0, 840, 70, 70 ],
				label : "capture"
			}, {
				rect : [ 0, 910, 70, 70 ]
			}, {
				rect : [ 0, 980, 70, 70 ]
			}, {
				rect : [ 0, 1050, 70, 70 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 10,
				y : 5
			}, {
				x : 77,
				y : 5
			}, {
				x : 77,
				y : 28
			}, {
				x : 10,
				y : 28
			} ],
			mixin : {
				coin : 8,
				captureRate : 1,
				maxNumGroup : 6,
				minSpeed : 0.5,
				maxSpeed : 1.2,
				regX : 57,
				regY : 18,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly5 = {
			image : this.getImage("butterfly5"),
			frames : [ {
				rect : [ 0, 0, 90, 90 ],
				label : "swim"
			}, {
				rect : [ 0, 90, 90, 90 ]
			}, {
				rect : [ 0, 180, 90, 90 ]
			}, {
				rect : [ 0, 270, 90, 90 ]
			}, {
				rect : [ 0, 360, 90, 90 ]
			}, {
				rect : [ 0, 450, 90, 90 ]
			}, {
				rect : [ 0, 540, 90, 90 ]
			}, {
				rect : [ 0, 630, 90, 90 ]
			}, {
				rect : [ 0, 720, 90, 90 ]
			}, {
				rect : [ 0, 810, 90, 90 ]
			}, {
				rect : [ 0, 900, 90, 90 ]
			}, {
				rect : [ 0, 990, 90, 90 ],
				jump : "swim"
			}, {
				rect : [ 0, 1080, 90, 90 ],
				label : "capture"
			}, {
				rect : [ 0, 1170, 90, 90 ]
			}, {
				rect : [ 0, 1260, 90, 90 ]
			}, {
				rect : [ 0, 1350, 90, 90 ]
			}, {
				rect : [ 0, 1440, 90, 90 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 15,
				y : 10
			}, {
				x : 78,
				y : 10
			}, {
				x : 78,
				y : 32
			}, {
				x : 15,
				y : 32
			} ],
			mixin : {
				coin : 10,
				captureRate : 1,
				maxNumGroup : 5,
				minSpeed : 0.5,
				maxSpeed : 1.2,
				regX : 58,
				regY : 20,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly6 = {
			image : this.getImage("butterfly6"),
			frames : [ {
				rect : [ 0, 0, 50, 80 ],
				label : "swim"
			}, {
				rect : [ 0, 80, 50, 80 ]
			}, {
				rect : [ 0, 160, 50, 80 ]
			}, {
				rect : [ 0, 240, 50, 80 ]
			}, {
				rect : [ 0, 400, 50, 80 ]
			}, {
				rect : [ 0, 480, 50, 80 ]
			}, {
				rect : [ 0, 560, 50, 80 ]
			}, {
				rect : [ 0, 640, 50, 80 ]
			}, {
				rect : [ 0, 720, 50, 80 ],
				jump : "swim"
			}, {
				rect : [ 0, 800, 50, 80 ],
				label : "capture"
			}, {
				rect : [ 0, 880, 50, 80 ]
			}, {
				rect : [ 0, 960, 50, 80 ]
			}, {
				rect : [ 0, 1040, 50, 80 ]
			}, {
				rect : [ 0, 1120, 50, 80 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 45,
				y : 0
			}, {
				x : 105,
				y : 0
			}, {
				x : 105,
				y : 55
			}, {
				x : 45,
				y : 55
			} ],
			mixin : {
				coin : 20,
				captureRate : 1,
				maxNumGroup : 3,
				minSpeed : 0.5,
				maxSpeed : 1.2,
				regX : 65,
				regY : 25,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly7 = {
			image : this.getImage("butterfly7"),
			frames : [ {
				rect : [ 0, 0, 66, 90 ],
				label : "swim"
			}, {
				rect : [ 0, 90, 66, 90 ]
			}, {
				rect : [ 0, 90 * 2, 66, 90 ]
			}, {
				rect : [ 0, 90 * 3, 66, 90 ]
			}, {
				rect : [ 0, 90 * 4, 66, 90 ]
			}, {
				rect : [ 0, 90 * 5, 66, 90 ]
			}, {
				rect : [ 0, 90 * 6, 66, 90 ]
			}, {
				rect : [ 0, 90 * 7, 66, 90 ]
			}, {
				rect : [ 0, 90 * 8, 66, 90 ]
			}, {
				rect : [ 0, 90 * 9, 66, 90 ]
			}, {
				rect : [ 0, 90 * 10, 66, 90 ]
			}, {
				rect : [ 0, 90 * 11, 66, 90 ],
				jump : "swim"
			}, {
				rect : [ 0, 90 * 12, 66, 90 ],
				label : "capture"
			}, {
				rect : [ 0, 90 * 13, 66, 90 ]
			}, {
				rect : [ 0, 90 * 14, 66, 90 ]
			}, {
				rect : [ 0, 90 * 15, 66, 90 ]
			}, {
				rect : [ 0, 90 * 16, 66, 90 ]
			}, {
				rect : [ 0, 90 * 17, 66, 90 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 15,
				y : 5
			}, {
				x : 85,
				y : 5
			}, {
				x : 85,
				y : 80
			}, {
				x : 15,
				y : 80
			} ],
			mixin : {
				coin : 30,
				captureRate : 1,
				maxNumGroup : 5,
				minSpeed : 0.5,
				maxSpeed : 0.8,
				regX : 40,
				regY : 50,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly8 = {
			image : this.getImage("butterfly8"),
			frames : [ {
				rect : [ 0, 0, 98, 100 ],
				label : "swim"
			}, {
				rect : [ 0, 100, 98, 100 ]
			}, {
				rect : [ 0, 200, 98, 100 ]
			}, {
				rect : [ 0, 300, 98, 100 ]
			}, {
				rect : [ 0, 400, 98, 100 ]
			}, {
				rect : [ 0, 500, 98, 100 ]
			}, {
				rect : [ 0, 600, 98, 100 ]
			}, {
				rect : [ 0, 700, 98, 100 ]
			}, {
				rect : [ 0, 800, 98, 100 ]
			}, {
				rect : [ 0, 900, 98, 100 ]
			}, {
				rect : [ 0, 1000, 98, 100 ]
			}, {
				rect : [ 0, 1100, 98, 100 ],
				jump : "swim"
			}, {
				rect : [ 0, 1200, 98, 100 ],
				label : "capture"
			}, {
				rect : [ 0, 1300, 98, 100 ]
			}, {
				rect : [ 0, 1400, 98, 100 ]
			}, {
				rect : [ 0, 1500, 98, 100 ]
			}, {
				rect : [ 0, 1600, 98, 100 ]
			}, {
				rect : [ 0, 1700, 98, 100 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 20,
				y : 20
			}, {
				x : 120,
				y : 20
			}, {
				x : 120,
				y : 75
			}, {
				x : 20,
				y : 75
			} ],
			mixin : {
				coin : 40,
				captureRate :1,
				maxNumGroup : 3,
				minSpeed : 0.5,
				maxSpeed : 0.8,
				regX : 90,
				regY : 50,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly9 = {
			image : this.getImage("butterfly9"),
			frames : [ {
				rect : [ 0, 0, 150, 200 ],
				label : "swim"
			}, {
				rect : [ 0, 200, 150, 200 ]
			}, {
				rect : [ 0, 200 * 2, 150, 200 ]
			}, {
				rect : [ 0, 200 * 3, 150, 200 ]
			}, {
				rect : [ 0, 200 * 4, 150, 200 ]
			}, {
				rect : [ 0, 200 * 5, 150, 200 ]
			}, {
				rect : [ 0, 200 * 6, 150, 200 ]
			}, {
				rect : [ 0, 200 * 7, 150, 200 ]
			}, {
				rect : [ 0, 200 * 8, 150, 200 ]
			}, {
				rect : [ 0, 200 * 9, 150, 200 ]
			}, {
				rect : [ 0, 200 * 10, 150, 200 ]
			}, {
				rect : [ 0, 200 * 11, 150, 200 ],
				jump : "swim"
			}, {
				rect : [ 0, 200 * 12, 150, 200 ],
				label : "capture"
			}, {
				rect : [ 0, 200 * 13, 150, 200 ]
			}, {
				rect : [ 0, 200 * 14, 150, 200 ]
			}, {
				rect : [ 0, 200 * 15, 150, 200 ]
			}, {
				rect : [ 0, 200 * 16, 150, 200 ]
			}, {
				rect : [ 0, 200 * 17, 150, 200 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 60,
				y : 10
			}, {
				x : 160,
				y : 10
			}, {
				x : 160,
				y : 140
			}, {
				x : 60,
				y : 140
			} ],
			mixin : {
				coin : 50,
				captureRate : 1,
				maxNumGroup : 2,
				minSpeed : 0.5,
				maxSpeed : 0.8,
				regX : 120,
				regY : 70,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly10 = {
			image : this.getImage("butterfly10"),
			frames : [ {
				rect : [ 0, 0, 120, 120 ],
				label : "swim"
			}, {
				rect : [ 0, 120, 120, 120 ]
			}, {
				rect : [ 0, 120 * 2, 120, 120 ]
			}, {
				rect : [ 0, 120 * 3, 120, 120 ]
			}, {
				rect : [ 0, 120 * 4, 120, 120 ]
			}, {
				rect : [ 0, 120 * 5, 120, 120 ]
			}, {
				rect : [ 0, 120 * 6, 120, 120 ]
			}, {
				rect : [ 0, 120 * 7, 120, 120 ]
			}, {
				rect : [ 0, 120 * 8, 120, 120 ]
			}, {
				rect : [ 0, 120 * 9, 120, 120 ]
			}, {
				rect : [ 0, 120 * 10, 120, 120 ]
			}, {
				rect : [ 0, 120 * 11, 120, 120 ],
				jump : "swim"
			}, {
				rect : [ 0, 120 * 12, 120, 120 ],
				label : "capture"
			}, {
				rect : [ 0, 120 * 13, 120, 120 ]
			}, {
				rect : [ 0, 120 * 14, 120, 120 ]
			}, {
				rect : [ 0, 120 * 15, 120, 120 ]
			}, {
				rect : [ 0, 120 * 16, 120, 120 ]
			}, {
				rect : [ 0, 120 * 17, 120, 120 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 20,
				y : 30
			}, {
				x : 170,
				y : 30
			}, {
				x : 170,
				y : 120
			}, {
				x : 20,
				y : 120
			} ],
			mixin : {
				coin : 60,
				captureRate : 1,
				maxNumGroup : 2,
				minSpeed : 0.5,
				maxSpeed : 0.8,
				regX : 100,
				regY : 80,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly11 = {
			image : this.getImage("butterfly11"),
			frames : [ {
				rect : [ 0, 0, 70, 115 ],
				label : "swim"
			}, {
				rect : [ 0, 115, 70, 115 ],
				jump : "swim"
			}, {
				rect : [ 0, 115 * 2, 70, 115 ],
				label : "capture"
			}, {
				rect : [ 0, 115 * 3, 70, 115 ]
			}, {
				rect : [ 0, 115 * 4, 70, 115 ]
			}, {
				rect : [ 0, 115 * 5, 70, 115 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 20,
				y : 30
			}, {
				x : 170,
				y : 30
			}, {
				x : 170,
				y : 120
			}, {
				x : 20,
				y : 120
			} ],
			mixin : {
				coin : -99,
				captureRate :1,
				maxNumGroup : 8,
				minSpeed : 0.5,
				maxSpeed : 1.5,
				regX : 100,
				regY : 80,
				useFrames : true,
				interval : 10
			}
		};

		var butterfly12 = {
			image : this.getImage("butterfly12"),
			frames : [ {
				rect : [ 0, 0, 100, 120 ],
				label : "swim"
			}, {
				rect : [ 0, 120, 100, 120 ],
				jump : "swim"
			}, {
				rect : [ 0, 120 * 2, 100, 120 ],
				label : "capture"
			}, {
				rect : [ 0, 120 * 3, 100, 120 ]
			}, {
				rect : [ 0, 120 * 4, 100, 120 ]
			}, {
				rect : [ 0, 120 * 5, 100, 120 ],
				jump : "capture"
			} ],
			polyArea : [ {
				x : 20,
				y : 30
			}, {
				x : 170,
				y : 30
			}, {
				x : 170,
				y : 120
			}, {
				x : 20,
				y : 120
			} ],
			mixin : {
				coin : 99,
				captureRate : 1,
				maxNumGroup : 2,
				minSpeed : 0.8,
				maxSpeed : 1.5,
				regX : 100,
				regY : 80,
				useFrames : true,
				interval : 10
			}
		};

		var hand1 = {
			image : this.getImage("hand1"),
			frames : [ {
				rect : [ 0, 0, 74, 74 ]
			}, {
				rect : [ 0, 74, 74, 74 ]
			}, {
				rect : [ 0, 148, 74, 74 ]
			}, {
				rect : [ 0, 222, 74, 74 ]
			}, {
				rect : [ 0, 296, 74, 74 ],
				stop : 1
			} ],
			mixin : {
				regX : 37,
				regY : 45,
				useFrames : true,
				interval : 3,
				power : 1
			}
		};

		var hand2 = {
			image : this.getImage("hand2"),
			frames : [ {
				rect : [ 0, 0, 74, 76 ]
			}, {
				rect : [ 0, 76, 74, 76 ]
			}, {
				rect : [ 0, 152, 74, 76 ]
			}, {
				rect : [ 0, 228, 74, 76 ]
			}, {
				rect : [ 0, 304, 74, 76 ],
				stop : 1
			} ],
			mixin : {
				regX : 37,
				regY : 46,
				useFrames : true,
				interval : 3,
				power : 2
			}
		};

		var hand3 = {
			image : this.getImage("hand3"),
			frames : [ {
				rect : [ 0, 0, 74, 76 ]
			}, {
				rect : [ 0, 76, 74, 76 ]
			}, {
				rect : [ 0, 152, 74, 76 ]
			}, {
				rect : [ 0, 228, 74, 76 ]
			}, {
				rect : [ 0, 304, 74, 76 ],
				stop : 1
			} ],
			mixin : {
				regX : 37,
				regY : 46,
				useFrames : true,
				interval : 3,
				power : 3
			}
		};

		var hand4 = {
			image : this.getImage("hand4"),
			frames : [ {
				rect : [ 0, 0, 74, 83 ]
			}, {
				rect : [ 0, 83, 74, 83 ]
			}, {
				rect : [ 0, 166, 74, 83 ]
			}, {
				rect : [ 0, 249, 74, 83 ]
			}, {
				rect : [ 0, 332, 74, 83 ],
				stop : 1
			} ],
			mixin : {
				regX : 37,
				regY : 52,
				useFrames : true,
				interval : 3,
				power : 4
			}
		};

		var hand5 = {
			image : this.getImage("hand5"),
			frames : [ {
				rect : [ 0, 0, 74, 85 ]
			}, {
				rect : [ 0, 85, 74, 85 ]
			}, {
				rect : [ 0, 170, 74, 85 ]
			}, {
				rect : [ 0, 255, 74, 85 ]
			}, {
				rect : [ 0, 340, 74, 85 ],
				stop : 1
			} ],
			mixin : {
				regX : 37,
				regY : 55,
				useFrames : true,
				interval : 3,
				power : 5
			}
		};

		var hand6 = {
			image : this.getImage("hand6"),
			frames : [ {
				rect : [ 0, 0, 74, 90 ]
			}, {
				rect : [ 0, 90, 74, 90 ]
			}, {
				rect : [ 0, 180, 74, 90 ]
			}, {
				rect : [ 0, 270, 74, 90 ]
			}, {
				rect : [ 0, 360, 74, 90 ],
				stop : 1
			} ],
			mixin : {
				regX : 37,
				regY : 58,
				useFrames : true,
				interval : 3,
				power : 6
			}
		};

		var hand7 = {
			image : this.getImage("hand7"),
			frames : [ {
				rect : [ 0, 0, 74, 94 ]
			}, {
				rect : [ 0, 94, 74, 94 ]
			}, {
				rect : [ 0, 188, 74, 94 ]
			}, {
				rect : [ 0, 282, 74, 94 ]
			}, {
				rect : [ 0, 376, 74, 94 ],
				stop : 1
			} ],
			mixin : {
				regX : 37,
				regY : 60,
				useFrames : true,
				interval : 3,
				power : 7
			}
		};

		// this.butterflyTypes = [null, butterfly1, butterfly2, butterfly3,
		// butterfly4, butterfly5, butterfly6, butterfly8, butterfly9,
		// butterfly10, butterfly7, shark1, shark2];
		this.butterflyTypes = [ null, butterfly1, butterfly2, butterfly3,
				butterfly4, butterfly5, butterfly6, butterfly7, butterfly8,
				butterfly9, butterfly10, butterfly11, butterfly12 ];
		this.handTypes = [ null, hand1, hand2, hand3, hand4, hand5, hand6,
				hand7 ];

		var net = this.getImage("net");
		this.nets = [ {
			image : net,
			rect : [ 86, 0, 24, 26 ],
			regX : 12,
			regY : 13
		}, {
			image : net,
			rect : [ 61, 0, 25, 29 ],
			regX : 12,
			regY : 14
		}, {
			image : net,
			rect : [ 32, 35, 27, 31 ],
			regX : 13,
			regY : 15
		}, {
			image : net,
			rect : [ 30, 82, 29, 33 ],
			regX : 14,
			regY : 16
		}, {
			image : net,
			rect : [ 0, 82, 30, 34 ],
			regX : 15,
			regY : 17
		}, {
			image : net,
			rect : [ 30, 0, 31, 35 ],
			regX : 15,
			regY : 17
		}, {
			image : net,
			rect : [ 0, 44, 1024, 680 ],
			regX : 512,
			regY : 340
		} ];

		var web = this.getImage("web");
		this.webs = [ {
			image : web,
			rect : [ 319, 355, 116, 118 ],
			regX : 58,
			regY : 59,
			polyArea : [ {
				x : 20,
				y : 20
			}, {
				x : 100,
				y : 20
			}, {
				x : 100,
				y : 100
			}, {
				x : 20,
				y : 100
			} ]
		}, {
			image : web,
			rect : [ 0, 399, 137, 142 ],
			regX : 68,
			regY : 71,
			polyArea : [ {
				x : 20,
				y : 20
			}, {
				x : 120,
				y : 20
			}, {
				x : 120,
				y : 120
			}, {
				x : 20,
				y : 120
			} ]
		}, {
			image : web,
			rect : [ 163, 355, 156, 162 ],
			regX : 78,
			regY : 81,
			polyArea : [ {
				x : 20,
				y : 20
			}, {
				x : 140,
				y : 20
			}, {
				x : 140,
				y : 140
			}, {
				x : 20,
				y : 140
			} ]
		}, {
			image : web,
			rect : [ 242, 181, 180, 174 ],
			regX : 90,
			regY : 87,
			polyArea : [ {
				x : 20,
				y : 20
			}, {
				x : 160,
				y : 20
			}, {
				x : 160,
				y : 160
			}, {
				x : 20,
				y : 160
			} ]
		}, {
			image : web,
			rect : [ 0, 244, 163, 155 ],
			regX : 81,
			regY : 77,
			polyArea : [ {
				x : 10,
				y : 10
			}, {
				x : 150,
				y : 10
			}, {
				x : 150,
				y : 150
			}, {
				x : 10,
				y : 150
			} ]
		}, {
			image : web,
			rect : [ 242, 0, 191, 181 ],
			regX : 95,
			regY : 90,
			polyArea : [ {
				x : 10,
				y : 10
			}, {
				x : 180,
				y : 10
			}, {
				x : 180,
				y : 180
			}, {
				x : 10,
				y : 180
			} ]
		}, {
			image : web,
			rect : [ 0, 0, 242, 244 ],
			regX : 121,
			regY : 122,
			polyArea : [ {
				x : 30,
				y : 30
			}, {
				x : 210,
				y : 30
			}, {
				x : 210,
				y : 210
			}, {
				x : 30,
				y : 210
			} ]
		} ];
	};

	R.convertPlistImage = function() {
		this.butterfly = this.getImage("butterfly");
		this.shark = this.getImage("shark");
		this.hand = this.getImage("hand");

		var dict = [ {
			frame : [ 1438, 419, 60, 60 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 60, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1396, 507, 60, 60 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 60, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1377, 419, 60, 60 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 60, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1051, 1295, 54, 60 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 3, 0, 54, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 644, 1254, 42, 60 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 9, 0, 42, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 133, 2018, 28, 60 ],
			offset : [ -1, 0 ],
			rotated : true,
			sourceRect : [ 15, 0, 28, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 0, 2025, 14, 60 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 23, 0, 14, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 934, 685, 26, 60 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 17, 0, 26, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 583, 1254, 42, 60 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 9, 0, 42, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1034, 1372, 54, 60 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 2, 0, 54, 60 ],
			sourceSize : [ 60, 60 ]
		} ];
		var props = {
			maxNumGroup : 8,
			minSpeed : 0.5,
			maxSpeed : 1.2,
			regX : 35,
			regY : 12,
			useFrames : true,
			interval : 10
		};
		var coinAni1 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 1522, 78, 60, 60 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 60, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1470, 248, 60, 60 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 60, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1439, 329, 60, 60 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 60, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1134, 1163, 54, 60 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 3, 0, 54, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1337, 670, 42, 60 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 9, 0, 42, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 194, 2018, 28, 60 ],
			offset : [ -1, 0 ],
			rotated : true,
			sourceRect : [ 15, 0, 28, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 61, 2025, 14, 60 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 23, 0, 14, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1356, 570, 26, 60 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 17, 0, 26, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 705, 1254, 42, 60 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 9, 0, 42, 60 ],
			sourceSize : [ 60, 60 ]
		}, {
			frame : [ 1105, 1233, 54, 60 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 2, 0, 54, 60 ],
			sourceSize : [ 60, 60 ]
		} ];
		var props = {
			maxNumGroup : 8,
			minSpeed : 0.5,
			maxSpeed : 1.2,
			regX : 35,
			regY : 12,
			useFrames : true,
			interval : 10
		};
		var coinAni2 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 572, 1062, 55, 35 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 1, 55, 35 ],
			sourceSize : [ 55, 37 ]
		}, {
			frame : [ 628, 1062, 55, 33 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 2, 55, 33 ],
			sourceSize : [ 55, 37 ]
		}, {
			frame : [ 684, 1062, 55, 31 ],
			offset : [ 0, 1 ],
			rotated : false,
			sourceRect : [ 0, 2, 55, 31 ],
			sourceSize : [ 55, 37 ]
		}, {
			frame : [ 828, 685, 55, 33 ],
			offset : [ 0, 1 ],
			rotated : false,
			sourceRect : [ 0, 1, 55, 33 ],
			sourceSize : [ 55, 37 ]
		}, {
			frame : [ 934, 985, 51, 25 ],
			offset : [ 0, -4 ],
			rotated : false,
			sourceRect : [ 2, 10, 51, 25 ],
			sourceSize : [ 55, 37 ]
		}, {
			frame : [ 884, 685, 49, 27 ],
			offset : [ 1, -4 ],
			rotated : false,
			sourceRect : [ 4, 9, 49, 27 ],
			sourceSize : [ 55, 37 ]
		}, {
			frame : [ 846, 1042, 51, 27 ],
			offset : [ 0, -3 ],
			rotated : true,
			sourceRect : [ 2, 8, 51, 27 ],
			sourceSize : [ 55, 37 ]
		}, {
			frame : [ 818, 1042, 51, 27 ],
			offset : [ 1, -4 ],
			rotated : true,
			sourceRect : [ 3, 9, 51, 27 ],
			sourceSize : [ 55, 37 ]
		} ];
		var props = {
			maxNumGroup : 8,
			minSpeed : 0.5,
			maxSpeed : 1.2,
			regX : 35,
			regY : 12,
			useFrames : true,
			interval : 10
		};
		var butterfly1 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 1194, 450, 74, 58 ],
			offset : [ 1, -1 ],
			rotated : false,
			sourceRect : [ 3, 4, 74, 58 ],
			sourceSize : [ 78, 64 ]
		}, {
			frame : [ 1234, 832, 70, 54 ],
			offset : [ 3, 1 ],
			rotated : true,
			sourceRect : [ 7, 4, 70, 54 ],
			sourceSize : [ 78, 64 ]
		}, {
			frame : [ 1078, 1092, 74, 44 ],
			offset : [ 1, 2 ],
			rotated : true,
			sourceRect : [ 3, 8, 74, 44 ],
			sourceSize : [ 78, 64 ]
		}, {
			frame : [ 314, 1998, 74, 50 ],
			offset : [ 2, 0 ],
			rotated : false,
			sourceRect : [ 4, 7, 74, 50 ],
			sourceSize : [ 78, 64 ]
		}, {
			frame : [ 1080, 965, 72, 58 ],
			offset : [ 0, 3 ],
			rotated : true,
			sourceRect : [ 3, 0, 72, 58 ],
			sourceSize : [ 78, 64 ]
		}, {
			frame : [ 995, 646, 66, 58 ],
			offset : [ 4, 3 ],
			rotated : true,
			sourceRect : [ 10, 0, 66, 58 ],
			sourceSize : [ 78, 64 ]
		}, {
			frame : [ 992, 1297, 74, 58 ],
			offset : [ 1, 3 ],
			rotated : true,
			sourceRect : [ 3, 0, 74, 58 ],
			sourceSize : [ 78, 64 ]
		}, {
			frame : [ 1054, 646, 66, 56 ],
			offset : [ 4, 4 ],
			rotated : true,
			sourceRect : [ 10, 0, 66, 56 ],
			sourceSize : [ 78, 64 ]
		} ];
		var props = {
			maxNumGroup : 6,
			minSpeed : 0.5,
			maxSpeed : 1.2,
			regX : 58,
			regY : 20,
			useFrames : true,
			interval : 10
		};
		var butterfly2 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 1358, 258, 70, 56 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 1, 0, 70, 56 ],
			sourceSize : [ 72, 56 ]
		}, {
			frame : [ 1415, 258, 70, 54 ],
			offset : [ 0, 1 ],
			rotated : true,
			sourceRect : [ 1, 0, 70, 54 ],
			sourceSize : [ 72, 56 ]
		}, {
			frame : [ 389, 1998, 70, 50 ],
			offset : [ 0, 2 ],
			rotated : false,
			sourceRect : [ 1, 1, 70, 50 ],
			sourceSize : [ 72, 56 ]
		}, {
			frame : [ 894, 1244, 70, 52 ],
			offset : [ 0, 2 ],
			rotated : false,
			sourceRect : [ 1, 0, 70, 52 ],
			sourceSize : [ 72, 56 ]
		}, {
			frame : [ 1125, 460, 68, 48 ],
			offset : [ 1, 3 ],
			rotated : false,
			sourceRect : [ 3, 1, 68, 48 ],
			sourceSize : [ 72, 56 ]
		}, {
			frame : [ 1157, 284, 66, 48 ],
			offset : [ 2, 3 ],
			rotated : false,
			sourceRect : [ 5, 1, 66, 48 ],
			sourceSize : [ 72, 56 ]
		}, {
			frame : [ 1090, 284, 66, 48 ],
			offset : [ 2, 3 ],
			rotated : false,
			sourceRect : [ 5, 1, 66, 48 ],
			sourceSize : [ 72, 56 ]
		}, {
			frame : [ 1056, 460, 68, 48 ],
			offset : [ 2, 3 ],
			rotated : false,
			sourceRect : [ 4, 1, 68, 48 ],
			sourceSize : [ 72, 56 ]
		} ];
		var props = {
			maxNumGroup : 6,
			minSpeed : 0.5,
			maxSpeed : 1.2,
			regX : 52,
			regY : 18,
			useFrames : true,
			interval : 10
		};
		var butterfly3 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 911, 1519, 77, 53 ],
			offset : [ 0, 3 ],
			rotated : true,
			sourceRect : [ 0, 0, 77, 53 ],
			sourceSize : [ 77, 59 ]
		}, {
			frame : [ 740, 1042, 77, 51 ],
			offset : [ 0, 4 ],
			rotated : false,
			sourceRect : [ 0, 0, 77, 51 ],
			sourceSize : [ 77, 59 ]
		}, {
			frame : [ 1224, 283, 77, 45 ],
			offset : [ 0, 5 ],
			rotated : false,
			sourceRect : [ 0, 2, 77, 45 ],
			sourceSize : [ 77, 59 ]
		}, {
			frame : [ 460, 1998, 77, 49 ],
			offset : [ 0, 4 ],
			rotated : false,
			sourceRect : [ 0, 1, 77, 49 ],
			sourceSize : [ 77, 59 ]
		}, {
			frame : [ 1123, 1091, 71, 57 ],
			offset : [ -1, 0 ],
			rotated : true,
			sourceRect : [ 2, 1, 71, 57 ],
			sourceSize : [ 77, 59 ]
		}, {
			frame : [ 918, 1373, 67, 57 ],
			offset : [ 1, 1 ],
			rotated : true,
			sourceRect : [ 6, 0, 67, 57 ],
			sourceSize : [ 77, 59 ]
		}, {
			frame : [ 1178, 832, 71, 55 ],
			offset : [ 0, 1 ],
			rotated : true,
			sourceRect : [ 3, 1, 71, 55 ],
			sourceSize : [ 77, 59 ]
		}, {
			frame : [ 1139, 965, 71, 57 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 3, 1, 71, 57 ],
			sourceSize : [ 77, 59 ]
		} ];
		var props = {
			maxNumGroup : 6,
			minSpeed : 0.5,
			maxSpeed : 1.2,
			regX : 57,
			regY : 18,
			useFrames : true,
			interval : 10
		};
		var butterfly4 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 1353, 166, 91, 90 ],
			offset : [ 3, -1 ],
			rotated : true,
			sourceRect : [ 11, 17, 91, 90 ],
			sourceSize : [ 107, 122 ]
		}, {
			frame : [ 782, 1960, 87, 88 ],
			offset : [ 5, -1 ],
			rotated : false,
			sourceRect : [ 15, 18, 87, 88 ],
			sourceSize : [ 107, 122 ]
		}, {
			frame : [ 1430, 0, 89, 86 ],
			offset : [ 4, -1 ],
			rotated : true,
			sourceRect : [ 13, 19, 89, 86 ],
			sourceSize : [ 107, 122 ]
		}, {
			frame : [ 688, 1960, 93, 88 ],
			offset : [ 2, -1 ],
			rotated : false,
			sourceRect : [ 9, 18, 93, 88 ],
			sourceSize : [ 107, 122 ]
		}, {
			frame : [ 1169, 333, 91, 116 ],
			offset : [ 2, 0 ],
			rotated : false,
			sourceRect : [ 10, 3, 91, 116 ],
			sourceSize : [ 107, 122 ]
		}, {
			frame : [ 1178, 509, 97, 118 ],
			offset : [ -1, 1 ],
			rotated : false,
			sourceRect : [ 4, 1, 97, 118 ],
			sourceSize : [ 107, 122 ]
		}, {
			frame : [ 1176, 713, 89, 118 ],
			offset : [ 4, -1 ],
			rotated : false,
			sourceRect : [ 13, 3, 89, 118 ],
			sourceSize : [ 107, 122 ]
		}, {
			frame : [ 1078, 509, 99, 118 ],
			offset : [ -2, 0 ],
			rotated : false,
			sourceRect : [ 2, 2, 99, 118 ],
			sourceSize : [ 107, 122 ]
		} ];
		var props = {
			maxNumGroup : 5,
			minSpeed : 0.5,
			maxSpeed : 1.2,
			regX : 67,
			regY : 50,
			useFrames : true,
			interval : 10
		};
		var butterfly5 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 1352, 0, 91, 77 ],
			offset : [ 4, 0 ],
			rotated : true,
			sourceRect : [ 11, 1, 91, 77 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1444, 166, 81, 77 ],
			offset : [ 2, 0 ],
			rotated : true,
			sourceRect : [ 14, 1, 81, 77 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1370, 92, 73, 77 ],
			offset : [ 1, 0 ],
			rotated : true,
			sourceRect : [ 17, 1, 73, 77 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1361, 329, 89, 77 ],
			offset : [ -4, 0 ],
			rotated : true,
			sourceRect : [ 4, 1, 89, 77 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1273, 166, 99, 79 ],
			offset : [ 2, 0 ],
			rotated : true,
			sourceRect : [ 5, 0, 99, 79 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1272, 0, 99, 79 ],
			offset : [ 3, 0 ],
			rotated : true,
			sourceRect : [ 6, 0, 99, 79 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1192, 0, 99, 79 ],
			offset : [ 2, 0 ],
			rotated : true,
			sourceRect : [ 5, 0, 99, 79 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1276, 508, 99, 79 ],
			offset : [ 1, 0 ],
			rotated : true,
			sourceRect : [ 4, 0, 99, 79 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 918, 1297, 73, 75 ],
			offset : [ 2, 2 ],
			rotated : false,
			sourceRect : [ 18, 0, 73, 75 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 911, 1441, 71, 77 ],
			offset : [ 3, 0 ],
			rotated : false,
			sourceRect : [ 20, 1, 71, 77 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1448, 90, 73, 75 ],
			offset : [ 2, 2 ],
			rotated : false,
			sourceRect : [ 18, 0, 73, 75 ],
			sourceSize : [ 105, 79 ]
		}, {
			frame : [ 1517, 0, 71, 77 ],
			offset : [ 3, 0 ],
			rotated : false,
			sourceRect : [ 20, 1, 71, 77 ],
			sourceSize : [ 105, 79 ]
		} ];
		var props = {
			maxNumGroup : 3,
			minSpeed : 0.5,
			maxSpeed : 1.2,
			regX : 65,
			regY : 25,
			useFrames : true,
			interval : 10
		};
		var butterfly6 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 833, 1297, 84, 143 ],
			offset : [ -1, 1 ],
			rotated : false,
			sourceRect : [ 3, 3, 84, 143 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 853, 867, 80, 143 ],
			offset : [ 0, -1 ],
			rotated : false,
			sourceRect : [ 6, 5, 80, 143 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 832, 1450, 78, 147 ],
			offset : [ 2, -1 ],
			rotated : false,
			sourceRect : [ 9, 3, 78, 147 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 538, 1963, 84, 149 ],
			offset : [ 3, 0 ],
			rotated : true,
			sourceRect : [ 7, 1, 84, 149 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 867, 1094, 86, 149 ],
			offset : [ 3, 1 ],
			rotated : false,
			sourceRect : [ 6, 0, 86, 149 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 829, 719, 86, 147 ],
			offset : [ 1, 2 ],
			rotated : false,
			sourceRect : [ 4, 0, 86, 147 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 1090, 166, 86, 117 ],
			offset : [ -2, 16 ],
			rotated : false,
			sourceRect : [ 1, 1, 86, 117 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 874, 1011, 82, 113 ],
			offset : [ -1, 17 ],
			rotated : true,
			sourceRect : [ 4, 2, 82, 113 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 1111, 628, 84, 113 ],
			offset : [ -2, 16 ],
			rotated : true,
			sourceRect : [ 2, 3, 84, 113 ],
			sourceSize : [ 92, 151 ]
		}, {
			frame : [ 1225, 628, 84, 111 ],
			offset : [ -2, 17 ],
			rotated : true,
			sourceRect : [ 2, 3, 84, 111 ],
			sourceSize : [ 92, 151 ]
		} ];
		var props = {
			maxNumGroup : 5,
			minSpeed : 0.5,
			maxSpeed : 0.8,
			regX : 40,
			regY : 50,
			useFrames : true,
			interval : 10
		};
		var butterfly7 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 284, 1825, 172, 124 ],
			offset : [ 1, 1 ],
			rotated : true,
			sourceRect : [ 2, 0, 172, 124 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 264, 1652, 172, 124 ],
			offset : [ 1, 1 ],
			rotated : true,
			sourceRect : [ 2, 0, 172, 124 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 409, 1825, 172, 122 ],
			offset : [ 1, 0 ],
			rotated : true,
			sourceRect : [ 2, 2, 172, 122 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 415, 1297, 172, 120 ],
			offset : [ 1, -1 ],
			rotated : true,
			sourceRect : [ 2, 4, 172, 120 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 389, 1652, 172, 122 ],
			offset : [ 1, -1 ],
			rotated : true,
			sourceRect : [ 2, 3, 172, 122 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 264, 1479, 172, 124 ],
			offset : [ 1, 0 ],
			rotated : true,
			sourceRect : [ 2, 1, 172, 124 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 789, 0, 172, 124 ],
			offset : [ 1, 0 ],
			rotated : true,
			sourceRect : [ 2, 1, 172, 124 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 389, 1479, 172, 122 ],
			offset : [ 1, 1 ],
			rotated : true,
			sourceRect : [ 2, 1, 172, 122 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 449, 915, 170, 122 ],
			offset : [ 2, 0 ],
			rotated : true,
			sourceRect : [ 4, 2, 170, 122 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 933, 342, 168, 122 ],
			offset : [ 3, 2 ],
			rotated : true,
			sourceRect : [ 6, 0, 168, 122 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 828, 516, 168, 122 ],
			offset : [ 3, 1 ],
			rotated : true,
			sourceRect : [ 6, 1, 168, 122 ],
			sourceSize : [ 174, 126 ]
		}, {
			frame : [ 914, 0, 168, 122 ],
			offset : [ 3, 2 ],
			rotated : true,
			sourceRect : [ 6, 0, 168, 122 ],
			sourceSize : [ 174, 126 ]
		} ];
		var props = {
			maxNumGroup : 3,
			minSpeed : 0.5,
			maxSpeed : 0.8,
			regX : 90,
			regY : 50,
			useFrames : true,
			interval : 10
		};
		var butterfly8 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 640, 0, 148, 173 ],
			offset : [ 6, 1 ],
			rotated : false,
			sourceRect : [ 15, 4, 148, 173 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 572, 892, 146, 169 ],
			offset : [ 6, -1 ],
			rotated : false,
			sourceRect : [ 16, 8, 146, 169 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 583, 1098, 148, 155 ],
			offset : [ 4, 0 ],
			rotated : false,
			sourceRect : [ 13, 14, 148, 155 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 719, 891, 150, 133 ],
			offset : [ 2, 0 ],
			rotated : true,
			sourceRect : [ 10, 25, 150, 133 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 697, 1297, 152, 135 ],
			offset : [ 2, 0 ],
			rotated : true,
			sourceRect : [ 9, 24, 152, 135 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 841, 1784, 158, 155 ],
			offset : [ 0, 0 ],
			rotated : true,
			sourceRect : [ 4, 14, 158, 155 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 505, 722, 156, 169 ],
			offset : [ 2, 1 ],
			rotated : false,
			sourceRect : [ 7, 6, 156, 169 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 133, 1840, 150, 177 ],
			offset : [ 6, 0 ],
			rotated : false,
			sourceRect : [ 14, 3, 150, 177 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 290, 925, 158, 175 ],
			offset : [ 2, 2 ],
			rotated : false,
			sourceRect : [ 6, 2, 158, 175 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 686, 1798, 154, 161 ],
			offset : [ 5, -4 ],
			rotated : false,
			sourceRect : [ 11, 15, 154, 161 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 264, 1301, 150, 177 ],
			offset : [ 8, 3 ],
			rotated : false,
			sourceRect : [ 16, 0, 150, 177 ],
			sourceSize : [ 166, 183 ]
		}, {
			frame : [ 1037, 0, 154, 165 ],
			offset : [ 5, -6 ],
			rotated : false,
			sourceRect : [ 11, 15, 154, 165 ],
			sourceSize : [ 166, 183 ]
		} ];
		var props = {
			maxNumGroup : 2,
			minSpeed : 0.5,
			maxSpeed : 0.8,
			regX : 120,
			regY : 70,
			useFrames : true,
			interval : 10
		};
		var butterfly9 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 668, 533, 168, 159 ],
			offset : [ 3, 3 ],
			rotated : true,
			sourceRect : [ 8, 11, 168, 159 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 0, 380, 166, 187 ],
			offset : [ 2, 0 ],
			rotated : false,
			sourceRect : [ 8, 0, 166, 187 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 512, 1470, 164, 163 ],
			offset : [ 1, 7 ],
			rotated : true,
			sourceRect : [ 8, 5, 164, 163 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 0, 568, 166, 185 ],
			offset : [ 2, 1 ],
			rotated : false,
			sourceRect : [ 8, 0, 166, 185 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 807, 173, 168, 135 ],
			offset : [ 4, 5 ],
			rotated : true,
			sourceRect : [ 9, 21, 168, 135 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 441, 1101, 170, 141 ],
			offset : [ 4, 5 ],
			rotated : true,
			sourceRect : [ 8, 18, 170, 141 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 512, 1635, 164, 153 ],
			offset : [ -1, -4 ],
			rotated : true,
			sourceRect : [ 6, 21, 164, 153 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 809, 1623, 160, 149 ],
			offset : [ -4, -1 ],
			rotated : true,
			sourceRect : [ 5, 20, 160, 149 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 532, 1800, 162, 153 ],
			offset : [ -4, 0 ],
			rotated : true,
			sourceRect : [ 4, 17, 162, 153 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 676, 1462, 160, 155 ],
			offset : [ -1, 7 ],
			rotated : true,
			sourceRect : [ 8, 9, 160, 155 ],
			sourceSize : [ 178, 187 ]
		} ];
		var props = {
			maxNumGroup : 2,
			minSpeed : 0.5,
			maxSpeed : 0.8,
			regX : 100,
			regY : 80,
			useFrames : true,
			interval : 10
		};
		var butterfly10 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 668, 533, 168, 159 ],
			offset : [ 3, 3 ],
			rotated : true,
			sourceRect : [ 8, 11, 168, 159 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 0, 380, 166, 187 ],
			offset : [ 2, 0 ],
			rotated : false,
			sourceRect : [ 8, 0, 166, 187 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 512, 1470, 164, 163 ],
			offset : [ 1, 7 ],
			rotated : true,
			sourceRect : [ 8, 5, 164, 163 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 0, 568, 166, 185 ],
			offset : [ 2, 1 ],
			rotated : false,
			sourceRect : [ 8, 0, 166, 185 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 807, 173, 168, 135 ],
			offset : [ 4, 5 ],
			rotated : true,
			sourceRect : [ 9, 21, 168, 135 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 441, 1101, 170, 141 ],
			offset : [ 4, 5 ],
			rotated : true,
			sourceRect : [ 8, 18, 170, 141 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 512, 1635, 164, 153 ],
			offset : [ -1, -4 ],
			rotated : true,
			sourceRect : [ 6, 21, 164, 153 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 809, 1623, 160, 149 ],
			offset : [ -4, -1 ],
			rotated : true,
			sourceRect : [ 5, 20, 160, 149 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 532, 1800, 162, 153 ],
			offset : [ -4, 0 ],
			rotated : true,
			sourceRect : [ 4, 17, 162, 153 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 676, 1462, 160, 155 ],
			offset : [ -1, 7 ],
			rotated : true,
			sourceRect : [ 8, 9, 160, 155 ],
			sourceSize : [ 178, 187 ]
		} ];
		var props = {
			maxNumGroup : 10,
			minSpeed : 0.5,
			maxSpeed : 0.8,
			regX : 100,
			regY : 80,
			useFrames : true,
			interval : 10
		};
		var butterfly11 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 668, 533, 168, 159 ],
			offset : [ 3, 3 ],
			rotated : true,
			sourceRect : [ 8, 11, 168, 159 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 0, 380, 166, 187 ],
			offset : [ 2, 0 ],
			rotated : false,
			sourceRect : [ 8, 0, 166, 187 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 512, 1470, 164, 163 ],
			offset : [ 1, 7 ],
			rotated : true,
			sourceRect : [ 8, 5, 164, 163 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 0, 568, 166, 185 ],
			offset : [ 2, 1 ],
			rotated : false,
			sourceRect : [ 8, 0, 166, 185 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 807, 173, 168, 135 ],
			offset : [ 4, 5 ],
			rotated : true,
			sourceRect : [ 9, 21, 168, 135 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 441, 1101, 170, 141 ],
			offset : [ 4, 5 ],
			rotated : true,
			sourceRect : [ 8, 18, 170, 141 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 512, 1635, 164, 153 ],
			offset : [ -1, -4 ],
			rotated : true,
			sourceRect : [ 6, 21, 164, 153 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 809, 1623, 160, 149 ],
			offset : [ -4, -1 ],
			rotated : true,
			sourceRect : [ 5, 20, 160, 149 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 532, 1800, 162, 153 ],
			offset : [ -4, 0 ],
			rotated : true,
			sourceRect : [ 4, 17, 162, 153 ],
			sourceSize : [ 178, 187 ]
		}, {
			frame : [ 676, 1462, 160, 155 ],
			offset : [ -1, 7 ],
			rotated : true,
			sourceRect : [ 8, 9, 160, 155 ],
			sourceSize : [ 178, 187 ]
		} ];
		var props = {
			maxNumGroup : 2,
			minSpeed : 0.5,
			maxSpeed : 0.8,
			regX : 100,
			regY : 80,
			useFrames : true,
			interval : 10
		};
		var butterfly12 = this.translateImage(this.butterfly, dict,
				dict[0].sourceSize[0], dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 122, 949, 60, 74 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 7, 0, 60, 74 ],
			sourceSize : [ 74, 74 ]
		}, {
			frame : [ 61, 915, 60, 74 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 7, 0, 60, 74 ],
			sourceSize : [ 74, 74 ]
		}, {
			frame : [ 244, 1096, 60, 72 ],
			offset : [ 0, -1 ],
			rotated : false,
			sourceRect : [ 7, 2, 60, 72 ],
			sourceSize : [ 74, 74 ]
		}, {
			frame : [ 0, 915, 60, 74 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 7, 0, 60, 74 ],
			sourceSize : [ 74, 74 ]
		}, {
			frame : [ 122, 949, 60, 74 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 7, 0, 60, 74 ],
			sourceSize : [ 74, 74 ]
		} ];
		var hand1 = this.translateImage(this.hand, dict, dict[0].sourceSize[0],
				dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 917, 1156, 60, 76 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 7, 0, 60, 76 ],
			sourceSize : [ 74, 76 ]
		}, {
			frame : [ 490, 1237, 60, 76 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 7, 0, 60, 76 ],
			sourceSize : [ 74, 76 ]
		}, {
			frame : [ 551, 1283, 60, 74 ],
			offset : [ 0, -1 ],
			rotated : false,
			sourceRect : [ 7, 2, 60, 74 ],
			sourceSize : [ 74, 76 ]
		}, {
			frame : [ 565, 1206, 60, 76 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 7, 0, 60, 76 ],
			sourceSize : [ 74, 76 ]
		}, {
			frame : [ 917, 1156, 60, 76 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 7, 0, 60, 76 ],
			sourceSize : [ 74, 76 ]
		} ];
		var hand2 = this.translateImage(this.hand, dict, dict[0].sourceSize[0],
				dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 584, 1129, 62, 76 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 5, 0, 62, 76 ],
			sourceSize : [ 74, 76 ]
		}, {
			frame : [ 653, 1127, 62, 76 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 5, 0, 62, 76 ],
			sourceSize : [ 74, 76 ]
		}, {
			frame : [ 716, 1140, 62, 72 ],
			offset : [ -1, -2 ],
			rotated : false,
			sourceRect : [ 5, 4, 62, 72 ],
			sourceSize : [ 74, 76 ]
		}, {
			frame : [ 726, 1063, 62, 76 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 5, 0, 62, 76 ],
			sourceSize : [ 74, 76 ]
		}, {
			frame : [ 584, 1129, 62, 76 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 5, 0, 62, 76 ],
			sourceSize : [ 74, 76 ]
		} ];
		var hand3 = this.translateImage(this.hand, dict, dict[0].sourceSize[0],
				dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 299, 1012, 64, 83 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 4, 0, 64, 83 ],
			sourceSize : [ 74, 83 ]
		}, {
			frame : [ 372, 1010, 64, 83 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 4, 0, 64, 83 ],
			sourceSize : [ 74, 83 ]
		}, {
			frame : [ 588, 1049, 64, 79 ],
			offset : [ -1, -2 ],
			rotated : false,
			sourceRect : [ 4, 4, 64, 79 ],
			sourceSize : [ 74, 83 ]
		}, {
			frame : [ 372, 1010, 64, 83 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 4, 0, 64, 83 ],
			sourceSize : [ 74, 83 ]
		}, {
			frame : [ 299, 1012, 64, 83 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 4, 0, 64, 83 ],
			sourceSize : [ 74, 83 ]
		} ];
		var hand4 = this.translateImage(this.hand, dict, dict[0].sourceSize[0],
				dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 521, 1000, 66, 85 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 3, 0, 66, 85 ],
			sourceSize : [ 74, 85 ]
		}, {
			frame : [ 594, 963, 66, 85 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 3, 0, 66, 85 ],
			sourceSize : [ 74, 85 ]
		}, {
			frame : [ 452, 1007, 66, 79 ],
			offset : [ -1, -3 ],
			rotated : false,
			sourceRect : [ 3, 6, 66, 79 ],
			sourceSize : [ 74, 85 ]
		}, {
			frame : [ 669, 879, 66, 85 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 3, 0, 66, 85 ],
			sourceSize : [ 74, 85 ]
		}, {
			frame : [ 521, 1000, 66, 85 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 3, 0, 66, 85 ],
			sourceSize : [ 74, 85 ]
		} ];
		var hand5 = this.translateImage(this.hand, dict, dict[0].sourceSize[0],
				dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 232, 839, 70, 90 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 1, 0, 70, 90 ],
			sourceSize : [ 74, 90 ]
		}, {
			frame : [ 312, 835, 70, 90 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 1, 0, 70, 90 ],
			sourceSize : [ 74, 90 ]
		}, {
			frame : [ 529, 835, 70, 82 ],
			offset : [ -1, -4 ],
			rotated : false,
			sourceRect : [ 1, 8, 70, 82 ],
			sourceSize : [ 74, 90 ]
		}, {
			frame : [ 385, 833, 70, 90 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 1, 0, 70, 90 ],
			sourceSize : [ 74, 90 ]
		}, {
			frame : [ 232, 839, 70, 90 ],
			offset : [ -1, 0 ],
			rotated : false,
			sourceRect : [ 1, 0, 70, 90 ],
			sourceSize : [ 74, 90 ]
		} ];
		var hand6 = this.translateImage(this.hand, dict, dict[0].sourceSize[0],
				dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 947, 986, 72, 94 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 1, 0, 72, 94 ],
			sourceSize : [ 74, 94 ]
		}, {
			frame : [ 947, 891, 72, 94 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 1, 0, 72, 94 ],
			sourceSize : [ 74, 94 ]
		}, {
			frame : [ 312, 748, 72, 86 ],
			offset : [ 0, -4 ],
			rotated : false,
			sourceRect : [ 1, 8, 72, 86 ],
			sourceSize : [ 74, 94 ]
		}, {
			frame : [ 757, 806, 72, 94 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 1, 0, 72, 94 ],
			sourceSize : [ 74, 94 ]
		}, {
			frame : [ 947, 986, 72, 94 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 1, 0, 72, 94 ],
			sourceSize : [ 74, 94 ]
		} ];
		var hand7 = this.translateImage(this.hand, dict, dict[0].sourceSize[0],
				dict[0].sourceSize[1], true, props);

		var dict = [ {
			frame : [ 437, 490, 24, 26 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 24, 26 ],
			sourceSize : [ 24, 26 ]
		}, {
			frame : [ 436, 577, 25, 29 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 25, 29 ],
			sourceSize : [ 25, 29 ]
		}, {
			frame : [ 619, 587, 27, 31 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 27, 31 ],
			sourceSize : [ 27, 31 ]
		}, {
			frame : [ 406, 574, 29, 33 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 29, 33 ],
			sourceSize : [ 29, 33 ]
		}, {
			frame : [ 406, 471, 30, 34 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 30, 34 ],
			sourceSize : [ 30, 34 ]
		}, {
			frame : [ 190, 317, 31, 35 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 31, 35 ],
			sourceSize : [ 31, 35 ]
		}, {
			frame : [ 654, 395, 32, 38 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 32, 38 ],
			sourceSize : [ 32, 38 ]
		}, {
			frame : [ 190, 353, 30, 44 ],
			offset : [ 0, 0 ],
			rotated : false,
			sourceRect : [ 0, 0, 30, 44 ],
			sourceSize : [ 30, 44 ]
		} ];

	};

	R.translateImage = function(srcImage, dict, rectWidth, rectHeight, toImage,
			props) {
		var cache = this.cacheImage(srcImage, dict, rectWidth, rectHeight,
				toImage);
		Q.merge(cache, props);
		return cache;
	};

	R.cacheImage = function(img, frames, rectWidth, rectHeight, toImage,
			rotation) {
		var canvas = Q.createDOM("canvas");
		var context = canvas.getContext("2d");

		canvas.width = rectWidth;
		canvas.height = rectHeight * frames.length;

		var x = 0, y = 0, data = [];
		for ( var i = 0; i < frames.length; i++) {
			var f = frames[i], frame = f.frame, offset = f.offset, rotated = f.rotated, srcRect = f.sourceRect
					|| [ 0, 0 ];
			context.save();
			y = i * rectHeight;
			if (rotated) {
				var temp = frame[3];
				frame[3] = frame[2];
				frame[2] = temp;
			}

			var tx = x + srcRect[0];
			var ty = rotated ? y + frame[2] + srcRect[1] : y + srcRect[1];
			context.translate(tx, ty);
			if (rotated)
				context.rotate(-90 % 360 * Math.PI / 180);
			context.drawImage(img, frame[0], frame[1], frame[2], frame[3], 0,
					0, frame[2], frame[3]);
			context.restore();

			var obj = {
				rect : [ x, y, rectWidth, rectHeight ]
			};
			data[i] = obj;
		}

		trace(JSON.stringify(data));

		if (toImage) {
			var cache = new Image();
			cache.src = canvas.toDataURL("image/png");
			cache.width = canvas.width;
			cache.height = canvas.height;
			document.body.appendChild(cache);
			return {
				image : cache,
				frames : data
			};
		}

		return {
			image : canvas,
			frames : data
		};
	};

	R.getImage = function(id) {
		return this.images[id].image;
	};

})();