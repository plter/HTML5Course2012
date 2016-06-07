var cjs=createjs;

$(function(){
	
	var stage = new cjs.Stage($('#gameView')[0]);
	
	var ss = new cjs.SpriteSheet({
		images:["resource.png"],
		frames:{width:40,height:40},
		animations:{start:[0,30]}
	});
	var ba = new cjs.BitmapAnimation(ss);
	stage.addChild(ba);
	
	
	cjs.Ticker.setFPS(20);
	cjs.Ticker.addListener(stage);
	
	
	$('#startBtn').bind('click', function(event) {
	  ba.play();
	});
});
