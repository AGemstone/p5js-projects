let starSeeds = []

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i <= 72; i++) {
    let ang = i * PI / 36
    let rand = random(-PI, PI)
    let d = random(r * 0.95)
    starSeeds[i] = createVector(rand, d)
  }
}
let ang = 0
let r = 150
let pang = ang

function alttan(x) {
  return sin(x) / (1 + (cos(x) + cos(x)))
}

function draw() {
  let bright = (sin(frameCount * 0.01) * 255) % 255
  background(0);
  translate(width / 2, height / 2)
  //  stroke(255-bright)

  let a = PI / 2
  let b = PI
  let t = frameCount * 0.01

  //noFill()

  strokeWeight(3)
  colorMode(HSB)
  //sky
  fill(200, 100, 60 - sin(t) * 40)
  noStroke()
  beginShape()
  for (let i = 0; i <= 72; i++) {
    let ang = i * PI / 36
    let x = (r + 1) * cos(ang)
    let y = (r + 1) * sin(ang)
    curveVertex(x, y)
  }
  endShape(CLOSE)

  //stars
  strokeWeight(3)
  colorMode(HSB)
  stroke(200, 0, 100)
  strokeWeight(4)


  for (let i = 0; i <= 36; i++) {
    let ang = i * PI / 36
    let rand = starSeeds[i].x
    let d = starSeeds[i].y
    let x = d * cos(-rand)
    let y = d * sin(-rand)
    point(x, y)
  }
  noStroke()
  //smun
  fill(200, 0, 100)

  let yoff = (r / 1.5) * sin(t)
  let xoff = (r / 1.5) * cos(t)
  ellipse(xoff, yoff, r / 4)
  fill(200, 0, 50)
  triangle(-r , r , r , r, 0, -r / 2)
  fill(200, 0, 70)
  triangle(r / 4, r , r , r, 0, -r / 2)

  //terrain

  strokeWeight(3)
  stroke(20, 100, 80, 8)
  //strokeWeight(2)
  fill(20, 100, 100)
  beginShape()
  for (let i = 0; i <= 180; i++) {
    let ang = i * PI / 90
    let x = r * cos(ang)
    //max(cos(ang), alttan(noise(ang + t)) + PI / 4)
    let y = r * max(sin(ang),0.5 -sin(noise(ang + t / 2)))
    curveVertex(x, y)
  }
  endShape(CLOSE)

  strokeWeight(2)
  fill(30, 100, 100)
  stroke(25, 100, 100, 8)
  beginShape()
  for (let i = 0; i <= 180; i++) {
    let ang = i * PI / 90 
    let x = r * cos(ang)
    //max(cos(ang), alttan(noise(ang + t)) + PI / 4)
    let y = r * max(sin(ang), 0.6 - sin(noise(ang + t)))
    curveVertex(x, y)
  }
  endShape(CLOSE)
  noFill()
  stroke(0)
  strokeWeight(r/2)
  ellipse(0,0,r*2.5)

}