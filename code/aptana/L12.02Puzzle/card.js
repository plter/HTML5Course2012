this.plter=this.plter||{};

(function(){
	
	var cjs=createjs;
	
	function Card(img,srcRect){
		this.init(img,srcRect);
	}
	
	var p=Card.prototype=new cjs.Container();
	p.Container_init=p.initialize;
	p.init=function(img,srcRect){
		this.Container_init();
		
		this.bitmap = new cjs.Bitmap(img);
		this.bitmap.sourceRect=srcRect;
		this.addChild(this.bitmap);
		
		this.indexI=0;
		this.indexJ=0;
		this.rightIndexI=0;
		this.rightIndexJ=0;
		this.width=srcRect.width;
		this.height=srcRect.height;
	}
	
	
	p.onRightPlace=function(){
		return this.indexI==this.rightIndexI&&this.indexJ==this.rightIndexJ;
	}
	
	
	p.resetPositionByIndexIJ=function(){
		this.x=this.indexI*this.width;
		this.y=this.indexJ*this.height;
	}
	
	p.moveLeft=function(endCallback){
		this.moveToIndex(this.indexI-1,this.indexJ,endCallback);
	}
	p.moveRight=function(endCallback){
		this.moveToIndex(this.indexI+1,this.indexJ,endCallback);
	}
	p.moveUp=function(endCallback){
		this.moveToIndex(this.indexI,this.indexJ-1,endCallback);
	}
	p.moveDown=function(endCallback){
		this.moveToIndex(this.indexI,this.indexJ+1,endCallback);
	}
	
	p.moveToIndex=function(indexI,indexJ,endCallback){
		var offsetX = (indexI-this.indexI)*this.width;
		var offsetY = (indexJ-this.indexJ)*this.height;
		var frames = 10,currentFrame=0;
		var speedX = offsetX/10;
		var speedY = offsetY/10;
		this.indexI=indexI;
		this.indexJ=indexJ;
		
		this.onTick=function(){
			
			this.x+=speedX;
			this.y+=speedY;
			
			currentFrame++;
			if (currentFrame>=frames) {
				this.onTick=null;
				this.resetPositionByIndexIJ();
				
				if (endCallback) {
					endCallback();
				};
			};
		}
		
	}
	
	p.toString=function(){
		return "Card";
	}
	
	plter.Card=Card;
}());
