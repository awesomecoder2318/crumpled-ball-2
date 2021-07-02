
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,bin1,bin2,bin3;
var engine, world;
var ground1, edges;
var dusty
function preload()
{

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
 paper1=new Paper(20,20,25);
 ground1 =new Ground(400,600,1000,20,)
 ground1.shapeColor=color(10,0,10)

 bin1=new Dustbin(450,300,10,100)

 bin2= new Dustbin(400,300,10,100)

 bin3= new Dustbin(425,300,100,10)


	Engine.run(engine);
  
}


function draw(){
  background(255);
  Engine.update(engine);

  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
  ground1.display();

 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.07,y:-0.07})
  }
}



