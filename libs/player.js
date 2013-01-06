  Crafty.c("Player",{
    _size : 45,
	_posX : (100),
    _posY : (100),
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
				 s: this._speeds,
				 r: this._resistence,
				 b: this._bombs,
				 l: this._life,
				 a: this._autobomb})  
				 
      this.requires("DOM, Collision, Delay, Solid, Color").color("#521F00");
	  
	  this.requires("Multiway").multiway({x:this._speeds,y:this._speeds}, 
                            {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180, 
                             W: -90, S: 90, D: 0, A: 180});
							 
	  this.bind('Moved', function(from) { //funcion que evita que el personaje salga de la ventana 
		    if((this.x + this.w) > WIDTH || this.x < 0 || (this.y + this.h) > HEIGHT || this.y < 0) {
    				this.attr({x: from.x, y:from.y});
		   }
		});
	  var c = 0;	
	  this.bind('KeyDown', function(e) { //funcion que crea las bombas cuando se presiona la barra espaciadora
			
            if(e.keyCode === Crafty.keys.SPACE && c < this.b && this.a == true){
				var bomb = Crafty.e("2D, Bomb").attr({x: this.x+8, y: this.y+15 });
				c++;
				this.delay(function() {
						var fire1 = Crafty.e("2D, Fire").attr({x: bomb.x-8, y: bomb.y-bomb.l-15, h: bomb.l});
						var fire2 = Crafty.e("2D, Fire").attr({x: bomb.x-8, y: bomb.y+bomb.w+5, h: bomb.l });
						var fire3 = Crafty.e("2D, Fire").attr({x: bomb.x-8-bomb.l, y: bomb.y-15, w: bomb.l });
						var fire4 = Crafty.e("2D, Fire").attr({x: bomb.x-8+50, y: bomb.y-15, w: bomb.l });
						//bomb.destroy(); 
						c--;},
						bomb.t);
			}				
		});
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



