var iss,spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4,spacebg,hasDocked;
var issImage,spaceCraft;

function preload(){
  issImage = loadImage("iss.png");
  spaceCraft1 = loadImage("spacecraft1.png");
  spaceCraft2 = loadImage("spacecraft2.png");
  spaceCraft3 = loadImage("spacecraft3.png");
  spaceCraft4 = loadImage("spacecraft4.png");
  spacebg = loadImage("spacebg.jpg");
  
}

function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(spaceCraft1);
  spaceCraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(issImage);
  iss.scale = 0.25;

}

function draw() {
  background(spacebg);  
  spaceCraft.addImage(spaceCraft1);

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1);

    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y-2;
    }

    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(spaceCraft4);
      spaceCraft.x = spaceCraft.x -1;
    }

    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(spaceCraft3);
      spaceCraft.x = spaceCraft.x +1;
    }

    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(spaceCraft2);
      
    }
  }

  if(spaceCraft.y<=(iss.y+50) && spaceCraft.x<=(iss.x-10)){
    hasDocked = true;
    text("DockedSuccessful",200,300);
  }

  drawSprites();
}