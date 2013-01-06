
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
        [ ["brick"], [" "], ["brick"], [" "], ["brick"], ["brick"], [" "], [" "], ["brick"], [" "], ["brick"], ["brick"], ["brick"] ],
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
            var s = Crafty.e("2D, DOM, Collision, Solid, " +map_01[i][j] ).attr({x: j * 50, y: i * 50, });
          } 

          break;
        case 2:
      
          break;
        default:
          console.log("No level")
       }    
    }
  }

  var player = Crafty.e("2D, Player, Collision, Solid");


});