var background1,runner,background2, runner2;
function preload(){
  //pre-load images
  runner=loadAnimation("Runner-1.png","Runner-2.png");
  background1=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  background2=createSprite(200,200,200,200);
  background2.addImage("f",background1);
  
  runner2=createSprite(200,200,200,200);
  runner2.addAnimation("y",runner);
  runner2.scale=0.1;
  
 
}

function draw() {
  background("black");
  background2.velocityY=1;
  if(background2.y>400){
    background2.y=background2.height/2;
  }
  drawSprites();

}
