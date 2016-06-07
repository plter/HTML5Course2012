$(document).ready(function() {
	$('#languageInput').autocomplete({source:[
		'JS','JavaScript','JScript','JB','JBuilder','JButton','JFrame','JPanel',
		'AS','AS2','AS3','ActionScript','Action',
		'PHP',"Python",'Perl'
	]});
	
	$('div').button();
});
