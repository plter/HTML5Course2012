//checking checked

var cb, checkMyCbBtn;

$(document).ready(function() {

	cb = $('#cb');
	checkMyCbBtn = $('#checkMyCbBtn');
	cb.bind('myCbChecking', cbCheckingHandler);
	cb.bind('myCbChecked',cbCheckedHandler);

	checkMyCbBtn.click(function() {

		var checkingE = jQuery.Event('myCbChecking');
		cb.trigger(checkingE);

		if (!checkingE.isDefaultPrevented()) {

			cb.attr('checked', 'checked');
			
			cb.trigger('myCbChecked');
		};
	});

});

function cbCheckingHandler(event) {
	trace("Checking");
	
	event.preventDefault();
}


function cbCheckedHandler(event){
	trace("Checked");
}

function trace(value) {
	console.log(value);
}
