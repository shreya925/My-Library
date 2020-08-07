var movingRect, fixedRect, gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100, 100, 20, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //movingRect.velocityX = 2;
  movingRect.velocityY = 2;
  fixedRect = createSprite(100, 300, 40, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  //fixedRect.velocityX = 2;
  //fixedRect.velocityY = -2;

  gameObject1 = createSprite(200, 100, 30, 40);
  gameObject1.shapeColor = "blue";
  gameObject1.velocityY = 2;

  gameObject2 = createSprite(200, 300, 50, 20);
  gameObject2.shapeColor = "yellow";
  gameObject2.velocityY = -2;

}

function draw() {
  background("black"); 
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  bounceOff(gameObject1, gameObject2);
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  } 
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}

