//Create variables here

function preload()
{
 //load images here
 happyDog=loadImage("images/dogImg.png");
 sadDog=loadImage("images/dogImg1.png");
 
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,300,150,150);
  dog.addImage(sadDog);
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
  dog.scale=0.2

}
function readStock(data){
foodStock1=data.val();
}

function draw() {  
backGround(46,139,87);
if (keyDown (UP_ARROW)){
writeStock(foodStock1);
dog.addImage(happyDog);

}
  drawSprites();
  //add styles here
  fill(255,255,254);
   stroke("black"); 
  text("Food remaining : "+foodS,170,200);
   textSize(13);
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}



