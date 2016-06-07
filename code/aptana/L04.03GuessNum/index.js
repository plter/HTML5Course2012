
/**
 * @type {HTMLInputElement}
 */
var numInput;
var cumpterNum= parseInt( Math.random()*100);


window.onload=function(){
	document.getElementById("submitBtn").onclick=btnClicked;
	numInput=document.getElementById("numInput");

	// alert(timeFormat(8));
}

function btnClicked(){
	var num=numInput.value;
	
	if (num>cumpterNum) {
		alert("输入的数字太大");
	}else if (num<cumpterNum) {
		alert("输入的数字太小");
	}else{
		alert("正确");
	};
}


/**
 * 
 * @param {Number} t
 * @return {String}
 */
function timeFormat(t){
	// if (t>=10) {return t;} else{return "0"+t};
	return t>=10?t:"0"+t;
}
