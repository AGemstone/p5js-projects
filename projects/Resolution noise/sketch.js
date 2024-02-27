let initX
let initY
let initStep
let step
let zoff = 0

function setup() {
  createCanvas(300, 300);
  initX = random()
  initY = random()
  initStep = width * 0.02
  step = initStep
}



function draw() {
  background(0);
  translate(width/2,height/2)
  for (x = 0; x < width; x += step) {
    let mx = map(x,0,width,-width/2,width/2)
    for (y = 0; y < height; y += step) {
      let n = noise(initX + x * step / width, initY + y * step / height, zoff) * 255
      fill(n > 170 ? n : 0, 0, n > 130 ? n : 0)
      //noFill()
      stroke(n > 150 ? n : 0, 0, n > 110 ? n : 0)
      //noStroke()
      let my = map(y,0,height,-height/2,height/2)
      rect(mx, my, step)
    }
  }

  step = initStep + (map(sin(frameCount * PI / 180), -1, 1, 0, width / 30))
  zoff += 0.04
  //noLoop()
}