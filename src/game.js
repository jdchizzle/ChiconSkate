// Main Game Logic

var game = new Engine();
game.backgroundColor = Color.Black;

var groundHeight = game.getHeight() - 50;

var Ground = Actor.extend({
   init: function(){
      this.preventCollisions = true;
      this.color = Color.Green;
   },
   draw : function(ctx, delta){
      // this.super.draw.call(this, ctx, delta);
      ctx.fillStyle = this.color.toString();
      ctx.fillRect(0, groundHeight, game.getWidth(), 50);
   }
});

var Player = Actor.extend({
   init: function(){
      this.y_vel = 0;
      this.grv = .05;
      this.addEventListener('keydown', function(evt){
         if (evt.key === InputKey.Space) {
            this.y_vel = 1;
         }
      });
   },
   update: function(game, dt) {
      this.super.update.call(this, game, dt);
      this.y -= this.y_vel * dt;
      if (this.y < (groundHeight - 20)) {
         this.y_vel -= this.grv;
      }
      else {
         this.y_vel = 0;
         this.y = groundHeight-20;
      }
   }
})

var player = new Player(20, groundHeight-20, 20, 20, Color.Red);
game.addChild(player);

// new game.Actor(0, groundHeight, game.getWidth(), 50, Color.Axure);
var ground = new Ground();
game.addChild(ground);
game.start();

// var ctx = game.ctx;
// ctx.fillStyle = "#ff0000";
// ctx.fillRect(0, groundHeight, game.getWidth(), 50);


// game.setAntialiasing(false);
// var gameOver = false;
// var score = 0;
// var fighter = new Texture('res/fighter.png');
// var enemyPink = new Texture('res/enemy.png');
// var explosion = new Texture('res/spriteexplosion.png');
// var sheet = new Texture('res/gameSheet.png');

// var laserSound = new Sound('res/laser.wav');
// var enemyFireSound = new Sound('res/enemyfire.wav');
// var explodeSound = new Sound('res/explode.wav');
// var hitSound = new Sound('res/hit.wav');
// var powerUp = new Sound('res/powerup.wav');
// var rocketSound = new Sound('res/rocket.wav');

// var loader = new Loader([sheet, fighter, enemyPink, explosion, laserSound, explodeSound, hitSound, enemyFireSound, powerUp, rocketSound]);

// var spriteSheet = new Drawing.SpriteSheet(explosion, 5, 5, 45, 45);
// var gameSheet = new Drawing.SpriteSheet(sheet, 10.0, 10.0, 32.0, 32.0);

// game.load(loader).then(function(){
//    laserSound.setVolume(Config.soundVolume);
//    explodeSound.setVolume(Config.soundVolume);
//    enemyFireSound.setVolume(Config.soundVolume);
//    powerUp.setVolume(Config.soundVolume);   
//    rocketSound.setVolume(Config.soundVolume);
   
//    console.log("Game Resources Loaded");
// });


// var ship = new Ship(game.width/2, 800, 80, 80, Color.Azure);
// game.addChild(ship);

// var healthBar = new HealthBar();
// game.addChild(healthBar);

// var scoreLabel = new Label("Score: " + score, 20, 50);
// scoreLabel.color = Color.Azure;
// scoreLabel.scale = 3;
// scoreLabel.addEventListener('update', function(evt){
//    this.text = "Score: " + score;
// });
// game.addChild(scoreLabel);

// // Create updater actor
// var gameoverLabel;
// var totalElapsed = 0;
// game.addEventListener('update', function(evt){
//    totalElapsed += evt.delta;
//    if(totalElapsed > Config.spawnTime && !gameOver){
//       totalElapsed = 0;
//       var bad = new Baddie(Math.random()*1000 + 200, -100, 80, 80, Color.Green);
//       game.addChild(bad);      
//    }

//    if(gameOver && !gameoverLabel){
//       gameoverLabel = new Label("Game Over", game.width/2 - 250, game.height/2);      
//       gameoverLabel.color = Color.Green;
//       gameoverLabel.scale = 8;
//       gameoverLabel.blink(1, 1000, 400).repeatForever();
//       game.addChild(gameoverLabel);
//    }
// });

// // Game events to handle
// game.addEventListener('blur', function(){
//    game.stop();
// });
// game.addEventListener('focus', function(){
//    game.start();
// })

// game.addEventListener('keydown', function(evt){
//    if(evt.key === InputKey.D){
//       game.isDebug = !game.isDebug;
//    }
// });