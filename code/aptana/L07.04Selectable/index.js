$(document).ready(function() {
	$('#submitBtn').button().bind('click', function(event) {
		if ($('#rightLi').hasClass('ui-selected')) {
			$('#result').text("答案正确");
		}else{
			
			$('#result').text("答案错误");
		};
	});

	$('#question').selectable();

});
