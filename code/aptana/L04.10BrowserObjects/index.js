var windowInfoDiv, navigatorInfoDiv, screenInfoDiv, locationInfoDiv, historyInfoDiv;

window.onload = function() {
	windowInfoDiv = document.getElementById("windowInfoDiv");
	windowInfoDiv.innerHTML = getObjInfo(window);

	navigatorInfoDiv = document.getElementById("navigatorInfoDiv");
	navigatorInfoDiv.innerHTML = getObjInfo(navigator);

	screenInfoDiv = document.getElementById("screenInfoDiv");
	screenInfoDiv.innerHTML = getObjInfo(screen);

	locationInfoDiv = document.getElementById("locationInfoDiv");
	locationInfoDiv.innerHTML = getObjInfo(location);

	try {
		historyInfoDiv = document.getElementById("historyInfoDiv");
		historyInfoDiv.innerHTML = getObjInfo(history);
	} catch(err) {
		alert(err);
	}
	
	document.getElementById("backBtn").onclick=function(){
		history.back();
	}
}
function getObjInfo(obj) {
	var str = "";
	for (var k in obj) {
		str += k + ":" + obj[k] + "<br/>";
	}
	return str;
}
