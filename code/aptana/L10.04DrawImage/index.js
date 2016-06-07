$(function(){
	
	var context = ($('#gameView')[0]).getContext('2d');
	
	var img = new Image();
	img.onload=function(){
		
		context.drawImage(img,0,0);
		
	}	
	img.src="img.jpg";
});
