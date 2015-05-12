var CanvasDemo = function() {
	var YD = YY.util.Dom;
	var YE = YY.util.Event;
	var canvas1;
	var img = [];
	return {
		init: function() {
			canvas1 = new Canvas.Element();
			canvas1.init('canvid1',  { width: YD.getViewportWidth() - 5, height: YD.getViewportHeight() - 5 });			
			img[img.length] = new Canvas.Img('img1', {});
			img[img.length] = new Canvas.Img('img2', {});
			img[img.length] = new Canvas.Img('bg', {});
			canvas1.addImage(img[0]);
			canvas1.addImage(img[1]);
			
			canvas1.setCanvasBackground(img[2]);					
		},
		switchBg: function() {
			canvas1.fillBackground = (canvas1.fillBackground) ? false : true;							
			canvas1.renderAll();
		},
		whatever: function(e, o) {}
	}
}();
YY.util.Event.on(window, 'load', CanvasDemo.init, CanvasDemo, true);