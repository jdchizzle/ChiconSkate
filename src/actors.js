
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
      if (this.y < (this.getMinHeight())) {
        this.y_vel -= this.grv;
      }
      else {
        this.y_vel = 0;
        this.y = this.getMinHeight();
      }
    });

    this.addEventListener('collision', function(event) {
      if(event.other instanceof Obstacle && !event.other._isKilled){
        this.kill();
      }
    });

  },

  getMinHeight : function() {
     return groundHeight - Config.playerHeight / 2 - Config.groundOffset / 2;
  }
})

var Obstacle = ex.Actor.extend({});