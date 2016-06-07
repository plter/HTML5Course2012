
var index=1;

$(document).ready(function(){
	
	$.mobile.transitionHandlers['slideright']=$.mobile.transitionHandlers['slide'];
	
	
	$(document).bind('swipeleft', function(event) {
	  	
	  	index++;
	  	
	  	if (index>6) {
	  		index=1;
	  	};
	  	
	  	$.mobile.changePage("#p"+index,{transition:"slide"});
	  	
	});
	$(document).bind('swiperight', function(event) {
	  	index--;
	  	if (index<1) {
	  		index=6;
	  	};
	  	
	  	$.mobile.changePage("#p"+index,{transition:"slideright"});
	});
	
	
	
});
