var num=0;
var txt;

window.onload=function(){
	
	txt=document.getElementById("txt");
	
	if (sessionStorage.num) {
		num=sessionStorage.num;
	}else{
		num=0;
	};
	
	showNum();
	
	document.getElementById("addBtn").onclick=function(){
		num++;
		sessionStorage.num=num;
		
		showNum();
	}
}


function showNum(){
	txt.innerHTML=num;;
}
