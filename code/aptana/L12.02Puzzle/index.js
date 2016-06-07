
Array.prototype.remove=function(obj){
	for (var i=0; i < this.length; i++) {
	  if(this[i]==obj){
	  	this.splice(i,1);
	  	return;
	  }
	};
}




$(function(){
	
	//addlisteners
	$("#startBreakBtn").bind('click', function(event) {
	  startBreak();
	});
	$("#stopBreakBtn").bind('click', function(event) {
	  stopBreak();
	});
	
	
	var cjs=createjs;
	
	var stage = new cjs.Stage($('#gameView')[0]);
	cjs.Ticker.setFPS(50);
	cjs.Ticker.addListener(stage);
	
	var H_NUM=6,V_NUM=4,cardWidth,cardHeight;
	var cardsArr=[];
	var currentNullIndexI=0,currentNullIndexJ=0;
	var DIR_LEFT='left',DIR_RIGHT='right',DIR_UP='up',DIR_DOWN='down',DIR_NONE='none';
	
	var img = new Image();
	img.onload=function(){
		genCards();
	}
	img.src="image.png";
	
	
	
	function genCards(){
		
		cardWidth=img.width/H_NUM;
		cardHeight=img.height/V_NUM;
		var c;
		
		for (var i=0; i < H_NUM; i++) {
			cardsArr[i]=[];
			
			for (var j=0; j < V_NUM; j++) {
				if (i<H_NUM-1||j<V_NUM-1) {
					c=new plter.Card(img,new cjs.Rectangle(i*cardWidth,j*cardHeight,cardWidth,cardHeight));
					cardsArr[i][j]=c;
					c.indexI=i;
					c.indexJ=j;
					c.rightIndexI=i;
					c.rightIndexJ=j;
					c.resetPositionByIndexIJ();
					c.onClick=cardClickHandler;
					stage.addChild(c);
				};
			};
		};
		
		currentNullIndexI=H_NUM-1;
		currentNullIndexJ=V_NUM-1;
		cardsArr[currentNullIndexI][currentNullIndexJ]=null;
	}
	
	function cardClickHandler(event){
		
		var c = event.target;
		
		moveCard(c,getDir(c));
	}
	
	
	/**
	 * 
 * @param {Object} Card Object
 * @param {Object} dir
	 */
	function moveCard(c,dir,endCallback,uncheck){
		switch(dir){
			case DIR_LEFT:
				cardsArr[c.indexI][c.indexJ]=null;
				currentNullIndexI=c.indexI;
				currentNullIndexJ=c.indexJ;
				c.moveLeft(endCallback);
				cardsArr[c.indexI][c.indexJ]=c;
				
				if (!uncheck) {
					checkSuc();
				};
				break;
			case DIR_RIGHT:
				cardsArr[c.indexI][c.indexJ]=null;
				currentNullIndexI=c.indexI;
				currentNullIndexJ=c.indexJ;
				c.moveRight(endCallback);
				cardsArr[c.indexI][c.indexJ]=c;
				
				if (!uncheck) {
					checkSuc();
				};
				break;
			case DIR_UP:
				cardsArr[c.indexI][c.indexJ]=null;
				currentNullIndexI=c.indexI;
				currentNullIndexJ=c.indexJ;
				c.moveUp(endCallback);
				cardsArr[c.indexI][c.indexJ]=c;
				
				if (!uncheck) {
					checkSuc();
				};
				break;
			case DIR_DOWN:
				cardsArr[c.indexI][c.indexJ]=null;
				currentNullIndexI=c.indexI;
				currentNullIndexJ=c.indexJ;
				c.moveDown(endCallback);
				cardsArr[c.indexI][c.indexJ]=c;
				
				if (!uncheck) {
					checkSuc();
				};
				break;
		}
	}
	
	
	function checkSuc(){
		var arr,c;
		
		for (var i=0; i < cardsArr.length; i++) {
			arr=cardsArr[i];
			
			if (arr) {
				for (var j=0; j < arr.length; j++) {
					c=arr[j];
					if (c&&!c.onRightPlace()) {
						return false;
					};
				};
			};
		};
		
		alert("成功");
		
		return true;
	}
	
	
	function getDir(card){
		if (card.indexI>0&&cardsArr[card.indexI-1][card.indexJ]==null) {
			return DIR_LEFT;
		};
		if (card.indexI<H_NUM-1&&cardsArr[card.indexI+1][card.indexJ]==null) {
			return DIR_RIGHT;
		};
		if (card.indexJ>0&&cardsArr[card.indexI][card.indexJ-1]==null) {
			return DIR_UP;
		};
		if (card.indexJ<V_NUM-1&&cardsArr[card.indexI][card.indexJ+1]==null) {
			return DIR_DOWN;
		};
	
		return DIR_NONE;
	}
	
	
	var breaking=false;
	function startBreak(){
		breaking=true;
		
		breakCards();
	}
	
	function stopBreak(){
		breaking=false;
	}
	
	var lastMovedDir=DIR_NONE;
	function breakCards(){
		
		if (!breaking) {
			return;
		};
		
		
		var possibleDirs = [DIR_LEFT,DIR_DOWN,DIR_RIGHT,DIR_UP];
		possibleDirs.remove(lastMovedDir);
		
		if (currentNullIndexI<=0) {
			possibleDirs.remove(DIR_LEFT);
		};
		if (currentNullIndexI>=H_NUM-1) {
			possibleDirs.remove(DIR_RIGHT);
		};
		if (currentNullIndexJ<=0) {
			possibleDirs.remove(DIR_UP);
		};
		if (currentNullIndexJ>=V_NUM-1) {
			possibleDirs.remove(DIR_DOWN);
		};
		
		switch(possibleDirs[parseInt(possibleDirs.length*Math.random())]){
			case DIR_LEFT:
				moveCard(cardsArr[currentNullIndexI-1][currentNullIndexJ],DIR_RIGHT,breakCards,true);
				lastMovedDir=DIR_RIGHT;
				break;
			case DIR_RIGHT:
				moveCard(cardsArr[currentNullIndexI+1][currentNullIndexJ],DIR_LEFT,breakCards,true);
				lastMovedDir=DIR_LEFT;
				break;
			case DIR_UP:
				moveCard(cardsArr[currentNullIndexI][currentNullIndexJ-1],DIR_DOWN,breakCards,true);
				lastMovedDir=DIR_DOWN;
				break;
			case DIR_DOWN:
				moveCard(cardsArr[currentNullIndexI][currentNullIndexJ+1],DIR_UP,breakCards,true);
				lastMovedDir=DIR_UP;
				break;
		}
	}
	
});


