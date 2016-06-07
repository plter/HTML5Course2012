(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.resource = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.shape1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AjHDIIAAmPIGPAAIAAGPImPAA").cp();
	this.shape.setTransform(20,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.MyRect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// Layer 1
	this.instance = new lib.shape1();
	this.instance.setTransform(20,20,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:27.1,y:15.8},0).wait(1).to({x:34.3,y:11.7},0).wait(1).to({x:41.6,y:7.9},0).wait(1).to({x:49.1,y:4.3},0).wait(1).to({x:56.7,y:1},0).wait(1).to({x:64.4,y:-1.8},0).wait(1).to({x:72.2,y:-4.5},0).wait(1).to({x:80.2,y:-6.7},0).wait(1).to({x:88.3,y:-8.4},0).wait(1).to({x:96.5,y:-9.6},0).wait(1).to({x:104.8,y:-10.2},0).wait(1).to({x:113,y:-10.1},0).wait(1).to({x:121.3,y:-9.3},0).wait(1).to({x:129.4,y:-7.7},0).wait(1).to({x:137.3,y:-5.3},0).wait(1).to({x:144.9,y:-2.1},0).wait(1).to({x:152.2,y:1.7},0).wait(1).to({x:159.1,y:6.3},0).wait(1).to({x:165.5,y:11.5},0).wait(1).to({x:171.5,y:17.2},0).wait(1).to({x:177.1,y:23.3},0).wait(1).to({x:182.2,y:29.8},0).wait(1).to({x:187,y:36.6},0).wait(1).to({x:191.4,y:43.6},0).wait(1).to({x:195.4,y:50.8},0).wait(1).to({x:199.2,y:58.2},0).wait(1).to({x:202.7,y:65.7},0).wait(1).to({x:205.9,y:73.3},0).wait(1).to({x:209,y:81},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;