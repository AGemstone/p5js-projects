function setup() {
  createCanvas(400, 400);
}
class Scale {
  constructor(x, y, rot,size) {

    this.x = x
    this.y = y
    this.rot = rot
    this.size = size
    
  }
  render() {
    beginShape()
    let scaleWidth = random(1, 0.9)
    let r = this.size
    scaleWidth = 1
    for (let i = 2; i < 180; i++) {
      let ang = i * 60 * PI / 180 + this.rot
      let x = r  * cos((ang*frameCount*0.0002  - PI/2))*cos((ang/3  - PI/2))
      let y = r * sin((ang/6 - PI/2))*cos((ang*frameCount*0.0002  - PI/2))
      
      let nx = x
      let ny = y
      //nx = x*cos(this.rot)-y*sin(this.rot)
      //ny = x*cos(this.rot)+y*sin(this.rot)
      curveVertex(this.x + nx, this.y + ny)
      if ( i ===2) {stroke(255,0,0)
                    strokeWeight(8)
                   //point(width/2+nx,height/2+ny)
                   stroke(255)
                   strokeWeight(1)}
    }
    // for (let i = 8; i >= 2; i--) {
      // let ang = i * 72 * PI / 180-this.rot
      // let x = r / scaleWidth * cos((ang / 2 - PI/2))
      // let ang2 = 6.13 * 72 * PI / 180
      // let y = -r / scaleWidth * cos((ang2 / 2 - PI/2)) +
        // r / 2 * sin((ang / 2 - PI/2))
      // let nx = x
      // let ny = y
      // // nx = x*cos(this.rot)-y*sin(this.rot)
      // // ny = x*cos(this.rot)+y*sin(this.rot)
      // curveVertex(width / 2 + nx, height / 2 + ny)
    // }
    endShape()
  }



}

function draw() {
  background(0,2);

  let r = height * 0.4
  noFill()
  stroke(255)
  //fill(128)
  frameRate(30)
  beginShape()
  for (let i = 0; i < 36;i++){
    let ang = i*PI/18
    let x = r*cos(ang)
    let y = r*sin(ang)
    
    vertex(width/2+x,height/2+y)
  }
  endShape(CLOSE)
  let s = new Scale(width/2,height/2,frameCount*0.001,r)
  s.render()
  
  

  //noLoop()
}