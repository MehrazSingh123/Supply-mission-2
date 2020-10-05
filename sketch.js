var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;
var down1, down2, down3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	down1 = createSprite(400, 650, 200, 20);
	down1.shapeColor = "red";

	down2 = createSprite(300, 610, 20, 100);
	down2.shapeColor = "red";

	down3 = createSprite(500, 610, 20, 100);
	down3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {isStatic: true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	down1 = Bodies.rectangle(400, 650, 200, 20, {isStatic:true});
	World.add(world, down1);

	down2 = Bodies.rectangle(300, 610, 20, 100, {isStatic:true});
	World.add(world, down2);
	
	down3 = Bodies.rectangle(500, 610, 20, 100, {isStatic:true});
	World.add(world, down3);
  
	box1 = new Box(400, 650, 200, 20);
	box2 = new Box(300, 610, 20, 100);
	box3 = new Box(500, 610, 20, 100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}
