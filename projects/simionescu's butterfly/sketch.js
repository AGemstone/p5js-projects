function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255)
  let r = height /4
  strokeWeight(1)
  //noFill()

  rotate(PI/4)
  translate(width/4,-height/2)
  beginShape(QUAD_STRIP)
  let sqsfc = sin((frameCount-1) * 0.005)*sin((frameCount-1) * 0.005)*180
  for (let i = 0; i <= sqsfc ; i++) {
    let ang = i * PI / 60
    let x = r * cos(ang)
    let y = r * sin(ang)
    let varying = sin(frameCount * 0.005)*4
    //fill(map(sin(ang),-1,1,0,255))
    noFill()
    stroke(255)
    //stroke(255-sin(ang)*sin(ang)*255)
    let c = cos(varying * atan(x / y))
    let modif = 1 - PI/(1+varying) * c * c
    let cent1 = createVector(width / 2+ y*x*0.01, height / 2 + y*x*0.01)
    let cent2 = createVector(width / 2- y*x*0.01, height / 2 - y*x*0.01)
    x *= modif
    y *= modif
    // line(width / 2 + x, height / 2 + y, cent.x - x * y * 2, cent.y - modif)
    curveVertex(width / 2 + x, height / 2 - y)
    curveVertex(cent2.x, cent2.y)
    //curveVertex(width / 2 +x, height / 2 + y)
    //curveVertex(cent1.x, cent1.y)
  }
  endShape()


}