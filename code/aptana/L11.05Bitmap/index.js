var cjs=createjs;

$(function(){
	
	var stage = new cjs.Stage($('#gameView')[0]);
	
	
	var b = new cjs.Bitmap("mn.jpg");
	stage.addChild(b);
	
	cjs.Ticker.setFPS(20);
	cjs.Ticker.addListener(stage);
	
	
	// var img = new Image();
	// img.onload=function(){
		// var b = new cjs.Bitmap(img);
		// stage.addChild(b);
		// stage.update();
	// };
	// img.src="mn.jpg";
	
});
