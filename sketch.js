
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1
var ball2
var ball3
var ball4
var base;
var lead1;
var lead2;
var lead3;
var lead4;
function preload()
{
	ball1=createSprite(600,600,50,50);
	ball2=createSprite(440,600,50,50);
	base=createSprite(400,300,500,30);
	ball3=createSprite(300,600,50,50);
ball4=createSprite(200,600,50,50);
lead1=createSprite(600,450,10,300);
lead2=createSprite(450,450,10,300);
lead3=createSprite(200,450,10,300);
lead4=createSprite(300,450,10,300);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



