const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperBall, dustBinObject;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,370,1200,20);
	paperBall = new Paper(200,150,20);
	left = new Ground(900,285,20,150);
	right = new Ground(1100,285,20,150);
	bottom = new Ground(1000,350,200,20);
	
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  Engine.update(engine);
  
  fill("yellow")
  ground.display();
  paperBall.display();
  fill("white")
  left.display();
  right.display();
  bottom.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		var option = {
			x:75,
			y:-75
		}
	  Body.applyForce(paperBall.body,paperBall.body.position,option);  
	}
}