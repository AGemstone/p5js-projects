let spacing = 16
let circles = []
class Circwave {

  constructor(r,start) {
    this.x = width / 2
    this.y = height / 2
    this.r = r/2
    this.xoff = random()
    this.speed = 0.01
    this.shapeStart = start
    this.yoff = 0.1

  }

  render() {
    let col = map(this.r, 0, width, -spacing , 255)

    //ellipse(this.x, this.y, this.r)
    beginShape()
    let rmod
    let scaling = 360/spacing

    for (let j = this.shapeStart; j < 360 + this.shapeStart; j +=4) {
      stroke(col)
      strokeWeight(2)
      //fill(255)
      noFill()
      let realj = (j - this.shapeStart)
      let ang = j * PI / 180

      rmod = noise(
        sin(realj/scaling * this.r /width/20)+1, 
        cos(realj/scaling * this.r /width/20)+1,
        ((this.yoff))*(realj/scaling)+1
      )
      let rmapped = map(rmod,0,1,0,spacing)
      let x = (this.r*rmod+rmapped)* sin(ang) + width / 2
      let y = (this.r*rmod+rmapped)* cos(ang) + height / 2
      curveVertex(x, y)

      this.xoff += 0.01
    }
    this.yoff -= 0.02

    endShape(CLOSE)
    //this.shapeStart +=this.speed %360


  }
}

function setup() {
  createCanvas(400, 400);
  let total = width / spacing
  for (i = 0; i < total; i++) {
    circles[i] = new Circwave(i * spacing * 0.9,i*2)
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