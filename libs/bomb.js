  Crafty.c("Bomb",{
    _size : 30,
	_posX : (0),
    _posY : (0),
	_time : 3000,
	_long: 200,
	
	init: function(){
      this.attr({w: this._size,
                 h: this._size,
				 x: this._posX, 
                 y: this._posY,
				 t: this._time,
				 l: this._long})  
      this.requires("DOM, Collision, Solid, Color").color("#000000");
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
	
	setTime: function (p){
		this._time = p;
	},
	
	setLong: function (p){
		this._long = p;
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