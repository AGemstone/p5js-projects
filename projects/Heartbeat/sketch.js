function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 1);
  stroke(255);
  strokeWeight(0.05);
  translate(width / 2, height / 2);
  scale(15);
  //varying a

  a = frameCount * 0.001;
  let f = (x) =>
    -(pow(x * x, 1 / 3) + sin(a * 2 * PI * x) * 0.5 * sqrt(125 - x * x) * 1.5);
  oldX = -12;
  oldY = f(oldX);
  for (let x = -12.01; x <= 12; x += 0.1) {
    stroke(270, 75, 100, 100);
    let y = f(x);
    line(oldX, oldY, x, y);
    oldX = x;
    oldY = y;
  }
}
