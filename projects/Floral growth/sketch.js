function setup() {
  createCanvas(400, 400);
}

function starr(r, ang, a, b, c) {


  return createVector(
    width / 2 + r / 4 * (2 + sin(a * ang) / 2) * cos(ang + sin(b * ang) / c),
    height / 2 - r / 4 * (2 + sin(a * ang) / 2) * sin(ang + sin(b * ang) / c));
}

function draw() {
  background(0);
  rectMode(CENTER)
  noFill()
  //frameRate(3)
  let r = width * 0.8
  let scaling = 0.01
  let petals = 5
  frameRate()
  let curviness = petals * 2
  let counter = frameCount * scaling
  let stepAng = map((counter) % (curviness), scaling, curviness, 0, 360)
  //let c = 10
  for (j = 0; j < petals; j++) {


    beginShape()
    for (let i = j * stepAng / petals; i <= (j + 1) * stepAng / petals; i++) {
      stroke(255)
      strokeWeight(2)
      let ang = i * PI / stepAng * petals / 2
      //frameCount * scaling
      let p = starr(r, ang, petals, curviness, curviness);
       strokeWeight(1)
       stroke(255)
      vertex(p.x, p.y)
      line(p.x, p.y,width/2,height/2)
      // stroke(255,64)
      // ellipse(p.x, p.y, stepAng)
      
      //fill(255,64)
      //noStroke()
      //ellipse(p.x, p.y, 360-stepAng)
    }
    endShape()
    //beginShape()
    //for (let k = 0; k < petals; k++) {
    //  //phase 270 is petal points
    //  //phase 90 is concavities
    //  let y = r / 2 * sin(k * 72 * PI / 180 + 270 * PI / 180)
    //  let x = r / 2 * cos(k * 72 * PI / 180 + 270 * PI / 180)
    //  stroke(255, 0, 0)
    //  vertex(width / 2 + x, height / 2 + y)
    //  //line(x, y, width / 2, height / 2)
    //}
    //endShape(CLOSE)
  }

  //noLoop()
}