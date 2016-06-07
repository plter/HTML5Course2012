
var rect,msgDiv;

var x=0,y=0,speedX=5,speedY=5;

window.onload=function(){
	rect=document.getElementById("rect");
	msgDiv=document.getElementById("msgDiv");
			
	setInterval(timerHandler,50);
}


function timerHandler(){
	x+=speedX;
	y+=speedY;
	
	if (x<0) {
		speedX=Math.abs(speedX);
	};
	if (y<0) {
		speedY=Math.abs(speedY);
	};
	if (y>window.innerHeight-100) {
		speedY=-Math.abs(speedY);
	};
	if (x>window.innerWidth-100) {
		speedX=-Math.abs(speedX);
	};
	
	rect.style.left=x+"px";
	rect.style.top=y+"px";
}


function showObj(obj){
	var h="";
	for(var k in obj){
		h+=k+":"+obj[k]+"<br/>";
	}
	
	msgDiv.innerHTML=h;
}
