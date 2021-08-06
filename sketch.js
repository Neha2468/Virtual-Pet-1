var dog, happyDog, foodS, foodStock;
var database;
var score = 20;


function preload()
{
	dogImage = loadImage("images/dogImg.png")
  happyImage = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  dog = createSprite(250,280,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.15;


}


function draw() {
 
  background(46, 139, 87);  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyImage);
  }


  drawSprites();
  fill("white")
  stroke("black");
  textSize(17)
  text("Press UP_ARROW Key To Feed Drago Milk!", 90,90);
  
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){

    x=0;
  }else{
    x = x-1;
  }

  database.ref("/").update({Food:x})
}

