$(document).ready(function(){
	
	
	$('div').click(function(){
		
		
		// $(this).hide('slow');
		// $(this).hide('fast');
		
		$(this).hide('100',function(){
			$(this).show('fast');
		});
	});
	
	
});
