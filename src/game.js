// Main Game Logic

var game = new ex.Engine();
game.backgroundColor = ex.Color.Black;

var groundHeight = game.getHeight() - 50;

var Ground = ex.Actor.extend({
   init: function(){
      this.preventCollisions = true;
      this.color = ex.Color.Green;
   },
   draw : function(ctx, delta){
      ctx.fillStyle = ex.Color.Green;
      ctx.fillRect(0, groundHeight, game.getWidth(), 50);
   }
});

var Player = ex.Actor.extend({
  init: function(){
    this.y_vel = 0;
    this.grv = .05;

    // init events
    this.addEventListener('keydown', function(event){
      if (event.key === ex.InputKey.Space) {
        this.y_vel = 1;
      }
    });
    this.addEventListener('update', function(event){
      this.y -= this.y_vel * event.delta;
      if (this.y < (groundHeight - 20)) {
        this.y_vel -= this.grv;
      }
      else {
        this.y_vel = 0;
        this.y = groundHeight - 20;
      }
    });
  }
})

var player = new Player(20, groundHeight-20, 20, 20, ex.Color.Red);
player.init();
game.addChild(player);

var ground = new ex.Actor(0, groundHeight, game.getWidth() * 2, 50, ex.Color.Green);
game.addChild(ground);
game.start();
