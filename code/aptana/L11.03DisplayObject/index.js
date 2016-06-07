$(function(){
	
	var cjs=createjs;
	
	var stage = new cjs.Stage($('#gameView')[0]);
	
	
	var rect = new cjs.Shape();
	rect.graphics.beginFill("#FF0000");
	rect.graphics.rect(0,0,100,100);
	rect.graphics.endFill();
	rect.x=200;
	rect.y=200;
	rect.regX=50;
	rect.regY=50;
	rect.onTick=function(){
		this.rotation+=1;
	};
	
	
	stage.addChild(rect);
	
	
	
	var c = new cjs.Shape();
	c.graphics.beginFill("#0000FF");
	c.graphics.drawCircle(0,0,50);
	c.graphics.endFill();
	c.x=50;
	c.y=50;
	stage.addChild(c);
	c.speed=0.01;
	c.onTick=function(){
		c.alpha+=c.speed;
		
		if (c.alpha>1) {
			c.speed=-Math.abs(c.speed);
		};
		if (c.alpha<0) {
			c.speed=Math.abs(c.speed);
		};
	}
	
	// stage.update();
	
	cjs.Ticker.setFPS(50);
	cjs.Ticker.addListener(stage);
});



