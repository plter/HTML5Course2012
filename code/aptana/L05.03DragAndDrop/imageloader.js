
var imgContainer,msgDiv;

window.onload=function(){
	
	imgContainer=document.getElementById("imgContainer");
	msgDiv=document.getElementById("msg");
	
	imgContainer.ondragover=function(e){
		e.preventDefault();
	}
	
	imgContainer.ondrop=function(e){
		
		e.preventDefault();
		
		var f=e.dataTransfer.files[0];
		
		var fr = new FileReader();
		fr.onload=function(evt){
			
			imgContainer.innerHTML="<img src=\""+fr.result+"\">";
			
			// showObj(fr);
		}
		fr.readAsDataURL(f);
	}
	
}

function showObj(obj){
	var s="";
	for(var k in obj){
		s+=k+":"+obj[k]+"<br/>";
	}
	msgDiv.innerHTML=s;
}