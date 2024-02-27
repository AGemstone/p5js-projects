const timeToExplode = 8;
const backoffBound = 16;
class Particle {
  constructor(x, y, r, c, d) {
    this.x = x;
    this.y = y;
    this.reset_x = x;
    this.reset_y = y;
    this.size = r;
    this.color = c;
    this.direction = d;
    //in frames
    this.explodeCounter = timeToExplode;
    this.exploded = false;
    this.waitCounter = 0;
    this.collisionCounter = 0;
    this.sending = true;
  }

  show() {
    stroke(this.color.x, this.color.y, this.color.z);
    square(this.x, this.y, this.size);
  }

  advanceX() {
    let speed = 1.5;
    if (this.waitCounter < 0) this.x += speed * this.direction;
  }

  advanceExplosion() {
    if (this.explodeCounter < 0) {
      this.explodeCounter = timeToExplode;
      this.x = this.reset_x;
      this.y = this.reset_y;
      this.exploded = false;
    }
  }
}
function explode(x, y, p) {
  stroke(255);
  strokeWeight(2);
  const step = 12;
  let scaleFactor = 4;
  let timeToExplode = 7;
  for (let i = 0; i <= step; i++) {
    let ang = ((i * PI) / step) * 2;
    let cx = (timeToExplode - p.explodeCounter) * scaleFactor * cos(ang) + x;
    let cy = (timeToExplode - p.explodeCounter) * scaleFactor * sin(ang) + y;
    point(cx, cy);
  }
}

let p0, p1;
function setup() {
  createCanvas(400, 400);
  const r = 15;
  p0 = new Particle(
    width / 3,
    height / 2,
    r,
    createVector(random(255), random(255), random(255)),
    1
  );
  p1 = new Particle(
    width / 1.5,
    height / 2,
    r,
    createVector(random(255), random(255), random(255)),
    -1
  );
}

function collideX(p0, p1) {
  if (p0.x + p0.size - p0.size / 2 - p1.x - p1.size - p1.size / 2 < 0.01)
    return true;
  return false;
}
let seized = "None";

function draw() {
  rectMode(CENTER);
  background(0,16);

  fill(255);
  // noStroke()
  // frameRate(5);

  stroke(255);
  strokeWeight(20);
  translate(-width / 2, -height / 2);
  scale(2);
  let h0 = createVector(width / 3, height / 2);
  let h1 = createVector(width / 1.5, height / 2);
  point(h0.x, h0.y);
  point(h1.x, h1.y);
  strokeWeight(8);
  line(h0.x, h0.y, h1.x, h1.y);

  let advCondition = !p0.exploded && !p1.exploded;

  if (advCondition) {
    p0.show();
    p1.show();
    if (p0.sending) p0.advanceX();
    if (p1.sending) p1.advanceX();
  } else {
    explode((p0.x + p1.x) / 2, (p0.y + p1.y) / 2, p0);
    p0.advanceExplosion();
    p1.advanceExplosion();
    p0.explodeCounter--;
    p1.explodeCounter--;
  }
  p0.waitCounter--;
  p1.waitCounter--;
  if (p0.waitCounter < 0 && seized === "None") p0.sending = true;
  if (p1.waitCounter < 0 && seized === "None") p1.sending = true;
  if (p0.x > p1.reset_x - p1.size * 1.5) seized = "Left";
  if (p1.x < p0.reset_x + p0.size * 1.5) seized = "Right";

  if (collideX(p1, p0) && !(p0.exploded || p1.exploded)) {
    p0.exploded = true;
    p1.exploded = true;
    p1.sending = false;
    p0.sending = false;
    let timeSlot = 30 + timeToExplode;
    if (seized === "Left") {
      p0.sending = true;
    } else if (seized === "Right") {
      p1.sending = true;
    } else {
      p0.collisionCounter++;
      p1.collisionCounter++;
      if (p0.collisionCounter <= backoffBound) {
        p0.waitCounter = round(random() * p0.collisionCounter) * timeSlot;
      }
      if (p0.collisionCounter <= backoffBound) {
        p1.waitCounter = round(random() * p1.collisionCounter) * timeSlot;
      }
    }
  }
  textSize(12);
  textAlign(LEFT, TOP);
  noStroke();
  text(`Seized: ${seized}`, width / 4 + 6, height / 4 + 6);
  
}
