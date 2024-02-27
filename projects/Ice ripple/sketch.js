function setup() {
  createCanvas(400, 400);
}
let circIdx = 0;
function draw() {
  background(0, 16);
  stroke(255);
  noFill();
  translate(width / 2, height / 2);
  // frameRate(5);
  let inc = 30;
  let r = ((inc * circIdx) % min(width * 1.3, height * 1.3)) + inc;
  if (r > min(width * 1.2, height * 1.2)) {
    background(0);
  }

  let pointCount = 40;
  beginShape();
  for (let i = 0; i < pointCount; i++) {
    let ang = (i * PI) / (pointCount / 2);

    let x = (r + noise(r + circIdx + i) * (inc / 1.5)) * cos(ang);
    let y = (r + noise(r + circIdx + i) * (inc / 1.5)) * sin(ang);
    vertex(x, y);
  }
  endShape(CLOSE);
  if (frameCount % 8 == 0) {
    circIdx++;
  }
}
