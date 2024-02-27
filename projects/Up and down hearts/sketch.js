function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawHeart(
  offsetx,
  offsety,
  size,
  drawStart,
  drawEnd,
  drawStep,
  startAngle,
  rings,
  bright
) {
  let scaling;
  let thicc = 2;
  let step = thicc / 25;
  let ringCount = rings * step;

  for (let s = size + step; s <= size + ringCount; s += step) {
    beginShape();
    strokeWeight(thicc);
    stroke((((s / step) * size) / 2 + frameCount * 0.5) % 360, bright, bright);
    fill(0)

    for (let i = drawStart; i <= drawEnd; i += drawStep) {
      let t = (i * PI) / 180;
      scaling = s;

      // define
      let heart = createVector(
        scaling * (16 * sin(t) * sin(t) * sin(t)),
        scaling * (16 * cos(t) - 3 * cos(2 * t) - 3 * cos(3 * t))
      );
      // rotate
      let nx = heart.x;
      let ny = heart.y + (sin(frameCount * 0.05 + (height+size) * 0.3) * height) / 8;
      // draw

      vertex(nx + offsetx, -ny + offsety);
    }
    endShape();
  }
}

function draw() {
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 24);
  stroke(255);
  strokeWeight(0.05);
  translate(width / 2, height / 2);
  noFill()
  
  let offsetx = 95;
  let offsety = 60;
  let size = 8;

  let deg = 10 * sin(frameCount * 0.1);
  let ang = (deg * PI) / 180;

  let drawableStep = 2;
  let hiddenStep = 2;
  // let rings = 3
  
  for (let i = 0.5; i >= 0.1; i -= 0.05)
    drawHeart(-offsetx, 0, size * i, 0, 360, drawableStep, ang, 1, 255);
}
