var bird,bi
var bg,bgi
var wall
var obs,a,b,c,d,ob,o,g
var gameState
var adi,ch
var score=0
function preload(){
bgi=loadImage("b.png")
bi=loadImage("bird.png")
a=loadImage("ulta.png")
b=loadImage("obs.png")
c=loadImage("rb.png")
d=loadImage("sb.png")

}
function setup(){
    score=0
  createCanvas(1037,750)
  bg=createSprite(770,200,3000,600)
  bg.addImage(bgi)
  bg.scale=1.5
  bg.velocityX=-5
  wall=createSprite(770,690,3000,10)
    wall.visible=false
    
  bird=createSprite(170,260,3000,600)
  bird.addImage(bi)
  bird.scale=0.2
 
  bird.setCollider("rectangle",0,0,300,300);
  og=new Group()
 
}
function draw(){
 background("black")
 
// bird.debug=true
 if(bg.x<400){
     bg.x=bg.width/2
 }
 
 if(og.isTouching(bird)){
     gameState="end"
 }
 if(keyDown("space") && bird.y >= 109) {
    bird.velocityY = -8;
  }

  bird.velocityY = bird.velocityY + 0.4
  bird.collide(wall)
 drawSprites()
 if(gameState==="end"){
    og.destroyEach()
    bird.destroy()
    textSize(100)
    fill("black")
    text("game over",300,300,1000,300)
    score=0
   
    
   }
   if(wall.isTouching(bird)){
       gameState="end"
   }
   textSize(30)
   fill("black")
   text("survivalTime:"+score,400,20,300,300)
   if(frameCount%5===0){
       score=score+1
   }
 if(frameCount%210===0){
     obs=createSprite(900,-50,60,60)
     obs.addImage(a)
     obs.scale=0.7
     obs.velocityX=-5
     og.add(obs)
 }
 if(frameCount%210===0){
    ob=createSprite(900,540,60,60)
    ob.addImage(d)
    ob.scale=0.7
    ob.velocityX=-5
    og.add(ob)
}
if(frameCount%89===0){
    o=createSprite(900,-50,60,60)
    o.addImage(c)
    o.scale=0.7
    o.velocityX=-5
    og.add(o)
}
if(frameCount%89===0){
   g=createSprite(900,510,60,60)
   g.addImage(b)
   g.scale=0.7
   g.velocityX=-5
   og.add(g)
}
}
