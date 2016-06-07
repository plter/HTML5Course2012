window.onload=function(){
	
	
	var ta=document.getElementById("ta");
	
	if (localStorage.text) {
		ta.value=localStorage.text;
	};
	
	
	document.getElementById("saveBtn").onclick=function(){
		// alert(ta.value);
		
		localStorage.text=ta.value;
	}
	
}
