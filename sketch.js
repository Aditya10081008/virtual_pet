//Create variables here
var dogImage1,dogImage2,dog1,dog2;
var score;

function preload()
{
  //load images here
  dogImage1 = loadImage("dogImg.png");
  dogImage2 = loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500, 500);

        
  dog1 = createSprite(250,300);
  dog1.addImage(dogImage1);
  dog1.scale = 0.2;
  
 

  score = 20;

}


function draw() {  
  background("green");


  
  
  //add styles here

  text("Note: Press UP_ARROW To Feed Drago Milk!",100,30);
  text("Food remaining:" + score,200,200);

   if(keyWentDown(UP_ARROW)){

   score = score-1;

   
   dog1.visible = false;
   dog2 = createSprite(250,300);
    dog2.addImage(dogImage2);
    dog2.scale = 0.2;
   }
   if(keyWentDown(DOWN_ARROW)){
   
    score = score+1;

  
    dog2.visible = false;
    dog1.visible = true;

    }

  drawSprites();
}



