var tower,towerImage
var gameState="play"
var ghost,ghost2Image,ghostImage
var door,doorImage,doorGroup
var climber,climberImage,climberGroup

function preload() {
towerImage=loadImage("tower.png")  
  ghostImage=loadImage("ghost-standing.png")
    doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghost2Image=loadImage("ghost-jumping.png")
}

function setup(){
  createCanvas(550,500)
  
  tower=createSprite(275,260)
  tower.addImage(towerImage)
  tower.scale=0.9
  tower.velocityY=3;
  
  
 ghost=createSprite(290,330,10,10) 
  ghost.addImage(ghostImage)
  ghost.scale=0.5
  
  climberGroup=new Group()
  
  
}

function draw(){
  background("pink")
  
  if(gameState==="play"){
    
        
 if(keyDown("up")) {
  ghost.addImage(ghost2Image) 
   ghost.velocityY=-6
   
 } 
    ghost.velocityY=ghost.velocityY+0.7
    
  if(keyDown("right"))  {
    ghost.x=ghost.x+15
  }
    
     if(keyDown("left"))  {
    ghost.x=ghost.x-15
  }
    
    
    
    drawSprites()
    console.log (tower.y)

    if(tower.y>500){
    tower.y=260
    }
    
    if(climberGroup.isTouching(ghost)){
      ghost.velocityX=0
      ghost.velocityY=0
      ghost.addImage(ghostImage)
      
    }
    if(ghost.y>550){
      
      gameState="END"
      
    }

    
    objects()
    
  } 
  
  if(gameState=="END"){
    textSize
  }
  
  
} 
    
  function objects(){
    
  if(frameCount%150===0)  
    {
      
     door=createSprite(random(100,450),-50,10,10)
      door.addImage(doorImage)
      door.velocityY=2
      door.lifetime=350
      
      climber=createSprite(50,0,10,10)
      climber.x=door.x
      climber.addImage(climberImage)
      climber.velocityY=2
      climber.lifetime=350
      climberGroup.add(climber)
      
      ghost.depth=door.depth+1
      
    }
    
    
    
    
  }

       

