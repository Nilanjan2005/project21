var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);

  speed =random(223,321);
 weight = random(30,52);
 thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocity.x = speed;
  bullet.shapeColor =color("white");
  wall = createSprite(1200, 200,thickness,height/2);
 wall.shapecolor = color(80,80,80);
}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet,wall))
  {
      bullet.velocityX = 0;
    var damage = 0.5*bulletweight*bulletspeed*bulletspeed/(thicknesswall*thicknesswall*thicknesswall);
    if(damage<10){
      bullet.shapeColor = color("green") 
      }
    if(damage>10 ){
      bullet.shapeColor =color("red")
    }
    
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}