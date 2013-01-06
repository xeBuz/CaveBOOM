Crafty.load("media/characters.png");

Crafty.c("Enemy",{
	_w : 45,
	_h : 45,
	_walkOn : true,
	
	init : function(){		
		this.attr({
			w : this._w,
			h : this._h,			
			})
		this.requires("Color").color("white");				
		},
		
	setPosition : function(xPos,yPos){
		this.attr({
			x : xPos,
			y : yPos,
			})		
		},
	autoWalk : function(){		

				
			}
		}
	});

Crafty.sprite(32,"media/characters.png",{
	trasgo1 : [8,14],
	gully1 : [0,13]
	});




