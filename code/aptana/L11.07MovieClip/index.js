var cjs=createjs;

$(function(){
	
	var stage = new cjs.Stage($('#gameView')[0]);
	
	var mc = new lib.MyRect();
	mc.y=100;
	mc.onClick=function(){
		mc.play();
	}
	stage.addChild(mc);
	
	cjs.Ticker.setFPS(20);
	cjs.Ticker.addListener(stage);
});
