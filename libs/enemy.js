Crafty.load("media/characters.png");

Crafty.sprite(32,"media/characters.png",{
		trasgo1 : [8,14],
		gully1 : [0,13]
	});

var file = "json/enemies/base.json";

// Enemy craation:
// Crafty.e("Enemy").Create("Name").Move()
Crafty.c("Enemy", {
	_size : 45,
	_posX : 100,
	_posY : 100,
	_life : 0,
	_speed : 0, 
	_ghost : false,
	
	Create: function(name){	
		// this is important
		var e = this;

		e.attr({w: e._size,
                h: e._size,
				x: e._posX, 
                y: e._posY });

		$.getJSON( file , function(data){
			$(data.Enemies).each(function(index, element){
				if (element.name == name){
					e._life = element.life;
					e._speed = element.speed;
					e.requires(element.components);
					//e.setComponents(element.components);
					e._ghost = element.ghost == "true"		
				};
			})
		});
	},

	// Fix this
	setComponents: function(comp){
		this.requires(comp)
	},
	
 	setPosition : function(xPos,yPos){
 		this.attr({
 				x : xPos,
 				y : yPos,
			})		
	},

});


