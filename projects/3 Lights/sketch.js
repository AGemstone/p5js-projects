function setup() {
  createCanvas(800, 800);
}
let counter = 0;
function draw() {
  colorMode(RGB);
  noStroke();
  background(0, 8);
  const initialRadius = 10;
  const maxCircles = 60;
  const delay = 10;
  if (counter > 0) {
    colorMode(HSB, 360, 100, 100);
    for (let i = counter; i >= 0; i--) {
      fill(((sin(frameCount * 0.01) * 0.5 + 0.5) * i * 4 + 100) % 360, 80, 100);
      circle(
        width / 8 + initialRadius * i * 0.5,
        height / 2,
        initialRadius * (2 + i)
      );
      circle(
        width - width / 8 - initialRadius * i * 0.5,
        height / 2,
        initialRadius * (2 + i)
      );
      circle(width / 2, height / 2, initialRadius * (2 + i));
    }
  }

  if (frameCount % 5 == 0) {
    counter++;
  }
  if (counter > maxCircles) {
    counter = -delay;
  }
}
