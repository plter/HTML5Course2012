(function() {
	$.fuck = function() {
		alert('Fuck jQuery');
	}

	$.fn.fuck = function() {
		$(this).text('Fuck jQuery');
	}
})();
