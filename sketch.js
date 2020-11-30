const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1;
var boxes = [];
var boxes2 = [];
var boxes3 = [];
var boxes4 = [];

var string;
var shape1;
var score = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(width-width/3, height/2+height/4, width/4.95, 10);
  shape1 = new Shape(width/6, height/2+height/20, 50);
  string = new SlingShot(shape1.body, {x:width/6, y:height/2+height/20});

  var num1 = stand1.body.position.x-stand1.width/2+10;
  var num2 = stand1.body.position.x+stand1.width/2-10;
  var num3 = stand1.body.position.y-(stand1.height/2+25);
  var num4 = width/32.22;

  console.log(num4);
  

  for(var i = num1; i <= num2; i = i + num4){
    boxes.push(new Box(i, num3, num4, num4));
  }

  for(var i = num1+25; i <= num2-25; i = i + num4){
    boxes2.push(new Box(i, num3-num4, num4, num4))
  }

  for(var i = num1+50; i <= num2-50; i = i + num4){
    boxes3.push(new Box(i, num3-num4*2, num4, num4))
  }

  for(var i = num1+75; i <= num2-75; i = i + num4){
    boxes4.push(new Box(i, num3-num4*2, num4, num4))
  }

  
}

function draw() {
  background("grey");  
  Engine.update(engine);
  
  stand1.display();

  for(var k=0; k < boxes.length; k++){
    boxes[k].display();
  }

  for(var k = 0; k < boxes2.length; k++){
    boxes2[k].display();
  }

  for(var k = 0; k < boxes3.length; k++){
    boxes3[k].display();
  }

  for(var k = 0; k < boxes4.length; k++){
    boxes4[k].display();
  }

  string.display();
  shape1.display();
  console.log(Math.round(shape1.body.speed));
  stroke("white");
  strokeWeight(4);
  text("Score: "+ score, windowWidth-100, 20);
  noStroke();
}

function mouseDragged(){
  Matter.Body.setPosition(shape1.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  string.fly();
}

function keyPressed(){
  if(keyCode === 32){
    string.attach(shape1.body);
  }
}