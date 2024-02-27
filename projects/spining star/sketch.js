function setup() {
  createCanvas(400, 400);
}
let j = 0

function draw() {
  background(0,24);
  rectMode(CENTER)
  colorMode(HSB,360)
  noStroke()
  fill(255)
  
  //ellipse(width/2,height/2,40)
  let x = frameCount*0.01
  let size = 300
  let fx = size/2.8*pow(sin(x),2)
  translate(width/2,height/2)
  //if(fx < size*0.5){
    rotate(x*2)
  //}
  rotate(PI/4)
  fill((frameCount*0.1)%360,300,360)
  rect(0,0,size,size,fx)
  //rotate(PI/4)
  rotate(-PI/4)
  //translate(-width/2,-height/2)
  //fill(255)
  rect(0,0,size,size,fx)
  
}