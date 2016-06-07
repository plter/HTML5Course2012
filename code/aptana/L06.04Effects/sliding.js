$(document).ready(function(){
	
	$('#slideUpAndDown').click(function(){
		
		$(this).slideUp(function(){
			$(this).slideDown();
		});
		
	});
	
	
});
