$(document).ready(function(){
	
	$('body').bind('click',bodyClickHandler1);
	$('div').bind('click',divClickHandler1);
	$('div').bind('click',divClickHandler2);
	$('ul').bind('click',ulClickHandler1);
	$('li').bind('click',liClickHandler1);
	
});

function bodyClickHandler1(event){
	trace("body>>>>>>>>>>>>>>>>");
	trace(event);
	trace("body<<<<<<<<<<<<<<<<");
}


function divClickHandler1(event){
	trace("div.handler1>>>>>>>>>>>>>>>>>>");
	trace(event);
	trace("div.handler1<<<<<<<<<<<<<<<<<<");
	
	// event.stopPropagation();
	event.stopImmediatePropagation();
}

function divClickHandler2(event){
	trace("div.handler2>>>>>>>>>>>>>>>>>>");
	trace(event);
	trace("div.handler2<<<<<<<<<<<<<<<<<<");
}


function ulClickHandler1(event){
	trace("ul>>>>>>>>>>>>>>>>>>");
	trace(event);
	trace("ul<<<<<<<<<<<<<<<<<<");
}


function liClickHandler1(event){
	trace("li>>>>>>>>>>>>>>>>>>");
	trace(event);
	trace("li<<<<<<<<<<<<<<<<<<");
}

function trace(value){
	console.log(value);
}
