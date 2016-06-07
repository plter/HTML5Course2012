
var clickMeBtn;


$(document).ready(function(){
	
	clickMeBtn=$('#clickMeBtn');
	
	clickMeBtn.click(function(){
		
		
		// $('#clickMeBtn').trigger('myBtnClicked');
		
		
		var e = jQuery.Event("myBtnClicked");
		clickMeBtn.trigger(e);
	});
	
	
	
	clickMeBtn.bind('myBtnClicked',function(event){
		
		trace(event);
		
	});
	
});



function trace(value){
	console.log(value);
}
