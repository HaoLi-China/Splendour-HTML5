(function() {

	var ns = Q.use("butterfly");

	var ButterflyGroup = ns.ButterflyGroup = {
		pattens : []
	};

	ButterflyGroup.setRandomPatten = function(butterflyes, startX, startY) {
		var pattens = this.pattens, len = pattens.length;
		var patten = pattens[Math.random() * len >> 0];
		patten(butterflyes, startX, startY);
	};

	var HLinePatten = function(butterflyes, startX, startY) {
		var len = butterflyes.length, prev = {
			x : startX,
			y : startY,
			width : 0,
			height : 0
		}, dir = startX > 0 ? 1 : -1;
		for ( var i = 0; i < len; i++) {
			var butterfly = butterflyes[i];
			var dx = Math.random() * butterfly.width + 20 >> 0;
			var dy = Math.random() * butterfly.height + 20 >> 0;
			if (Math.random() > 0.5)
				dy *= -1;
			butterfly.x = prev.x + dx * dir;
			butterfly.y = prev.y + dy;
			prev = butterfly;
		}
	};

	ButterflyGroup.pattens.push(HLinePatten);

})();