
var mydg;

$(document).ready(function(){
	
	mydg=$('#mydialog');
	mydg.dialog({autoOpen:false,title:"你好",modal:true,
		buttons:[
			{text:"是",click:function(){
				$('#result').text("中午吃饭了");
				mydg.dialog('close');
			}},
			{text:"否",click:function(){
				$('#result').text("中午没有吃饭");
				mydg.dialog('close');
			}},
		]
	});
		
	
	$('#openDialog').click(function(){
		mydg.dialog('open');
	});
	$('#closeDialog').click(function(){
		mydg.dialog('close');
	});
	
	
});

