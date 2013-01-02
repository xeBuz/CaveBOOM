LEVEL = 0

Crafty.scene("loading", function() {
    Crafty.load(["media/tileset.png"], function() {
      Crafty.scene("main"); //when everything is loaded, run the main scene
    });

  Crafty.sprite(50, "media/tileset.png", {
    brick:   [0,0],
    steel :  [1,0],
    floor:   [2,0]
  });

  Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 250, y: 100})
        .text("Loading")
        .css({"text-align": "center"})
});


Crafty.scene("main", function() {

  /*
  Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 250, y: 100})
        .text("New Game")
        .css({"text-align": "center"})
        .bind('onclick', function() {
            console.log("click")
            Crafty.scene("level")
        });
  */

  Crafty.scene("level")
});


