function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 8);

  strokeWeight(3);
  let r = 150;
  let a = (frameCount * 0.1) ;
  translate(width / 2, height / 2);
  let pcount = 500;
  
  for (let i = 0; i < pcount; i++) {
    stroke(255, 0, 255 * (sin(a) * 0.5 + 0.5));
    let theta = (i * PI) / pcount*2;
    let alpha =
      (1 / r) * 0.5 * sin(theta) * abs(r * cos(theta)) -
      cos((a * PI) / 11) * sin(theta) -
      sin((a * PI) / 11) * cos(theta);
    let x = r * alpha * cos(theta);
    let y = r * alpha * sin(theta);
    point(x, -y);
  }
  
  for (let i = 0; i < pcount; i++) {
    stroke(255, 0, 255 * (sin(a) * 0.5 + 0.5));
    let theta = (i * PI) / pcount*2;
    let alpha =
      (1 / r) * 0.5 * sin(theta) * abs(r * cos(theta)) -
      cos((a * PI) / 12) * sin(theta) -
      sin((a * PI) / 12) * cos(theta);
    let x = r * alpha * cos(theta);
    let y = r * alpha * sin(theta);
    point(-x, -y);
  }
}
