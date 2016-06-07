$(document).ready(function(){
	
	
	$('#connBtn').click(function(){
		
		$('#msg').text('正在通信，请稍候...');
		
		$.post('server1.php',{name:$('#nameInput').attr('value')},function(data){
			$('#result').text(data);
			
			$('#msg').empty();
		}).error(function(){
			$('#msg').text('通信过程中出错');
		});
	});
	
	
	// $('#connBtn').click(function(){
		// $.get('server.php',{name:$('#nameInput').attr('value')},function(data){
			// $('#result').text(data);
		// });
	// });
	
});
