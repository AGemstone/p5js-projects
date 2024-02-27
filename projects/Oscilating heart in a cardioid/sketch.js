// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Pendulum

let penduls = [];
let gravity = 0.05;


function setup() {
  createCanvas(windowWidth, windowHeight);
  let total = 360;
  for (let i = 0, t = i; i < total; i += 2, t += total) {
    let csize = 54
    let hsize = 12
    let ang = i * (360 / total) * PI / 180
    let card = 2 * csize * (1 - cos(ang));
    let sinang = sin(ang)
    let cosang = cos(ang)

    let heart = createVector(
      16 * sin(t) * sin(t) * sin(t),
      13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t)
    );

    penduls[i] = new Pendulum(
      width / 2 + hsize * heart.x,
      height / 2 - hsize * heart.y,
      (height * 2 * sin(t) * sin(t)) /
      sqrt(heart.x * heart.x + heart.y * heart.y + hsize * hsize),
      hsize * sin(t) / sqrt(heart.x * heart.x + heart.y * heart.y),
      createVector(164, 41, 99), PI - 0.01, true);

    penduls[i + 1] = new Pendulum(
      width / 2 + card * sinang,
      125 - card * cosang,
      card,
      card * cosang / csize, createVector(236, 1, 90), PI - 0.01);
  }



}

function draw() {

  background(62, 62, 62, 5);

  for (let pendul of penduls) {
    pendul.update();
    pendul.show();
  }
}