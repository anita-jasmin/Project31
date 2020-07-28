const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var stand,backg;
var polygon, slingshot,score=0,bg;
var gameStates="onSling";


//function preload(){
  //  getbg();
//}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
   
    stand = new Ground(390, 260, 300, 10);

    block1 = new Box(300,235,30,40);
    block2 = new Box(330,235,30,40);
    block3 = new Box(360,235,30,40);
    block4 = new Box(390,235,30,40);
    block5 = new Box(420,235,30,40);
    block6 = new Box(450,235,30,40);
    block7 = new Box(480,235,30,40);

    block8 = new Box(330,195,30,40);
    block9 = new Box(360,195,30,40);
    block10 = new Box(390,195,30,40);
    block11 = new Box(420,195,30,40);
    block12 = new Box(450,195,30,40);

    block13 = new Box(360,155,30,40);
    block14= new Box(390,155,30,40);
    block15= new Box(420,155,30,40);

    block16 = new Box(390,115,30,40);

    polygon=new Polygon(100,100,20);
  
    slingshot = new Slingshot(polygon.body,{x:100, y:100});

    bg=loadImage("sprites/lightbg.jpg");

    
}

function draw(){
   if(bg)
    background(bg);
    Engine.update(engine);
    //strokeWeight(4);
    
    

  
    fill("white");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("lightblue");
    block13.display();
    block14.display();
    block15.display();
    fill("lavender");
    block16.display();
   

    polygon.display();
    stand.display();
   
    slingshot.display(); 
   

fill("black");
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    text("SCORE:"+score,120,150)
}

function mouseDragged(){
  // if(gameStates!=="Launch"){ 
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //  }
   
}


function mouseReleased(){
    slingshot.fly();
    gameStates="Launch";
  
}

async function getbg(){
     var response=await fetch('http://worldtimeapi.org/timezone/Asia/Kolkata');
     var responsejson=await response.json();
    //console.log(responsejson);
     var datetime=responsejson.datetime;
     var hour=datetime.slice(11,13);
     if(hour>6&&hour<19)
     {
         backg="sprites/lightbg.jpg";
     }
     else{
         backg="sprites/darkbg.jpg";
     }
    bg=loadImage(backg);
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body,{x:100,y:100});
        slingshot.attach(polygon.body);
        gameState="onSling";
    }
}