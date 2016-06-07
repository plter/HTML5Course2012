window.onload=function(){
	
	var body = document.getElementsByTagName("body")[0];
// 	
	// var html="";
// 	
	// for(var i=0;i<100;i++){
		// html+=i+"<br/>";
	// }
// 	
	// body.innerHTML=html;
	
	
	// var arr = ["Hello","你好"];
	// for (var i=0; i < arr.length; i++) {
	  // alert(arr[i]);
	// };
	
	var html="";
	
	//键
	for(var k in body){
		html+=k+":"+body[k]+"<br/>";
	}
	
	body.innerHTML=html;
	
	
}
