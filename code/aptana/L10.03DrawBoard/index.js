$(function(){
	
	var context = ($('#gameView')[0]).getContext('2d');
	
	context.strokeStyle="#f00";
	context.lineWidth=3;
	
	$('#gameView').bind('mousedown', function(event) {
		var x = event.pageX- $(this).offset().left;
		var y = event.pageY-$(this).offset().top;
		
		context.moveTo(x,y);
		
		$('#gameView').bind('mousemove', function(event) {
			var x = event.pageX- $(this).offset().left;
			var y = event.pageY-$(this).offset().top;
			
			context.lineTo(x,y);
			
			context.stroke();
		});
	});
	
	
	$('#gameView').bind('mouseup', function(event) {
		$('#gameView').unbind("mousemove");
	});
	
});
