
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function preload(){
	dust = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
dustbin1 = createSprite(1100, 550)
dustbin1.addImage(dust)
dustbin1.scale = 0.7

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1100, 650)
	dustbinObj.visible = false;
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  

  
  
 drawSprites();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-90});
    
  	}
}





