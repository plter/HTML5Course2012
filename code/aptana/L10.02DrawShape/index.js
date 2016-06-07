$(function(){
	
	var context = ($('#gameView')[0]).getContext('2d');
	
	context.save();
	context.translate(200,200);
	context.scale(2,1);
	context.fillStyle="#FF0000";
	context.fillRect(0,0,100,100);
	context.restore();
	
	
	context.save();
	context.beginPath();
	context.translate(-100,50);
	context.fillStyle="#00FF00";
	context.arc(300,50,50,0,Math.PI*2);
	context.fill();
	context.closePath();
	context.restore();
	
	
	context.beginPath();
	context.moveTo(10,110);
	context.lineTo(10,220);
	context.lineTo(110,150);
	context.lineTo(10,110);
	context.closePath();
	context.fill();
});
