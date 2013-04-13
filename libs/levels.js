var enemies_json;
var level; 
var map;
var player;

Crafty.scene("level", function(){
	level = level + 1

    // To-Do: Diferent files for each world/level.
    CreateMap(level);
    CreatePlayer(level);
    CreateEnemies(level);
});


function CreateMap(level){	
	Crafty.background("url(media/floor.jpg)");
	map = Crafty.e("TiledLevel").tiledLevel("json/maps/level_001.json");
	enemies_json = "json/enemies/base.json";
};

function CreatePlayer(level){
	player = Crafty.e("2D, Player");
}

function CreateEnemies(level){
    // Set the position and type of enemies for the current level 
    Crafty.e("Enemy").Create("base");

    var trasgo = Crafty.e("Enemy","trasgo1");
  	trasgo.setPosition(250,500);
};


