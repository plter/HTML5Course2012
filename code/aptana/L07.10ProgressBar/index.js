
var max=100,current=0,pb;

$(document).ready(function(){
	pb=$('#pb');
	pb.progressbar({max:max});
		
	setInterval(changePb,100);
});


function changePb(){
	current++;
	if (current>100) {
		current=0;
	};
	
	pb.progressbar('option','value',current);
}
