let spacing = 64
let circles = []
class Circwave {

  constructor(r) {
    this.x = width / 2
    this.y = height / 2
    this.r = r 
    this.xoff = random()
    this.speed = 0.01
    this.shapeStart = 0
    this.yoff = 0.1

  }

  render() {
    let col = map(this.r, 0, width, -32, 255)

    //ellipse(this.x, this.y, this.r)
    beginShape()
    let rmod
    let scaling = 0.0036

    for (let j = this.shapeStart; j <= 360 + this.shapeStart; j += 1) {
      stroke(col)
      strokeWeight(2)
      //fill(255)
      noFill()
      let realj = (j - this.shapeStart)
      let ang = j * PI / 180

      rmod = noise(
        cos(this.xoff),
        sin(this.yoff +realj*spacing)
        //(realj * scaling + this.r / width )
      )
      let rmapped = map(rmod, 0, 1, this.r - spacing, this.r + spacing)
      let x = rmod*this.r *   cos(ang) + width / 2
      let y = rmod*this.r *  sin(ang) + height / 2
      curveVertex(x, y)

      this.yoff += 0.0001
      this.xoff += 0.0001
      //this.xoff+=0.001
    }

    endShape(CLOSE)
    //this.shapeStart +=this.speed %360


  }
}

function setup() {
  createCanvas(400, 400);
  let total = width / spacing
  for (i = 0; i < total; i++) {
    circles[i] = new Circwave(i * spacing * 0.9)
  }
}





function draw() {
  background(0);
  //frameRate(15)
  let total = width / spacing
  for (i = 0; i < total; i++) {
    circles[i].render()
  }


  //noLoop()

}