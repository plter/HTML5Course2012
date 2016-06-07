$(document).ready(function(){
	
	
	$('#fadeInAndOut').click(function(){
		
		$(this).fadeOut(function(){
			$(this).fadeIn();
		});
		
		// $(this).fadeTo('fast',0.2);
	});
	
	
	$('#toggleFade').click(function(){
		$('#toggledDiv').fadeToggle();
	});
	
});
