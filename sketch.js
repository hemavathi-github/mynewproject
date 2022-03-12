var mouse,mice1,mice2,mice3;
var cat ,catty1,catty2,catty3;
var bgImg,background;

function preload() {
bgImg=loadImage("garden.png");

mice1=loadImage("mouse1.png");
mice2=loadAnimation("mouse2.png","mouse3.png");
mice3=loadImage("mouse4.png");

catty1=loadImage("cat1.png");
catty2=loadAnimation("cat2.png","cat3.png");
catty3=loadImage("cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    background=createSprite(500,400,1000,800);
    background.addImage("garden1",bgImg);

    mouse=createSprite(80,650,10,10);
    mouse.addImage("jerry1",mice1);
    mouse.scale=0.13;
    mouse.setCollider("circle",0,0,400);
    mouse.debug=true;

    cat=createSprite(800,600,10,10);
    cat.addImage("tom1",catty1);
    cat.changeImage("tom1");
    cat.scale=0.2;
    cat.setCollider("circle",0,0,400);
    cat.debug=true;
}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<mouse.width/2+cat.width/2 && mouse.x-cat.x<mouse.width/2+cat.width/2 &&cat.y-mouse.y<mouse.height/2+cat.height/2 && mouse.y-cat.y<mouse.height/2+cat.height/2){
      mouse.addImage("jerry3",mice3);
      mouse.changeImage("jerry3");
    }
    if (cat.x-mouse.x<mouse.width/2+cat.width/2 && mouse.x-cat.x<mouse.width/2+cat.width/2 &&cat.y-mouse.y<mouse.height/2+cat.height/2 && mouse.y-cat.y<mouse.height/2+cat.height/2){
      cat.velocityX=0;
      cat.velocityY=0;
      cat.addImage("tom3",catty3);
      cat.changeImage("tom3");
    }
 background.display();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
  mouse.addAnimation("jerry2",mice2);
  mouse.changeAnimation("jerry2");
}
if (keyCode===LEFT_ARROW){
  cat.addAnimation("tom2",catty2);
  cat.changeAnimation("tom2");
  cat.velocityX=-10;
}

}
