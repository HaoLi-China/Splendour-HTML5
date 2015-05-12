var text = null;
		var spot = null;
		var box = null;
		var boxProperty = '';
	
		init();

		function init() {
			text = document.getElementById('tbox-text');
			spot = document.getElementById('tbox-spot');
			box = document.getElementById('tbox-box');
			
			if (typeof box.style.webkitBoxShadow == 'string') {
				boxProperty = 'webkitBoxShadow';
			} else if (typeof box.style.MozBoxShadow == 'string') {
				boxProperty = 'MozBoxShadow';
			} else if (typeof box.style.boxShadow == 'string')
			{
				boxProperty = 'boxShadow';
			}
		
			if (text && spot && box) {
				document.getElementById('frame').onmousemove = onMouseMove;
			}
			
			onMouseMove({clientX: 300, clientY: 200});
		}
		
		function onMouseMove(e) {
	/*		var xm = e.clientX - 600;
			var ym = e.clientY - 135;
			var d = Math.round(Math.sqrt(xm*xm + ym*ym) / 5);
			text.style.textShadow = -xm + 'px ' + -ym + 'px ' + (d + 9) + 'px black';
			
			if (boxProperty) {
				box.style[boxProperty] = '0 ' + -ym + 'px ' + (d + 50) + 'px black';
			}
			
			xm = e.clientX - 1200;
			ym = e.clientY - 650;
			spot.style.backgroundPosition = xm + 'px ' + ym + 'px';*/
		}