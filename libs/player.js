  var contBombas = 0;
  Crafty.c("Player",{
    _size : 45,
	_posX : (0),
    _posY : (0),
	_speeds : 1.5,
	_resistence: 1,
	_bombs: 3,
	_life: 1,
	_autobomb: true,
		
    init: function(){
      this.attr({w: this._size,
                 h: this._size,
				 x: this._posX, 
                 y: this._posY,
				 speeds: this._speeds,
				 resistence: this._resistence,
				 bombs: this._bombs,
				 life: this._life,
				 autobomb: this._autobomb})  
				 
      this.requires("DOM, Color, Collision, Solid").color("#521F00");
	  
	  this.requires("Multiway").multiway({x:this._speeds,y:this._speeds}, 
                            {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180, 
                             W: -90, S: 90, D: 0, A: 180});
							 
	  this.bind('Moved', function(from) { //funcion que evita que el personaje salga de la ventana 
		    if((this.x + this.w) > WIDTH || this.x < 0 || (this.y + this.h) > HEIGHT || this.y < 0 || 
		    	this.hit('Block') ) {
    				this.attr({x: from.x, y:from.y});
		     }
		});
		
	  this.bind('KeyDown', function(e) { //funcion que crea las bombas cuando se presiona la barra espaciadora
			
            if(e.keyCode === Crafty.keys.SPACE && contBombas < this.bombs && this.autobomb == true){
				
				var bomb = Crafty.e("2D, Bomb").attr({x: this.positionX() , y: this.positionY() }); 
				contBombas++;
				bomb.boom();
			}				
		});
		
	},

	positionX: function(){ //calculamos x para que la bomba quede al centro de la cuadricula
		var px = Math.round ((this.x+this.h)/50);
		var newPx = (px*50)-40;
		return newPx;
	},
	
	positionY: function(){ //calculamos y para que la bomba quede al centro de la cuadricula
		var py= Math.round ((this.y+this.w)/50);
		var newPy = (py*50)-40;
		return newPy;
	},
		
	setSpeeds: function (p){
		this._speeds = p;
	},
	
	setSize: function (p){
		this._size = p;
	},
	
	setPosX: function (p){
		this._posX = p;
	},
	
	setPosY: function (p){
		this._posY = p;
	},
	
	setResistence: function (p){
		this._resistence = p;
	},
	setBombs: function (p){
		this._bombs = p;
	},
	setLife: function (p){
		this._life = p;
	},
	
	setAutobomb: function (p){
		this._autobomb = p;
	}
  });



