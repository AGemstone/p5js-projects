function setup() {
  createCanvas(400, 400);
}

function draw() {
  let r = 50
  background(0,8);
  stroke(255,200,100)
  // noFill()
  fill(255)
  beginShape()
  for (let i = 0; i <= 180*2; i++) {
    let ang = (i ) * PI / 90
    let x = r*2 * cos(PI + ang) + width / 2
    let y = r/2 * sin(PI + ang) *
      // sin(noise(i*0.1,frameCount * 0.01) / 4 * ang) *
      sin(0.5 * ang+sin(frameCount*0.01)/4)*sin(0.5 * ang+noise(frameCount*0.01)/4)*cos((noise(frameCount*0.01)*0.5+0.5)/2) +
        height / 2
    vertex(y, x)
  }
  endShape()
}