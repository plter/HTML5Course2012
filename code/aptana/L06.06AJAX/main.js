$(document).ready(function(){
	
	
	$('body').text('正在加载，请稍候...');
	
	
	$('body').load('box.htm',function(a,status,c){
		
		trace(status);
		
		if (status=='error') {
			$('body').text('加载失败');
		};
		
	});
	
	
	
	$.getScript('hello.js').complete(function(){
		
		sayHello();
		
	});
	
});


function trace(value){
	console.log(value);
}
