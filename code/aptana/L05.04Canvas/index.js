var CANVAS_WIDTH=400,CANVAS_HEIGHT=300;
var mycanvas,context;

window.onload=function(){
	createCanvas();
	
	// drawRect();
	
	drawImage();
}

function createCanvas(){
	document.body.innerHTML="<canvas id=\"mycanvas\" width=\""+CANVAS_WIDTH+"\" height=\""+CANVAS_HEIGHT+"\">你的浏览器不支持Canvas标签</canvas>";
	mycanvas=document.getElementById("mycanvas");
	context=mycanvas.getContext("2d");
}


function drawRect(){
	context.fillStyle="#FF0000";
	// context.rotate(45);
	// context.translate(200,100);
	context.scale(2,1);
	context.fillRect(0,0,100,100);
}


function drawImage(){
	var img = new Image();
	img.onload=function(){
		context.drawImage(img,0,0);
	}
	img.src="1.jpg";
}
