
var clickMeBtn;
var msgDiv;

window.onload=function(){
	
	clickMeBtn=document.getElementById("clickMeBtn");
	msgDiv=document.getElementById("msgDiv");
		
	clickMeBtn.onclick=function(e){
		// alert("Button \"clickMeBtn\" Clicked");
		
		// clickMeBtn.onclick=null;
		
		if (!window.event) {
			window.event=e;
			//alert("不支持全局event");
		};
		
		if (!window.event) {
			alert("Fuck,你用的是什么浏览器？");
		};
		
		showObj(window.event);
	}
}


function showObj(obj){
	var h="";
	
	for(var k in obj){
		h+=k+":"+obj[k]+"<br/>";
	}
	
	msgDiv.innerHTML=h;
}
