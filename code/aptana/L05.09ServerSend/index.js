var serverData,statusDiv;
var SERVER_URL="date-server.php";

window.onload=function(){
	serverData=document.getElementById("serverData");
	statusDiv=document.getElementById("statusDiv");
	
	startListenServer();
}


function startListenServer(){
	statusDiv.innerHTML="Start Connect Server...";
	
	var es = new EventSource(SERVER_URL);
	es.addEventListener("newDate",newDateHandler);
	es.onopen=openHandler;
	es.onerror=errorHandler;
	es.onmessage=messageHandler;
}

function openHandler(e){
	statusDiv.innerHTML="Server Open";
}


function errorHandler(e){
	statusDiv.innerHTML="Error";
}


function messageHandler(e){
	serverData.innerHTML=e.data;
}


function newDateHandler(e){
	serverData.innerHTML=e.data;
}

