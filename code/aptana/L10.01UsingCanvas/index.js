$(function(){
	var canvas = $('#gameView')[0];
	var context = canvas.getContext("2d");
	context.font="30px 宋体";
	context.fillStyle="#FF0000";
	context.fillText("Hello Canvas",225,200);
	
	
	// console.log(context);
});
