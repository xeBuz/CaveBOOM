Crafty.c("Block", { 
	_size : 50,

	init: function(){
		this.attr({w: this._size,
                   h: this._size,});
		this.requires("2D, DOM, Solid, Collision");
		this.collision( new Crafty.polygon([0,0],[50,0],[50,50],[0,50]) );
//		this.onHit("Fire", function(){
//				this.destroy();
//		});

	},
})

Crafty.c("Brick", {
	_size : 50,

	init: function(){
		this.attr({w: this._size,
                   h: this._size,});
		this.requires("2D, DOM, Solid, Collision");
		this.collision( new Crafty.polygon([0,0],[50,0],[50,50],[0,50]) );
		this.onHit("Fire", function(){
				this.destroy();
		});
	},
})

Crafty.c("Steel", { 
	_size : 50,

	init: function(){
		this.attr({w: this._size,
                   h: this._size,});
		this.requires("2D, DOM, Solid, Collision");
		this.collision( new Crafty.polygon([0,0],[50,0],[50,50],[0,50]) );

	},
})
