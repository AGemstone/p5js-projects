function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(RGB, 255);
  background(0, 24);
  colorMode(HSB, 360, 100, 100);
  lwidth = 4;
  lcount = 16;
  initialr = 50;
  noFill();

  strokeWeight(lwidth);
  let r = initialr;
  for (let j = 1; j <= lcount; j++) {
    let speed = 0.4;
    beginShape();
    for (
      let i = r + frameCount * j * speed;
      i <= 72 + r + frameCount * j * speed;
      i++
    ) {
      let angle = (i * PI) / 180;
      let x1 = r * sin(angle) + width / 2;
      let y1 = r * cos(angle) + height / 2;

      //angle = (i+1)*PI/180
      //let x2 = r * sin(angle) + width / 2;
      //let y2 = r * cos(angle) + height / 2;
      stroke((j * frameCount * 0.01) % 360, 100, 100);
      vertex(x1, y1);
    }
    endShape();
    r += lwidth + 1;
  }
}
