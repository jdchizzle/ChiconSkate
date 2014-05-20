// Main Game Logic
var game = new ex.Engine();
var groundHeight = game.getHeight() - Config.groundOffset / 2;
game.backgroundColor = ex.Color.Black;

function generateObstacle() {
  var obstacleHeight = randInt(Config.obstacleHeightMin, Config.obstacleHeightMax);
  var obstacle = new Obstacle(game.getWidth() - Config.obstacleWidth / 2, groundHeight - obstacleHeight / 2 - Config.groundOffset / 2, Config.obstacleWidth, obstacleHeight, ex.Color.Blue);
  obstacle.dx = -55;
  game.addChild(obstacle);
}

var player = new Player(20, groundHeight - Config.playerHeight, Config.playerWidth, Config.playerHeight, ex.Color.Red);
player.init();
game.addChild(player);

var ground = new ex.Actor(game.getWidth() / 2, groundHeight, game.getWidth(), Config.groundOffset, ex.Color.Green);
ground.collisionType = ex.CollisionType.PreventCollision;
game.addChild(ground);
game.start();

setInterval(generateObstacle, 2000);
