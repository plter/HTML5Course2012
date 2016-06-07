
var numDiv,worker=null;

window.onload=function(){
	
	numDiv=document.getElementById("numDiv");
	
	document.getElementById("startBtn").onclick=startWorker;
	document.getElementById("stopBtn").onclick=function(){
		if (worker) {
			worker.terminate();
			worker=null;
		};
	}
	
}


function startWorker(){
	if (worker) {
		return;
	};
	
	worker = new Worker("count.js");
	worker.onmessage=function(e){
		numDiv.innerHTML=e.data;
	}
}
