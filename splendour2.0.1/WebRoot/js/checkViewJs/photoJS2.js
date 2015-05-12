var Canvas = window.Canvas || {};
(function() {
    Canvas.Element = function() {};
    Canvas.Element.prototype.fillBackground = true;
    Canvas.Element.prototype.showcorners = false;
    Canvas.Element.prototype.photoborder = true;
    Canvas.Element.prototype._backgroundImg = null;
    Canvas.Element.prototype._groupSelector = null;
    Canvas.Element.prototype._aImages = null;
    Canvas.Element.prototype._oContext = null;
    Canvas.Element.prototype._oElement = null;
    Canvas.Element.prototype._oConfig = null;
    Canvas.Element.prototype._currentTransform = null;
    Canvas.Element.prototype.init = function(el, oConfig) {
        if (el == '') {
            return;
        }
        this._initElement(el);
        this._initConfig(oConfig);
        this._createCanvasBackground();
        this._createContainer();
        this._initEvents();
        this._initCustomEvents();
    };
    Canvas.Element.prototype._initElement = function(el) {
        if (YY.util.Dom.inDocument(el)) {
            if (YY.lang.isString(el)) {
                this._oElement = document.getElementById(el);
            } else {
                this._oElement = el;
            }
        }
        else {
            if (YY.env.ua.ie) {
                var canvasEl = excanvas(document.createElement('canvas'));
            }
            else {
                var canvasEl = document.createElement('canvas');
            }
            canvasEl.id = el + '';
            var oCanvas = document.body.insertBefore(canvasEl, document.body.firstChild);
            this._oElement = document.getElementById(el + '');
        }
        this._oContextTop = this._oElement.getContext('2d');
    };
    Canvas.Element.prototype._initCustomEvents = function() {
        this.onRotateStart = new Canvas.CustomEvent('onRotateStart');
        this.onRotateMove = new Canvas.CustomEvent('onRotateMove');
        this.onRotateComplete = new Canvas.CustomEvent('onRotateComplete');
        this.onDragStart = new Canvas.CustomEvent('onDragStart');
        this.onDragMove = new Canvas.CustomEvent('onDragMove');
        this.onDragComplete = new Canvas.CustomEvent('onDragComplete');
    }
    Canvas.Element.prototype._initConfig = function(oConfig) {
        this._oConfig = oConfig;
        this._oElement.width = this._oConfig.width;
        this._oElement.height = this._oConfig.height;
        this._oElement.style.width = this._oConfig.width + 'px';
        this._oElement.style.height = this._oConfig.height + 'px';
    };
    Canvas.Element.prototype._initEvents = function() {
        YY.util.Event.on(this._oElement, 'mousedown', this.onMouseDown, this, true);
        YY.util.Event.on(this._oElement, 'mouseup', this.onMouseUp, this, true);
        YY.util.Event.on(this._oElement, 'mousemove', this.onMouseMove, this, true);
    };
    Canvas.Element.prototype._createContainer = function() {
        if (YY.env.ua.ie) {
            var canvasEl = excanvas(document.createElement('canvas'));
        }
        else {
            var canvasEl = document.createElement('canvas');
        }
        canvasEl.id = this._oElement.id + '-canvas-container';
        var oContainer = this._oElement.parentNode.insertBefore(canvasEl, this._oElement);
        oContainer.width = this._oConfig.width;
        oContainer.height = this._oConfig.height;
        oContainer.style.width = this._oConfig.width + 'px';
        oContainer.style.height = this._oConfig.height + 'px';
        this._oContextContainer = oContainer.getContext('2d');
    };
    Canvas.Element.prototype._createCanvasBackground = function() {
        if (YY.env.ua.ie) {
            var canvasEl = excanvas(document.createElement('canvas'));
        }
        else {
            var canvasEl = document.createElement('canvas');
        }
        canvasEl.id = this._oElement.id + '-canvas-background';
        var oBackground = this._oElement.parentNode.insertBefore(canvasEl, this._oElement);
        oBackground.width = this._oConfig.width;
        oBackground.height = this._oConfig.height;
        oBackground.style.width = this._oConfig.width + 'px';
        oBackground.style.height = this._oConfig.height + 'px';
        this._oContextBackground = oBackground.getContext('2d');
    };
    Canvas.Element.prototype.setCanvasBackground = function(oImg) {
        this._backgroundImg = oImg;
        var originalImgSize = oImg.getOriginalSize();
        this._oContextBackground.drawImage(oImg._oElement, 0, 0, originalImgSize.width, originalImgSize.height);
    };
    Canvas.Element.prototype.onMouseUp = function(e) {
        if (this._aImages == null) {
            return;
        }
        if (this._currentTransform) {
            this._currentTransform.target.setImageCoords();
        }
        if (this._currentTransform != null && this._currentTransform.action == "rotate") {
            this.onRotateComplete.fire(e);
        } else if (this._currentTransform != null && this._currentTransform.action == "drag") {
            this.onDragComplete.fire(e);
        }
        this._currentTransform = null;
        this._groupSelector = null;

        this.renderTop();
    };
    Canvas.Element.prototype.onMouseDown = function(e) {
        var mp = this.findMousePosition(e);
        if (this._currentTransform != null || this._aImages == null) {
            return;
        }
        var oImg = this.findTargetImage(mp, false);
        if (!oImg) {
            this._groupSelector = {
                ex: mp.ex,
                ey: mp.ey,
                top: 0,
                left: 0
            };
        }
        else {
            var action = (!this.findTargetCorner(mp, oImg)) ? 'drag': 'rotate';
            if (action == "rotate") {
                this.onRotateMove.fire(e);
            } else if (action == "drag") {
                this.onDragMove.fire(e);
            }
            this._currentTransform = {
                target: oImg,
                action: action,
                scalex: oImg.scalex,
                offsetX: mp.ex - oImg.left,
                offsetY: mp.ey - oImg.top,
                ex: mp.ex,
                ey: mp.ey,
                left: oImg.left,
                top: oImg.top,
                theta: oImg.theta
            };
            this.renderAll(false);
        }
    };
    Canvas.Element.prototype.onMouseMove = function(e) {
        var mp = this.findMousePosition(e);
        if (this._aImages == null) {
            return;
        }
        if (this._groupSelector != null) {
            this._groupSelector.left = mp.ex - this._groupSelector.ex;
            this._groupSelector.top = mp.ey - this._groupSelector.ey;
            this.renderTop();
        }
        else if (this._currentTransform == null) {
            var targetImg = this.findTargetImage(mp, true);
            this.setCursor(mp, targetImg);
        }
        else {
            if (this._currentTransform.action == 'rotate') {
                this.rotateImage(mp);
                this.scaleImage(mp);
                this.onRotateMove.fire(e);
            }
            else {
                this.translateImage(mp);
                this.onDragMove.fire(e);
            }
            this.renderTop();
        }
    };
	
	
    Canvas.Element.prototype.translateImage = function(mp) {
        this._currentTransform.target.left = mp.ex - this._currentTransform.offsetX;
        this._currentTransform.target.top = mp.ey - this._currentTransform.offsetY;
    };
    Canvas.Element.prototype.scaleImage = function(mp) {
        var lastLen = Math.sqrt(Math.pow(this._currentTransform.ey - this._currentTransform.top, 2) + Math.pow(this._currentTransform.ex - this._currentTransform.left, 2));
        var curLen = Math.sqrt(Math.pow(mp.ey - this._currentTransform.top, 2) + Math.pow(mp.ex - this._currentTransform.left, 2));

        this._currentTransform.target.scalex = this._currentTransform.scalex * (curLen / lastLen);
        this._currentTransform.target.scaley = this._currentTransform.target.scalex;
    };
    Canvas.Element.prototype.rotateImage = function(mp) {
        var lastAngle = Math.atan2(
        this._currentTransform.ey - this._currentTransform.top, this._currentTransform.ex - this._currentTransform.left);

        var curAngle = Math.atan2(
        mp.ey - this._currentTransform.top, mp.ex - this._currentTransform.left);

        this._currentTransform.target.theta = (curAngle - lastAngle) + this._currentTransform.theta;
    };
    Canvas.Element.prototype.setCursor = function(mp, targetImg) {
        if (!targetImg) {
            this._oElement.style.cursor = 'default';
        }
        else {
            var corner = this.findTargetCorner(mp, targetImg);
            if (!corner) {
                this._oElement.style.cursor = 'move';
            }
            else {
                if (corner == 'tr') {
                    this._oElement.style.cursor = 'ne-resize';
                }
                else if (corner == 'br') {
                    this._oElement.style.cursor = 'se-resize';
                }
                else if (corner == 'bl') {
                    this._oElement.style.cursor = 'sw-resize';
                }
                else if (corner == 'tl') {
                    this._oElement.style.cursor = 'nw-resize';
                }
                else {
                    this._oElement.style.cursor = 'default';
                }
            }
        }
    };
    Canvas.Element.prototype.addImage = function(oImg) {
        if (YY.lang.isNull(this._aImages)) {
            this._aImages = [];
        }
        this._aImages.push(oImg);
        this.renderAll(false);

    };
    Canvas.Element.prototype.renderAll = function(allOnTop) {
        var containerCanvas = (allOnTop) ? this._oContextTop: this._oContextContainer;

        this._oContextTop.clearRect(0, 0, parseInt(this._oConfig.width), parseInt(this._oConfig.height));
        containerCanvas.clearRect(0, 0, parseInt(this._oConfig.width), parseInt(this._oConfig.height));

        if (allOnTop) {
            var originalImgSize = this._backgroundImg.getOriginalSize();
            this._oContextTop.drawImage(this._backgroundImg._oElement, 0, 0, originalImgSize.width, originalImgSize.height);
        }
        for (var i = 0, l = this._aImages.length - 1; i < l; i += 1) {
            this.drawImageElement(containerCanvas, this._aImages[i]);
        }
        this.drawImageElement(this._oContextTop, this._aImages[this._aImages.length - 1]);
    };
    Canvas.Element.prototype.renderTop = function() {
        this._oContextTop.clearRect(0, 0, parseInt(this._oConfig.width), parseInt(this._oConfig.height));

        this.drawImageElement(this._oContextTop, this._aImages[this._aImages.length - 1]);

        if (this._groupSelector != null) {
            this._oContextTop.fillStyle = "rgba(0, 0, 200, 0.5)";
            this._oContextTop.fillRect(
            this._groupSelector.ex - ((this._groupSelector.left > 0) ? 0 : -this._groupSelector.left), this._groupSelector.ey - ((this._groupSelector.top > 0) ? 0 : -this._groupSelector.top), Math.abs(this._groupSelector.left), Math.abs(this._groupSelector.top));
            this._oContextTop.strokeRect(
            this._groupSelector.ex - ((this._groupSelector.left > 0) ? 0 : Math.abs(this._groupSelector.left)), this._groupSelector.ey - ((this._groupSelector.top > 0) ? 0 : Math.abs(this._groupSelector.top)), Math.abs(this._groupSelector.left), Math.abs(this._groupSelector.top));
        }
    };
    Canvas.Element.prototype.drawImageElement = function(context, oImg) {
        var offsetY = oImg.height / 2;
        var offsetX = oImg.width / 2;

        context.save();
        context.translate(oImg.left, oImg.top);
        context.rotate(oImg.theta);
        context.scale(oImg.scalex, oImg.scaley);

        var originalImgSize = oImg.getOriginalSize();
        var polaroidHeight = ((oImg.height - originalImgSize.height) - (oImg.width - originalImgSize.width)) / 2;

        context.drawImage(
        oImg._oElement, -originalImgSize.width / 2, ( - originalImgSize.height) / 2 - polaroidHeight, originalImgSize.width, originalImgSize.height);
        context.restore();
    };
    Canvas.Element.prototype._getImageLines = function(oCoords) {
        return {
            topline: {
                o: oCoords.tl,
                d: oCoords.tr
            },
            rightline: {
                o: oCoords.tr,
                d: oCoords.br
            },
            bottomline: {
                o: oCoords.br,
                d: oCoords.bl
            },
            leftline: {
                o: oCoords.bl,
                d: oCoords.tl
            }
        }
    };
    Canvas.Element.prototype.findTargetImage = function(mp, hovering) {
        for (var i = this._aImages.length - 1; i >= 0; i -= 1) {
            var iLines = this._getImageLines(this._aImages[i].oCoords);
            var xpoints = this._findCrossPoints(mp, iLines);

            if (xpoints % 2 == 1 && xpoints != 0) {
                var target = this._aImages[i];
                if (!hovering) {
                    this._aImages.splice(i, 1);
                    this._aImages.push(target);
                }
                return target;
            }
        }
        return false;
    };
    Canvas.Element.prototype._findCrossPoints = function(mp, oCoords) {
        var b1, b2, a1, a2, xi, yi;
        var xcount = 0;
        var iLine = null;
        for (lineKey in oCoords) {
            iLine = oCoords[lineKey];
            if ((iLine.o.y < mp.ey) && (iLine.d.y < mp.ey)) {
                continue;
            }
            if ((iLine.o.y >= mp.ey) && (iLine.d.y >= mp.ey)) {
                continue;
            }
            if ((iLine.o.x == iLine.d.x) && (iLine.o.x >= mp.ex)) {
                xi = iLine.o.x;
                yi = mp.ey;
            }
            else {
                b1 = 0;
                b2 = (iLine.d.y - iLine.o.y) / (iLine.d.x - iLine.o.x);
                a1 = mp.ey - b1 * mp.ex;
                a2 = iLine.o.y - b2 * iLine.o.x;

                xi = -(a1 - a2) / (b1 - b2);
                yi = a1 + b1 * xi;
            }

            if (xi >= mp.ex) {
                xcount += 1;
            }
            if (xcount == 2) {
                break;
            }
        }
        return xcount;
    };
    Canvas.Element.prototype.findTargetCorner = function(mp, oImg) {
        var xpoints = null;
        var corners = ['tl', 'tr', 'br', 'bl'];
        for (var i in oImg.oCoords) {
            xpoints = this._findCrossPoints(mp, this._getImageLines(oImg.oCoords[i].corner));
            if (xpoints % 2 == 1 && xpoints != 0) {
                return i;
            }
        }
        return false;
    };
    Canvas.Element.prototype.findMousePosition = function(e) {
        var parentNode = (e.srcElement) ? e.srcElement.parentNode: e.target.parentNode;
        var isSafari2 = (YY.env.ua.webkit != 0 && YY.env.ua.webkit < 420);
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var safariOffsetLeft = (isSafari2) ? e.target.ownerDocument.body.offsetLeft + scrollLeft: 0;
        var safariOffsetTop = (isSafari2) ? e.target.ownerDocument.body.offsetTop + scrollTop: 0;
        return {
            ex: e.clientX + scrollLeft - parentNode.offsetLeft - safariOffsetLeft,
            ey: e.clientY + scrollTop - parentNode.offsetTop - safariOffsetTop,
            screenX: e.screenX,
            screenY: e.screenY
        };
    };
    Canvas.Element.prototype.subscribe = function(type, fn, scope) {
        if (typeof this[type] == "undefined") {
            throw new Error("Invalid custom event name: " + type);
        }
        if (typeof fn != "function") {
            throw new Error("Invalid handler function.");
        }
        this[type].scope = scope || window;
        this[type].handler = fn;
    };
    Canvas.CustomEvent = function(type) {
        this.type = type;
        this.scope = null;
        this.handler = null;
        var self = this;
        this.fire = function(e) {
            if (this.handler != null) {
                self.handler.call(self.scope, e);
            }
        };
    };
} ());