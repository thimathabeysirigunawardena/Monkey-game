
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0
var score=0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
 monkey=createSprite(80,300,30,30)
  monkey.addAnimation("monkeyimage",monkey_running)
  monkey.scale=0.3
  ground=createSprite(400,390,1000000,10)
  ground.velocityX=-2
  

  

  
}


function draw() {
  background(220)
  
  
  if(keyDown("space")){
  monkey.velocityY= monkey.velocityY-8
  }
  
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground)
  
  if(frameCount%100===0){
     rock=createSprite(400,370,30,30)
  rock.addAnimation("rock",obstaceImage)
  rock.scale=0.1
     rock.velocityX=-2
    
  }   
    
    if(frameCount%80===0){
    banana=createSprite(400,100,30,30)
  banana.addAnimation("banana",bananaImage)
  banana.scale=0.1
     banana.velocityX=-2
    }
      
      
      text("Score" + score,500,40)
      
     survivaltime=Math.ceil(frameCount/frameRate())
      text("survival time" + survivaltime,100,50)
   
    
    
    
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
drawSprites();
  
}






