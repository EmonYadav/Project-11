var runner, runner_running;

var path, invisiblePath, pathImage;

var invisibleBorder1, invisibleBorder2;

function preload(){
  //pre-load images

  runner_running = loadAnimation("Runner-1.png","Runner-2.png");

  pathImage = loadImage("path.png");
 
}

function setup(){

  createCanvas(400,400);
  //create sprites here

path=createSprite(200,200);
path.addImage(pathImage);
path.velocityY=4;
path.scale=1.2;

runner=createSprite(200,300);
runner.addAnimation(runner_running);

invisibleBorder1=createSprite(360,350,5,700);
invisibleBorder1.visible = false;

invisibleBorder2=createSprite(47,350,5,700);
invisibleBorder2.visible = false;

}
  


function draw() {
  background("black");

  if(path.y > 400){

path.y = height/2;

  }

  runner.x = mouseX;

  if (runner.x > 360){

  runner.x = 359

  }

  if (runner.x < 47){

  runner.x = 48

  }

  runner.collide(invisibleBorder1);
  runner.collide(invisibleBorder2);

  drawSprites();

}
