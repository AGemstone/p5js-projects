function setup() {
  createCanvas(600, 600);
}

function curvedShape(deg) {
  // rotate(rotStep*PI/180);
  let rot = (deg * PI) / 180;

  let f = (x) =>
    max(
      x * x * 0.002,
      (width / 2) * (cos(frameCount * PI/180) * 0.5 + 0.5)
    );
  let x = 1;
  y = f(x);

  let r = sqrt(x * x + y * y);
  let thet = acos(x / r);
  let xp = r * cos(thet + rot);
  let yp = r * sin(thet + rot);
  for (x = 2; x < width / 2; x += 5) {
    y = f(x);
    let nr = sqrt(x * x + y * y);
    let nthet = acos(x / nr);
    let nxp = r * cos(nthet + rot);
    let nyp = r * sin(nthet + rot);
    // stroke((frameCount + (rot+1)*15) % 360, 80, 100);
    let opacity = map(y, 0, width / 2, 255, 0);
    stroke(64, sin(frameCount * 0.01) * 255, 255, opacity);
    line(xp, yp, nxp, nyp);
    line(xp, -yp, nxp, -nyp);
    r = nr;
    thet = nthet;
    xp = nxp;
    yp = nyp;
  }
}

function draw() {
  background(0);
  stroke(255);
  // strokeWeight(2)
  noFill();
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  let inc = 10;
  // colorMode(HSB, 360, 100, 100);
  // let x = r*cos(ang)

  for (let i = 0; i < 360; i += inc) {
    curvedShape(i);
  }
  // colorMode(RGB, 255);
}
