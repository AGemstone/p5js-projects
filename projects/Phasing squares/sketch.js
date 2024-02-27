function setup() {
  createCanvas(800, 800);
}

function drawRect(xoffset, yoffset, rotation, size) {
  const step = PI / 2;
  beginShape();
  for (let i = 0; i <= TWO_PI; i += step) {
    let x = size * cos(i + rotation) + xoffset;
    let y = size * sin(i + rotation) + yoffset;
    vertex(x, y);
  }
  endShape();
}

function draw() {
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 0, 8);
  const size = 25;
  const separation = size / 1.25;
  let dt = frameCount * 0.005;
  noStroke();
  for (let i = 0; i < width; i += separation) {
    for (let j = 0; j < height; j += separation) {
      let rand = noise(i + dt, j + dt);
      fill((rand * 270 + 80) % 360, 80, 80, 60);
      drawRect(i, j,  rand*TWO_PI, size);
    }
  }
}
