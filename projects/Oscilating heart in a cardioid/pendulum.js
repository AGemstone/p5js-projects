// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pendulum

// A Simple Pendulum Class

// This constructor could be improved to allow a greater variety of pendulums
class Pendulum {

  constructor(x, y, r, bobR, color, angle, line) {
    // Fill all variables
    this.origin = createVector(x, y);
    this.position = createVector();
    this.r = r;
    this.color = color

    this.initialAngle = angle;
    this.line = line
    this.angle = this.initialAngle;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;

    this.damping = 1
    this.ballr = bobR; // Arbitrary ball radius
  }

  // Function to update position
  update() {
    this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle); // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
    this.aVelocity += this.aAcceleration; // Increment velocity
    this.aVelocity *= this.damping; // Arbitrary damping

    this.angle += this.aVelocity; // Increment angle

  }

  show() {
    if (this.origin.x <= width / 2)
      this.position.set(-this.r * sin(this.angle), this.r * cos(this.angle), 0); // Polar to cartesian conversion
    else
      this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
    this.position.add(this.origin); // Make sure the position is relative to the pendulum's origin
    stroke(this.color.x, this.color.y, this.color.z)
    strokeWeight(1);
    // Draw the arm
    if(this.line)
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    ellipseMode(CENTER);
    fill(this.color.x, this.color.y, this.color.z);
    // Draw the ball
    ellipse(this.position.x, this.position.y, this.ballr * 4);
  }
}