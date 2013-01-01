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
        .css({"text-align": "center"});
  });


Crafty.scene("main", function() {

  Crafty.scene("level")
});



Crafty.scene("level", function(){
  LEVEL = LEVEL + 1
  map_base = 
        [
        [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "] ],
        [ [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "] ],
        [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "] ],
        [ [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "] ],
        [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "] ],
        [ [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "] ],
        [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "] ],
        [ [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "] ],
        [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "] ],
        [ [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "], ["steel"], [" "] ],
        [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "] ]
        ]

  map_01 = 
        [
        [ [" "], [" "], ["brick"], ["brick"], [" "], ["brick"], [" "], ["brick"], [" "], ["brick"], ["brick"], ["brick"], [" "] ],
        [ [" "], ["steel"], ["brick"], ["steel"], ["brick"], ["steel"], [" "], ["steel"], ["brick"], ["steel"], [" "], ["steel"], ["brick"] ],
        [ ["brick"], [" "], ["brick"], ["brick"], ["brick"], ["brick"], ["brick"], ["brick"], [" "], ["brick"], ["brick"], [" "], ["brick"] ],
        [ ["brick"], ["steel"], [" "], ["steel"], [" "], ["steel"], ["brick"], ["steel"], [" "], ["steel"], [" "], ["steel"], ["brick"] ],
        [ ["brick"], [" "], ["brick"], ["brick"], ["brick"], ["brick"], [" "], ["brick"], ["brick"], ["brick"], ["brick"], ["brick"], ["brick"] ],
        [ [""], ["steel"], ["brick"], ["steel"], ["brick"], ["steel"], ["brick"], ["steel"], ["brick"], ["steel"], [" "], ["steel"], ["brick"] ],
        [ ["brick"], [" "], [" "], ["brick"], [" "], ["brick"], ["brick"], ["brick"], [" "], ["brick"], [" "], [" "], ["brick"] ],
        [ ["brick"], ["steel"], ["brick"], ["steel"], [" "], ["steel"], [" "], ["steel"], ["brick"], ["steel"], ["brick"], ["steel"], ["brick"] ],
        [ ["brick"], [" "], ["brick"], [" "], ["brick"], ["brick"], ["brick"], [" "], ["brick"], [" "], ["brick"], ["brick"], ["brick"] ],
        [ [" "], ["steel"], [" "], ["steel"], ["brick"], ["steel"], [" "], ["steel"], ["brick"], ["steel"], [" "], ["steel"], ["brick"] ],
        [ [" "], ["brick"], ["brick"], [" "], ["brick"], [" "], [" "], [" "], [" "], [" "], ["brick"], ["brick"], [" "] ]
        ]


  // Se crea el piso, para todo el terreno
  for (var i=0; i< 11; i++)
  {
    for (var j=0; j< 13; j++)
    {
      Crafty.e("2D, DOM, floor").attr({x: j * 50, y: i * 50, });
    }  
  } 

  // Vuelve a recorrer todo el terreno colocando el mapa definido
  for (var i=0; i< 11; i++)
  {
    for (var j=0; j< 13; j++)
      {
      switch(LEVEL)
      {
        case 1:
          if (map_01[i][j] != " "){
            var s = Crafty.e("2D, DOM, " +map_01[i][j] ).attr({x: j * 50, y: i * 50, });
          } 

          break;
        case 2:
      
          break;
        default:
          console.log("No level")
       }    
    }
  }

});