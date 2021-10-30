var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var window
var railing


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,400)
  ghost.addImage(ghostImg)
  ghost.scale = 0.3
  
  doorsGroup = createGroup()
  climbersGroup = createGroup()
}

function draw() {
  background(200);
  if (gameState == "play") {
      

if(tower.y > 400){
      tower.y = 300
    }
    if (keyDown("Left_Arrow")){
      ghost.x = ghost.x -5
    }
    if (keyDown("Right_Arrow")){
      ghost.x = ghost.x + 5
    }
    drawSprites()
    Window()  
  }
  

  if (doorsGroup.isTouching(ghost)){
    background("black")
    gameState = "end"
   fill("lightblue")
   textSize(30)
text("Game Over" ,300, 300)

  }

}

function Window() {
  if (frameCount%60 === 0) {
    var window = createSprite(300, -50, 10,40);
    window.x = Math.round(random(60,500))
    window.addImage(doorImg)
    window.scale = 0.75;
    window.velocityY = 5;

    window.lifetime = 400;

    railing = createSprite(300,0, 10, 40);
    railing.addImage(climberImg)
    railing.velocityY = 5
    railing.x = window.x
    doorsGroup.add(window)

    climbersGroup.add(railing)
  }
}