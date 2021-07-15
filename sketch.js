var iss ,var spaceCraft , var hasDoked;

function preload( ){

  issImage=loadImage("images/car1.png");
 spaceImage=loadImage("images/spacebg.png");
 spaceCraft1Image=loadImage("images/spacecraft1.png");
 spaceCraft2Image=loadImage("images/spacecraft2.png");
 spaceCraft3Image=loadImage("images/spacecraft3.png");
 spaceCraft4Image=loadImage("images/spacecraft4.png");
  
}


function setup() {
  createCanvas(800,400);
 iss = createSprite(400, 200, 50, 50);
 iss.addImage("issIMage");
issImage(25);


spacecraft = createSprite(400, 200, 50, 50);

}

function draw() {
  background(spaceImage);  
  drawSprites();
}