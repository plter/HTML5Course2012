$(document).ready(function(){
	
	
	// $('div').css('width','100px');
	// $('div').css('height','100px');
	// $('div').css('background-color','#FF0000');
	
	// $('div').css({width:'100px',height:'100px',backgroundColor:'#0000FF'});
	
	$('div').addClass('style1');
	
	
	// $('div').click(function(){
		// $(this).removeClass('style1');
	// });
	
	
	$('div').click(function(){
		$(this).toggleClass('style2');
	});
	
});
