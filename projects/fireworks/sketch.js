class fireworks {
  constructor(x, y) {
    this.lastx = x
    this.lasty = y
    this.x = x
    this.y = height + random(1000)
    this.size = 4 + random(6)
    this.radius = 0
    this.maxRadius = 1.5 * this.size
    this.color = createVector(random(360), 300, 300)
    this.exploded = false
    this.faded = false
    this.speed = 3 + random(5)
    this.explodeCount = 0
  }

  update() {

    this.px = this.x
    this.py = this.y

    if (this.y <= this.lasty) {
      this.exploded = true
    }
    if (this.exploded) {
      this.color.z -= 6
      if (this.color.z < 0) this.faded = true
      if (this.explodeCount * 0.1 > PI / 2) {
        this.y++
      } else {
        let s = sin(this.explodeCount * 0.1)
        this.radius = this.maxRadius * s
      }
      this.explodeCount++
    } else if (!this.exploded) {
      this.y -= this.speed
      this.x += cos(frameCount * 0.5)
    }
  }

  render() {
    colorMode(HSB, 360)
    for (let t = 0; t < TWO_PI; t += PI / this.size ) {

      let shape = createVector(
        16 * sin(t) * sin(t) * sin(t),
        13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t)
      );

      shape = createVector(cos(t * t) * t, -sin(t * t) * t)

      noStroke()
      fill(this.color.x, this.color.y, this.color.z, 128)

      ellipse(this.x + this.radius * shape.x + random(this.radius),
        this.y - this.radius * shape.y + 2 * random() - 1,
        this.size)
    }

    colorMode(RGB, 255)
  }
}

let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 10; i++)
    particles[i] = new fireworks(map(random(), 0, 1, width * 0.2, width - width * 0.2),
      map(random(), 0, 1, height / 4, height - height * 0.2))


}rgb(139,69,19)

function draw() {
  background(0, 32);
  for (i = 0; i < 10; i++) {

    particles[i].update()
    particles[i].render()
    if (particles[i].faded) {
      particles[i] = new fireworks(map(random(), 0, 1, width * 0.15, width - width * 0.15),
        map(random(), 0, 1, height / 4, height - height * 0.2))
    }

  }


}