var jumper;
function preload()
{
  jumperimg=loadAnimation("sm1.png","sm2.png","sm3.png")
  jumperstanding=loadAnimation("sm1.png","sm1.png")
}
function setup() {
  createCanvas(1000,600);
  jumper=createSprite(500, 500, 50, 50);
  jumper.addAnimation("standing",jumperstanding);
  jumper.addAnimation("jumper",jumperimg);
  ground=createSprite(500,580,1000,15);
  leftloggroup=new Group();
  rightloggroup=new Group();
  
}


function draw() {
  background("black"); 
  if(keyDown("space"))
  {
    jumper.velocityY=-15;
    jumper.changeAnimation("jumper",jumperimg);
  }
  if(keyWentUp("space"))
  {
    jumper.changeAnimation("standing",jumperstanding);
  }
 jumper.velocityY=jumper.velocityY+2;
 jumper.collide(ground);
 jumper.collide(leftloggroup);
 jumper.collide(rightloggroup);
 logsright();
 logsleft();
  drawSprites();
  if(jumper.collide(leftloggroup))

  {
    jumper.velocityY=0;
  }

}
function logsright()
{
if(frameCount%75===0)
{
  log=createSprite(1000,300,100,30);
  log.velocityX=-10;
  log.lifetime=120;
 rightloggroup.add(log);

}
}
function logsleft()
{
  if(frameCount%50===0)
{
  log=createSprite(0,300,100,30);
  log.velocityX=10;
  log.lifetime=120;
 leftloggroup.add(log);
}
}
