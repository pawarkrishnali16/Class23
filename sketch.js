const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ground_options;
var ball;
var ball_options;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;

  ground_options = {
    isStatic : true
  }
  ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,200,50,ball_options);
  World.add(world,ball);
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  console.log(ground.position.x);
}

function draw() {

  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER) ;
 rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(CENTER) ;
 ellipse(ball.position.x,ball.position.y,50,50);
}

