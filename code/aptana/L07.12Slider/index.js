
var valueSpan,slider;

$(function(){
	
	valueSpan=$('#valueSpan');
	slider=$('#slider');
	
	// slider.slider({
		// change:function(event,ui){
			// valueSpan.text(slider.slider('option','value'));
		// }
	// });
	
	
	slider.slider({
		slide:function(event,ui){
			valueSpan.text(slider.slider('option','value'));
		}
	});
});
