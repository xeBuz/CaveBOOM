/* PowerUp List:
- Life (+)
- Speed (+/-)
- Size (-)

*/

var types = [];

//Usage: Crafty.e("PowerUp").create(x, y);
Crafty.c("PowerUp",{
	_size : 20,
	_type : "",

	init: function(){
        this.attr({w: this._size,
                   h: this._size})

		this.requires("2D, DOM, Color, Delay");
	},

	create: function(x,y){
		this.setType();
		this.setPos(x,y);

		// Time: 1 minute
		this.delay(function(){this.destroy}, 60000);
	}

	use: function (){
		switch (this.type){
			case "speed_up":
				//Do Some;
				break;
			case "speed_down":
				// Do Some
				break;
			//...
			default:
				console.log("Something is wrong, that type don't exist")
		}
	},
	setType: function (){

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

	destroy: function(){
		this.destroy();
	}
})