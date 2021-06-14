const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg;


var snow=[];
var rand;

function preload(){
bg=loadImage("snow3.jpg");

}

function setup(){
    engine=Engine.create();
    world=engine.world;
    createCanvas(800,400);
    
   

    ground = new Ground(600,height,1200,20);
}

function draw(){ 
Engine.update(engine);
background(bg); 
ground.display();
rand = Math.round(random(1,4));


if(frameCount%5===0) {
    snow.push(new Snow(random(0, 800), 30, 30))
    
  }
  for(var j = 0; j<snow.length; j++) {
    snow[j].display()
  }

drawSprites();
}   



