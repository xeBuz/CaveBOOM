  Crafty.c("Bomb",{
    _size : 30,
	_posX : (0),
    _posY : (0),
	_time : 3000,
	_long: 50,
	
	init: function(){
      this.attr({w: this._size,
                 h: this._size,
				 x: this._posX, 
                 y: this._posY,
				 time: this._time,
				 length: this._long})  
      this.requires("DOM, Collision, Delay, Solid, Color").color("#000000");
	},
	
	setSize: function (p){
		this._size = this._size + p;
	},
	
	setPosX: function (p){
		this._posX = p;
	},
	
	setPosY: function (p){
		this._posY = p;
	},

	setPos: function (x, y){
		this._posX = x;
		this._posY = y;
	},	
	
	setTime: function (p){
		this._time = p;
	},
	
	setLong: function (p){
		this._long = p;
	},
	boom: function() {
		this.delay(function() {
						var fireUp = Crafty.e("2D, Fire").attr({x: this.x-8, y: this.y-this.length-15, h: this.length});
						var fireDown = Crafty.e("2D, Fire").attr({x: this.x-8, y: this.y+this.w+5, h: this.length });
						var fireLeft = Crafty.e("2D, Fire").attr({x: this.x-8-this.length, y: this.y-15, w: this.length });
						var fireRight = Crafty.e("2D, Fire").attr({x: this.x-8+50, y: this.y-15, w: this.length });
						var fireCenter = Crafty.e("2D, Fire").attr({x: this.x-8, y: this.y-15, w: this.length });
						this.delay(function() {
								fireUp.destroy(); 
								fireDown.destroy();
								fireLeft.destroy();
								fireRight.destroy();
								fireCenter.destroy();						
								contBombas--;						
								this.destroy();
								},
								700);
						},
						this.time);
	}
});

Crafty.c("Fire",{
    _size : 50,
	_posX : (0),
    _posY : (0),
	
	init: function(){
      this.attr({w: this._size,
                 h: this._size,
				 x: this._posX, 
                 y: this._posY,})  
      this.requires("DOM, Collision, Solid, Color").color("#D15A14");
	}
});