Crafty.scene("level", function(){
  LEVEL = LEVEL + 1
 

  Crafty.background("url(media/floor.jpg)");
  var map = Crafty.e("TiledLevel").tiledLevel("media/maps/level_001.json");
  var player = Crafty.e("2D, Player");
 
  //Crafty.modules({ 'crafty-debug-bar': 'release' }, function () {
  //  Crafty.debugBar.show();
  //});
  
  var trasgo = Crafty.e("Enemy","trasgo1");
  trasgo.setPosition(250,500);
});


