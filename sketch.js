const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box1,box2,box3,box4,box5,pig1,pig2,log1,log2,log3,log4;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  box1 = new Box(400,350,70,70);
  box2 = new Box(550,350,70,70);
  box3 = new Box(400,250,70,70);
  box4 = new Box(550,250,70,70);
  box5 =new Box(480,175,70,70);

  pig1 = new Pig(480,250);
  pig2 = new Pig(480,350);

  log1 = new Log(500,330,PI/2);
  log2 = new Log(500,210,PI/2);
  log3 =new Log(400,190,PI/6);
  log4 = new Log(500,190,-PI/6);
  ground = new Ground(380,380,800,10);

  console.log(box1);
  }

  


function draw() {
  background(0); 
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  ground.display();

  drawSprites();
}