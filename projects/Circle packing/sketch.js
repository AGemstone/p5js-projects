
function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB, 360, 100, 100, 255);
  background(0, 32);
  translate(width / 2, height / 2);
  let d = 50;
  noFill();
  stroke(sin(frameCount*0.005)*90+180, 100, 100, 128);
  // rotate(cos(tan(frameCount * 0.005)))
  for (let j = 0; j < 3; j++) {
    let circleCount = 5 - j;
    for (let i = 0; i <= circleCount; i++) {
      circle(
        (-circleCount / 2) * d + i * d,
        d * j,
        d + (cos(PI * cos(frameCount * 0.005)) * 0.5 + 0.5) * d * 1.618
      );
      if (j !== 0) {
        circle(
          (-circleCount / 2) * d + i * d,
          -d * j,
          d + (cos(PI * cos(frameCount * 0.005)) * 0.5 + 0.5) * d * 1.618
        );
      }
    }
  }
}
