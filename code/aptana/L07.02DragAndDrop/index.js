$(document).ready(function(){
	$('#rect1').draggable();
	
	$('#rect2').droppable();
	
	$('#rect2').bind('drop',function(event,ui){
		$('#rect2').text("Drop");
	});
});


function trace(value){
	console.log(value);
}
