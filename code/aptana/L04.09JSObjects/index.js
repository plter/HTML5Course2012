
var timeSpan;


window.onload=function(){
	timeSpan=document.getElementById("timeSpan");
	
	showTime();
}


function showTime(){
	var d = new Date();
	timeSpan.innerHTML=d.getFullYear()+"-"+timeFormat(d.getMonth()+1)+"-"+timeFormat(d.getDate())+" "+
						timeFormat(d.getHours())+":"+timeFormat(d.getMinutes())+":"+timeFormat(d.getSeconds());
	
	setTimeout(showTime,1000);
}


function timeFormat(t){
	return t>=10?t:"0"+t;
}

