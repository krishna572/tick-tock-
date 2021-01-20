var h, m, s;
var hAngle,mAngle,sAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

  createSprite(400, 200, 50, 50);

}

function draw() {
  background(0);  
  translate(200,200);
  
  h = hour() / 12;
  console.log(h);
  m = minute();
  console.log(m);
  s = second();
  console.log(s);

  hAngle = map(h,0,12,0,360);
  mAngle = map(m,0,60,0,360);
  sAngle = map(s,0,60,0,360);
  console.log(h +":"+m +":"+ s);
  
  push();
  rotate(sAngle);
  strokeWeight(5);
  stroke("red");
  line(0,0,100,0)
  pop();

  push();
  rotate(-90);
  rotate(mAngle);
  strokeWeight(7);
  stroke("lightgreen");
  line(0,0,90,0)
  pop();

  push();
  rotate(hAngle);
  strokeWeight(8);
  stroke("lightBlue");
  line(0,0,80,0)
  pop();

  stroke("lightgreen")
  strokeWeight(10)
  noFill();
  arc(0,0,370,370,0,hAngle);

  stroke("lightblue")
  strokeWeight(10)
  noFill();
  arc(0,0,370,370,0,mAngle);

  strokeWeight(10);
  stroke("red");
  noFill();
  arc(0,0,300,300,0,sAngle);

  

  


  drawSprites();
}

async function ticktock(){
 
}