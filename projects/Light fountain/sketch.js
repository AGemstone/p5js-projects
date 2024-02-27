function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 16);
  let ir = 200
  let r = ir
  stroke(255)
  noFill()
  let s = 360
  let maxshapes = 100
  for (let shapes = maxshapes; shapes > 0; shapes--) {
    beginShape()
    //strokeWeight(shapes)
    for (let sides = 0; sides <= s / 3; sides++) {
      let ang = -sides * PI / s * 2 - PI / s

      let x = ir *
        sin(ang - frameCount * 0.01) *
        cos((shapes / maxshapes * ang * frameCount * 0.005)) +
        width / 2

      let y = r / 2 *
        cos(ang - frameCount * 0.01) *
          cos((shapes / maxshapes * ang * frameCount * 0.001)) +
        height + 5

      vertex(x, y)
    }
    endShape()
    r += ir * 4 / maxshapes
    s++
  }
}