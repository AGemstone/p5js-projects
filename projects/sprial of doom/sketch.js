let spacing = 12
let circles = []
class Circwave {

  constructor(r, start) {
    this.x = width / 2
    this.y = height / 2
    this.r = r / 2
    this.xoff = start / width * spacing
    this.speed = 0.01
    this.shapeStart = start
    this.yoff = width

  }

  render() {

    let col = map(this.r, 0, width, -width/16, 255)
    let sxoff = this.xoff
    //ellipse(this.x, this.y, this.r)
    beginShape()
    let rmod
    let scaling = 360 / spacing

    for (let j = this.shapeStart; j < 360 + this.shapeStart; j += 18) {
      stroke(col)
      strokeWeight(2)
      //fill(255)
      noFill()
      let realj = (j - this.shapeStart)

      let ang = j * PI / 180
      let a, b, c, x, y



      a = scaling * cos(realj / scaling)
      b = scaling * sin(realj / scaling)
      c = this.xoff * (sin(ang +this.yoff))
      //console.log()
      rmod = noise(a, b, c)




      //c = ((this.yoff)) * (realj / scaling) + 1


      let rmapped = map(rmod, 0, 1, -spacing, spacing * 1.5)
      x = (this.r + rmapped) * cos(ang) + width / 2
      y = (this.r + rmapped) * sin(ang) + height / 2
      //noLoop()
      curveVertex(x, y)


    }


    endShape(CLOSE)
    //this.shapeStart +=this.speed %360

    this.xoff += 0.01
    this.yoff = sin(this.xoff)/spacing
  }
}

function setup() {
  createCanvas(400, 400);
  let total = width / spacing
  for (i = 0; i < total; i++) {
    circles[i] = new Circwave(i * spacing, i * spacing/4)
  }
}





function draw() {
  background(0,16);
  //frameRate(15)
  let total = width / spacing
  for (i = 0; i < total; i++) {
    circles[i].render()
  }


  //noLoop()

}