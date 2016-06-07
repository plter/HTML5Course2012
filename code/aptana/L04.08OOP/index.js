
try{
	alert(this);
}catch(err){
	alert(err);
}


window.onload=function(){
	
	/*var c = new Computer();
	alert(c.getName());
	
	var pc = new PC();
	alert(pc.getName());
	
	var nb = new NotebookComputer();
	alert(nb.getName());
	
	alert(Computer.PC);
	
	Hello.sayHello();*/
}


function Computer(){
}
Computer.prototype.getName=function(){
	return "Computer";
}
Computer.PC="PC";

function PC(){
}
PC.prototype=new Computer();
PC.prototype.getName=function(){
	return "PC";
}

function NotebookComputer(){
}
NotebookComputer.prototype=new Computer();
NotebookComputer.prototype.getName=function(){
	return "Notebook Computer";
}


var Hello ={name:"小吴",sayHello:function(){alert("Hello 小吴");}};








