function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 32);
  rectMode(CENTER)
  noStroke()
  //stroke(255)
  //noFill()
  let scaling = 48
  log2scl = log(scaling) / log(2)
  strokeWeight(1)
  let r = height /2/log2scl
  let maxval = width / r * scaling - scaling
  let minval = scaling - 1
  for (let i = maxval; i >= minval; i--) {

    let ang = ((i * sin(frameCount * 0.001))) * PI / 18
    //fill(sin(ang / scaling * 2) * sin(ang / scaling * 2) * 255)
    noFill()
    stroke((sin(ang / scaling) * sin(ang / scaling)) * 255)
    translate(width / 2, height / 2)
    rotate(-PI/90)
    rotate(-ang)
    // triangle(0, r * sin(ang), r, r*cos(ang), 0, -r * sin(ang))
    let nang = ang
    rect(0, 0, r, (i / (2 + (sin(nang)))))
    rotate(ang)
    //rotate(PI / 2)
    translate(-width / 2, -height / 2)
  }
  

}