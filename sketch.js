const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var redRain
var yellowRain
var blueRain
var rain =[]
var j = 0
function setup() {
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world;
  for(var i = 0;i<500;i++){
    if(i%3==0){
  redRain = new RedR(random(10,displayWidth),random(10,displayHeight),50,55)
  rain.push(redRain)
    }else if(i%2){
      yellowRain = new YellowR(random(10,displayWidth),random(10,displayHeight),50,55)
      rain.push(yellowRain)
    }else{
      blueRain = new BlueR(random(10,displayWidth),random(10,displayHeight),50,55)
      rain.push(blueRain)
    }
  }
}

function draw() {
  Engine.update(engine);
  background(255,255,255);

  for(var i = j ;i<j+20; i++){ 
  
//Matter.Body.setVelocity(rain[i].body,{x:rain[i].body.velocity.x,y:rain[i].body.velocity.y*0.8}) 
   rain[i].display()
   
   //console.log("hello")
   }
   j=j+20
 //  console.log("hello")
}