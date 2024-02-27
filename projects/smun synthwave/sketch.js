function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(RGB)
  background(0);
  colorMode(HSB)
  let radius = 300
  let spacing = 16
  rectMode(CENTER)
  noStroke()
  fill(255, 0, 0)
  ellipse(width / 2, height / 2, radius)


  for (let i = -spacing; i < radius; i += spacing) {
    let bright = map(i, 0, radius, 0, 100)
    fill(0, bright, 100)
    rect(width / 2,
      height / 2 - radius / 2 + (i + frameCount * 0.5 % spacing*2 ),
      radius, spacing / 2)
  }

  let border = 100
  stroke(0)
  strokeWeight(border)
  noFill()
  ellipse(width / 2, height / 2, radius + border - 1)
}