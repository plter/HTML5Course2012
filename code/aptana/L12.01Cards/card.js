this.plter=this.plter||{};

(function(){
	
	var cjs = createjs;
	
	function Card(num){
		this.num=num;
		
		this.init();
	}
	Card.WIDTH=50;
	Card.HEIGHT=50;
	var p=Card.prototype=new cjs.Container();
	p.Container_init=p.initialize;
	p.init=function(){
		this.Container_init();
		
		//add recto
		this.recto=new cjs.Container();
		this.rectoBg=new cjs.Shape();
		with(this.rectoBg.graphics){
			beginFill('#0000FF');
			rect(0,0,Card.WIDTH,Card.HEIGHT);
			endFill();
		}
		//add bg to recto
		this.recto.addChild(this.rectoBg);
		//add label to recto
		this.label=new cjs.Text(this.num);
		this.label.font="30pt 宋体";
		this.label.color="#FFFFFF";
		this.recto.addChild(this.label);
		this.addChild(this.recto);
		
		//add verso
		this.verso=new cjs.Shape();
		with(this.verso.graphics){
			beginFill('#FF0000');
			rect(0,0,Card.WIDTH,Card.HEIGHT);
			endFill();
		}
		this.addChild(this.verso);
		
		//reset reg point
		this.recto.regX=Card.WIDTH/2;
		this.verso.regX=Card.WIDTH/2;
		this.recto.x=Card.WIDTH/2;
		this.verso.x=Card.WIDTH/2;
		
		//show recto by default
		this.showRecto();
	}
	
	p.showRecto=function(){
		this.recto.visible=true;
		this.verso.visible=false;
		
		this.rectoVisible=true;
	}
	
	p.showVerso=function(){
		this.recto.visible=false;
		this.verso.visible=true;
		
		this.rectoVisible=false;
	}
	
	
	p.turnToRecto=function(){
		if (!this.rectoVisible) {
			
			this.onTick=function(){
				this.verso.scaleX-=0.1;
				if (this.verso.scaleX<=0) {
					
					this.showRecto();
					this.recto.scaleX=0;
					
					this.onTick=function(){
						this.recto.scaleX+=0.1;
						
						if (this.recto.scaleX>=1) {
							this.recto.scaleX=1;
							
							this.onTick=null;
						};
					}
				};
			}
		};
	}
	p.turnToVerso=function(){
		
		if (this.rectoVisible) {
			
			this.onTick=function(){
				this.recto.scaleX-=0.1;
				if (this.recto.scaleX<=0) {
					
					this.showVerso();
					this.verso.scaleX=0;
					
					this.onTick=function(){
						this.verso.scaleX+=0.1;
						
						if (this.verso.scaleX>=1) {
							this.verso.scaleX=1;
							
							this.onTick=null;
						};
					}
				};
			}
		};
	}

	plter.Card=Card;
}())