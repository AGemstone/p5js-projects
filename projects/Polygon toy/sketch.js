let startAngle
const spacing = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  startAngle = 0
}

function regPol(initX, initY, size, sides, startAngle, mode) {
  colorMode(HSB, 360)

  let inc = 360 / sides
  let positions = []
  let k = 0
  for (i = startAngle; i < 360 + inc + startAngle; i += inc) {
    let x = size * sin(i * PI / 180)
    let y = -size * cos(i * PI / 180)
    positions[k] = createVector(x, y)
    k++
    
    //dependant on starting j in draw loop which is not a parameter
    if (size <= 3 * spacing)
      fill(0)
    else noFill()
  }
  beginShape()
  stroke((frameCount * 0.1) % 360, 300, 360)
  strokeWeight(spacing / 2 + 2)
  for (k = 0; k < positions.length; k++) {
    let x = positions[k].x
    let y = positions[k].y
    vertex(initX + x, initY + y)
    //also very preety
    //curveVertex(initX + x, initY + y)
  }
  endShape(CLOSE)
  beginShape()
  strokeWeight(spacing / 2)
  stroke(0)
  for (k = 0; k < positions.length; k++) {
    let x = positions[k].x
    let y = positions[k].y
    vertex(initX + x, initY + y)
    //also very preety
    //curveVertex(initX + x, initY + y)
  }
  endShape(CLOSE)
  colorMode(RGB, 255)
}
let noiseOff = 0
//let startAngle = 0

function draw() {

  //= frameCount <= 0 ? 0 : startAngle
  background(255, 8);

  const total = floor(height / 2 / spacing)
  const start = 3
  let spin = random()
  let initSides = 6
  for (j = start; j < total; j++) {

    let fillFlag = false
    let moveFactor = (spacing * 0.2) * (total - j - 1)
    //*sin()
    let noiseMap = map(noise(frameCount * 0.001), 0, 1, -PI, PI)
    startAngle = (total - j - 1) * (frameCount * 0.005) * noiseMap
    //startAngle = 0
    let sides = initSides + (floor(sqrt(initSides)) * noiseMap)
    sides = 0.5+10*pow(sin(frameCount*0.001),8)
    //console.log((total - j - 1))
    regPol(
      width / 2 + moveFactor * cos(noiseMap * sides) * cos(noiseMap),
      height / 2 + moveFactor * sin(noiseMap * sides) * sin(noiseMap),
      j * spacing, sides, startAngle, "quad")
  }


  //noLoop()

}