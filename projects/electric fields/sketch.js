class particle {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.accel = createVector(0, 0);
    this.mass = mass;
  }
  // F = m*a
  applyForce(force) {
    this.accel = force.div(this.mass);
    this.vel.add(this.accel);
    this.pos.add(this.vel);
  }
  draw() {
    stroke(255);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }
}

function fieldForce(charge, charge_position, point_position) {
  let k = 8.988 * 10 ** 9;
  let r = p5.Vector.sub(point_position, charge_position);
  let distance = Math.sqrt(r.x * r.x + r.y * r.y);
  let magnitude = (k * charge) / (distance * distance*distance);
  r.mult(magnitude / distance);
  return r;
}

let charges = [];
let charge_magnitudes = [];
let field = [];
let points = [];
let p;
let scale_factor = 2;
let radius;
function setup() {
  createCanvas(600, 600);

  translate(width / 2, height / 2);
  radius = width /2;
  let spacing = 25

  for (let x = -width/2; x < width/2; x+=spacing) {
    for (let y = -height/2; y < height/2; y+=spacing) {
    points.push(
      new particle(
        x,
        y,
        1
      )
    )
    }
  }
  let charge_count = 10;

  // charges.push(createVector(0, 0));
  // charges.push(createVector(5 * 1, 0));
  // charges.push(
  //   createVector(((4 * 4) / 5) * 1, ((-4 * 3) / 5) * 1)
  // );
  // charge_magnitudes[0] = -0.000002;
  // charge_magnitudes[1] = 0.00000084375;
  // charge_magnitudes[2] = 0.000004;
  for (let i = 0; i < charge_count; i++) {
    charges.push(
      createVector(
        random(-radius / 2, radius / 2) ,
        random(-radius / 2, radius / 2) 
      )
    );
    let q = 0.001;
    if (i % 2 == 0) charge_magnitudes[i] = q;
    else charge_magnitudes[i] = -q;
  }
}

function draw() {
  translate(width / 2, height / 2);
  // translate((-5 / 2) * scale_factor, 0);
  background(0, 16);
  stroke(255);
  // scale(scale_factor);
  let particle_charge = charge_magnitudes[0] /10;
  let r = 50;

  for (let i = 0; i < points.length; i++) {
    // let theta = (((i * PI) / 180) * 360) / point_count;
    // let x = frameCount * cos(theta);
    // let y = frameCount * sin(theta);

    let force = createVector(0, 0);

    for (let j = 0; j < charges.length; j++) {
      let r = p5.Vector.sub(points[i].pos, charges[j]);
      let distance = Math.sqrt(r.x * r.x + r.y * r.y);
      if (
        distance < 0.00001 ||
        distance > width/1.5
      ) {
        points[i] = new particle(
          random(-radius / 2, radius / 2),
          random(-radius / 2, radius / 2),
          1
        );
        force = createVector(0, 0);
        break;
      }
      let opacity = max(256 - frameCount, 0);
      // opacity = 255;
      if (charge_magnitudes[j] < 0) stroke(0, 0, 255, opacity);
      else stroke(255, 0, 0, opacity);
      point(charges[j].x, charges[j].y);
      force.add(fieldForce(charge_magnitudes[j], charges[j], points[i].pos));
    }
    force.mult(particle_charge);
    points[i].applyForce(force);
    points[i].draw();
  }
}
