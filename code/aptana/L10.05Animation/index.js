
var context,ball,CANVAS_WIDTH=550,CANVAS_HEIGHT=400,balls=[];


function Ball(context,fillColor,strokeColor,r){
	this.fillColor=fillColor;
	this.strokeColor=strokeColor;
	this.r=r;
	this.x=Math.random()*500+25;
	this.y=Math.random()*450+25;
	this.speedX=Math.random()*3+2;
	this.speedY=Math.random()*3+2;
	this.context=context;
}
Ball.prototype.draw=function(){
	
	this.context.save();
	this.context.fillStyle=this.fillColor;
	this.context.strokeStyle=this.strokeColor;
	this.context.translate(this.x,this.y);
	this.context.lineWidth=2;
	
	this.context.beginPath();
	this.context.arc(0,0,this.r,0,Math.PI*2);
	this.context.closePath();
	this.context.fill();
	this.context.stroke();
	
	this.context.restore();
}
Ball.prototype.move=function(){
	this.x+=this.speedX;
	this.y+=this.speedY;
	
	if (this.x<this.r) {
		this.speedX=Math.abs(this.speedX);
	};
	if (this.y<this.r) {
		this.speedY=Math.abs(this.speedY);
	};
	if (this.x>CANVAS_WIDTH-this.r) {
		this.speedX=-Math.abs(this.speedX);
	};
	if (this.y>CANVAS_HEIGHT-this.r) {
		this.speedY=-Math.abs(this.speedY);
	};
	
	this.draw();
};

function enterFrame(){
	
	context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	
	for (var i=0; i < balls.length; i++) {
		balls[i].move();
	};
}

$(function(){
	
	context = ($('#gameView')[0]).getContext('2d');
	
	for (var i=0; i < 10; i++) {
		balls[i]=new Ball(context,"#CCCCCC","#333333",15);
	};
	
	setInterval(enterFrame,20);
});

