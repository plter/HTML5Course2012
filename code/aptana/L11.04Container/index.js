var cjs=createjs;

$(function(){
	
	var stage = new cjs.Stage($('#gameView')[0]);
	stage.enableMouseOver();
	
	var btn = new Button("Click me");
	btn.x=100;
	btn.y=100;
	btn.onClick=function(){
		alert("btn clicked");
	}
	stage.addChild(btn);
	
	cjs.Ticker.setFPS(50);
	cjs.Ticker.addListener(stage);
});


function Button(label){
	this.label=label;
	
	this.initialize();
	
};
var p=Button.prototype=new cjs.Container();
p.Container_init=p.initialize;
p.initialize=function(){
	//super
	this.Container_init();
	
	this.bg=new cjs.Shape();
	this.addChild(this.bg);
	this.text=new cjs.Text(this.label?this.label:"Button");
	this.addChild(this.text);
	
	//init ui
	with(this){
		
		//draw bg
		this.drawBg('#FF0000');
		
		//init label style
		text.font="12pt 宋体";
		//reset label position
		text.x=(100-text.getMeasuredWidth())/2;
		text.y=(30-text.getMeasuredHeight())/2;
		
		//add listeners
		onMouseOver=function(){
			drawBg('#0000FF');
		}
		onMouseOut=function(){
			drawBg('#FF0000');
		}
	}
};
p.drawBg=function(color){
	with(this.bg.graphics){
		beginFill(color);
		rect(0,0,100,30);
		endFill();
	}
}

