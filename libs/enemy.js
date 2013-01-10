Crafty.load("media/characters.png");

Crafty.c("Enemy",{
	_w : 45,
	_h : 45,
	_walkOn : true,
	axis : "",
	
	init : function(){		
		this.attr({
			w : this._w,
			h : this._h,			
			})
		/*
		 *Define all the properties what the enemy will have
		 * */
		this.requires("Color").color("white");
		this.requires("2D, DOM, Collision");

		/*
		 * Set the auto walk of the enemy*/
		 this.bind("EnterFrame",function(){			 
			 this.randomAxisPath();
			 this.movement(this.axis);			 
			 });
		},
		
	setPosition : function(xPos,yPos){
		this.attr({
			x : xPos,
			y : yPos,
			})		
		},
		
	randomAxisPath : function(){
		var pathFlag = parseInt(Math.random()*2);
		console.log(pathFlag);
		if(pathFlag === 0){
			this.axis = "x";
		}
		else{
			this.axis = "y";
			}
		},

	/*
	 * When the enemy crash with an obstacule or try to go so far to the
	 * limits of the display, this function can help you to modify the
	 * orientation of the enemy having in mind the cardinal points*/
	 ranmdomAxisCollision : function(){
		var direction = parseInt(Math.random()*4);
		/*
		 * The directrion param deffine the posible way what the enemy will have
		 * 0 is for the right side
		 * 1 is for the left side
		 * 2 is for up side
		 * 3 is for down side*/
		switch(direction){
			case 0:				
				this.move("w",3);
				break;
			case 1:
				this.move("e",3);
				break;
			case 2:
				this.move("n",3);
				break;
			case 3:
				this.move("s",3);
				break;
			}
		},

	movement : function(axis){		
		if(axis === 'x'){
			this.x++;
			if((this.x+this.w)>WIDTH || this.hit("brick") || this.hit("steel")){
					//this.ranmdomAxis();
					this.move("w",3);
				}			
			}
		else{
			this.y++;
			}
		},	
	});

Crafty.sprite(32,"media/characters.png",{
	trasgo1 : [8,14],
	gully1 : [0,13]
	});



