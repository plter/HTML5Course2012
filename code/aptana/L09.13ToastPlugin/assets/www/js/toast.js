window.toast=function(msg){
	cordova.exec(function(){},function(){},"Toast","show",[msg]);
}
