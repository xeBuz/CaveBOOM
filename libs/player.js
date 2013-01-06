  Crafty.c("Player",{
    size : 50,
    init: function(){
      this.attr({w: this.size,
                 h: this.size})  
      this.requires("DOM, Collision, Solid, Color").color("#521F00");
      this.requires("Twoway").twoway(3);
      
      // Eventos, EnterFrame quiere decir que se ejecuta en cada frame
      this.bind("EnterFrame", function () {
        player = Crafty(player[0]);
      })
    }
  });

  var player = Crafty.e("2D, Player");