LEVEL = 0

Crafty.scene("loading", function() {
    Crafty.load(["media/tileset.png"], function() {
      Crafty.scene("main"); //when everything is loaded, run the main scene
    });

  Crafty.sprite(50, "media/tileset.png", {
    Brick:   [0,0],
    Steel :  [1,0],
    Floor:   [2,0]
  });

  Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 250, y: 100})
        .text("Loading")
        .css({"text-align": "center"}) 
});

 
Crafty.scene("main", function() {
  Crafty.background("Black");


  var Main =  Crafty.e("2D, DOM, Text").attr({w: 100, h: 100, x: 250, y: 100})
                    .text("Press any key to start")
                    .css({"text-align": "center"})
                    .css({"text-color": "#FFFFF"})
                    .bind('KeyDown', function(e) { 
                          Crafty.scene("level")
                        });       
  
  
});


