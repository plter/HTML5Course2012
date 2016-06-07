
var spinner;

$(
	function(){
		spinner=$('#s').spinner();
		spinner.spinner('value',5);
		
		$('#getValueBtn').click(function(){
			alert(spinner.spinner('value'));
		});
	}
);
