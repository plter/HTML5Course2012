$(function(){
	
	var cjs=createjs;
	
	var stage = new cjs.Stage($('#gameView')[0]);
	
	var txt = new cjs.Text("Hello CreateJS");
	txt.font="30pt 宋体";
	txt.color="#FF0000";
	stage.addChild(txt);
	
	stage.update();
	
});

