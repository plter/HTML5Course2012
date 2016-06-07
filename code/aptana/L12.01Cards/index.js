

Array.prototype.remove=function(obj){
	for (var i=0; i < this.length; i++) {
	  if (this[i]==obj) {
	  	this.splice(i,1);
	  	return;
	  };
	};
}




$(function(){
	var cjs=createjs;
	
	var stage = new cjs.Stage($('#gameView')[0]);
	cjs.Ticker.setFPS(50);
	cjs.Ticker.addListener(stage);
	
	var pointsArr=[],cardsArr=[],currentIndex=1;
	
	
	startGame();
	
	function genPoint(){
		pointsArr.length=0;
		
		for (var i=0; i < 10; i++) {
		  for (var j=0; j < 7; j++) {
		  	pointsArr.push(new cjs.Point((plter.Card.WIDTH+5)*i,(plter.Card.HEIGHT+5)*j));
		  };
		};
	}
	
	function addCards(){
		cardsArr.length=0;
		
		var p,c;
		
		for (var i=1; i < 10; i++) {
			p= pointsArr.splice(parseInt(Math.random()*pointsArr.length),1)[0];
			
			c=new plter.Card(i);
			stage.addChild(c);
			cardsArr.push(c);
			c.onClick=cardClickHandler;
			
			c.x=p.x;
			c.y=p.y;			
		};
	}
	
	
	function cardClickHandler(event){
		if (event.target.num==currentIndex) {
			
			stage.removeChild(event.target);
			cardsArr.remove(event.target);
			
			turnAllCardsOver();
			
			if (cardsArr.length<=0) {
				alert("成功");
			};
			
			currentIndex++;
		}else{
			alert("错误");
		};
	}
	
	
	function turnAllCardsOver(){
		for (var i=0; i < cardsArr.length; i++) {
		  cardsArr[i].turnToVerso();
		};
	}
	
	function startGame(){
		currentIndex=1;
		
		genPoint();
		addCards();
	}
	
});



