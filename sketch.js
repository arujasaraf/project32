const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon,slingShot
var score=0
var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  platform =new Ground (400,300,200,10);
  block1 =new Box (330,235,30,40);
  block2 =new Box (360,235,30,40);
  block3 =new Box (390,235,30,40);
  block4 =new Box (420,235,30,40);
  block5=new Box (450,235,30,40);
  block6 =new Box (360,195,30,40);
  block7 =new Box (390,195,30,40);
  block8 =new Box (420,195,30,40);
  block9 =new Box (390,155,30,40);
  polygon1=new Polygon (200,200,50,50)
  slingShot =new SlingShot(polygon1.body,{x:100,y:200})
  
}

function draw() {
  background(0);  
  text("score"+score,700,50)
  Engine.update(engine)
 // drawSprites();
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon1.display();
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if (keyCode===32){
      slingShot.attach(polygon1.body);
  }
}  

  