Crafty.scene("level", function(){
  LEVEL = LEVEL + 1
  map_base = 
        [
        [ [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""] ],
        [ [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""] ],
        [ [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""] ],
        [ [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""] ],
        [ [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""] ],
        [ [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""] ],
        [ [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""] ],
        [ [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""] ],
        [ [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""] ],
        [ [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""], ["Steel"], [""] ],
        [ [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""] ]
        ]

  map_01 = 
        [
        [ [""], [""], ["Brick"], ["Brick"], [""], ["Brick"], [""], ["Brick"], [""], ["Brick"], ["Brick"], ["Brick"], [""] ],
        [ [""], ["Steel"], ["Brick"], ["Steel"], ["Brick"], ["Steel"], [""], ["Steel"], ["Brick"], ["Steel"], [""], ["Steel"], ["Brick"] ],
        [ [""], [""], ["Brick"], ["Brick"], ["Brick"], ["Brick"], ["Brick"], ["Brick"], [""], ["Brick"], ["Brick"], [""], ["Brick"] ],
        [ ["Brick"], ["Steel"], [""], ["Steel"], [""], ["Steel"], ["Brick"], ["Steel"], [""], ["Steel"], [""], ["Steel"], ["Brick"] ],
        [ ["Brick"], [""], ["Brick"], ["Brick"], ["Brick"], ["Brick"], [""], ["Brick"], ["Brick"], ["Brick"], ["Brick"], ["Brick"], ["Brick"] ],
        [ [""], ["Steel"], ["Brick"], ["Steel"], ["Brick"], ["Steel"], ["Brick"], ["Steel"], ["Brick"], ["Steel"], [""], ["Steel"], ["Brick"] ],
        [ ["Brick"], [""], [""], ["Brick"], [""], ["Brick"], ["Brick"], ["Brick"], [""], ["Brick"], [""], [""], ["Brick"] ],
        [ ["Brick"], ["Steel"], ["Brick"], ["Steel"], [""], ["Steel"], [""], ["Steel"], ["Brick"], ["Steel"], ["Brick"], ["Steel"], ["Brick"] ],
        [ ["Brick"], [""], ["Brick"], [""], ["Brick"], ["Brick"], [""], [""], ["Brick"], [""], ["Brick"], ["Brick"], ["Brick"] ],
        [ [""], ["Steel"], [""], ["Steel"], ["Brick"], ["Steel"], [""], ["Steel"], ["Brick"], ["Steel"], [""], ["Steel"], ["Brick"] ],
        [ [""], ["Brick"], ["Brick"], [""], ["Brick"], [""], [""], [""], [""], [""], ["Brick"], ["Brick"], [""] ]
        ]


  // Se crea el piso, para todo el terreno
  for (var i=0; i< 11; i++)
  {
    for (var j=0; j< 13; j++)
    {
      Crafty.e("2D, DOM, Floor").attr({x: j * 50, y: i * 50, });
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
          if (map_01[i][j] != ""){
            var s = Crafty.e("Block, " +map_01[i][j] )
                          .attr({x: j * 50, y: i * 50, });

          } 

          break;
        case 2:
      
          break;
        default:
          console.log("No level")
       }    
    }
  }

  var player = Crafty.e("2D, Player");
  var trasgo = Crafty.e("Enemy","trasgo1");
  trasgo.setPosition(250,500);
});


