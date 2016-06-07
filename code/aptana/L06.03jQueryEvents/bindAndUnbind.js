$(document).ready(function(){
	
	// $('#clickMeBtn').click(function(){
		// alert("Click me btn clicked");
	// });
	
	
	// $('#clickMeBtn').bind('click',clickMeBtnClickHandler1);
	// $('#clickMeBtn').bind('click',clickMeBtnClickHandler2);
	// $('#clickMeBtn').unbind('click',clickMeBtnClickHandler2);
	$('#clickMeBtn').on('click',clickMeBtnClickHandler1);
	$('#clickMeBtn').on('click',clickMeBtnClickHandler2);
	$('#clickMeBtn').off('click',clickMeBtnClickHandler2);
	// $('#clickMeBtn').unbind('click');
	
});


function clickMeBtnClickHandler1(){
	trace("Click me btn clicked,handler1");
}


function clickMeBtnClickHandler2(){
	trace("Click me btn clicked,handler2");
}


function trace(value){
	console.log(value);
}
