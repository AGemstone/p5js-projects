function drawHeart(offsetx, offsety, size, drawStart, drawEnd, drawStep, startAngle, rings, bright) {
  let scaling
  let thicc = 3
  let step = thicc / 25
  let ringCount = rings * step

  for (let s = size + step; s <= size + ringCount; s += step) {

    beginShape()
    strokeWeight(thicc)
    stroke((s / step * size / 2+frameCount*0.5) % 360, bright, bright)

    for (let i = drawStart; i <= drawEnd; i += drawStep) {
      let t = i * PI / 180
      scaling = s

      // define
      let heart = createVector(
        scaling * (16 * sin(t) * sin(t) * sin(t)),
        scaling * (16 * cos(t) - 3 * cos(2 * t) - 3 * cos(3 * t))
      );
      // rotate
      let nx = heart.x * cos(startAngle) - heart.y * sin(startAngle)
      let ny = heart.x * sin(startAngle) + heart.y * cos(startAngle)
      // draw

      vertex(nx + offsetx, -ny + offsety)
    }
    endShape()
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(RGB)
  background(0,32);
  colorMode(HSB)
  translate(width / 2, height / 2)
  let t = (frameCount - 1) * 0.1
  noFill()


  let offsetx = 95
  let offsety = 60
  let size = 8

  let deg = 10 * sin(frameCount * 0.1)
  let ang = deg * PI / 180

  let drawableStep = 2
  let hiddenStep = 2
  let rings = 16
  //smallish optimization
  //only color x first/last when black
  drawHeart(-offsetx, 0, size, 0, 360, drawableStep, ang, rings, 255)

  drawHeart(offsetx, offsety, size - 0.5, 290, 360, hiddenStep, -ang, rings+10, 0)

  drawHeart(offsetx, offsety, size, 0, 360, drawableStep, -ang, rings, 255)
  drawHeart(-offsetx, 0, size - 0.6, 115, 145, hiddenStep, ang, rings+10, 0)

  drawHeart(-offsetx, 0, size, 95, 200, drawableStep, ang, rings, 255)
  //console.log(frameRate())
  //noLoop()
}