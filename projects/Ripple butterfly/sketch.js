function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 32);
  stroke(255)
  strokeWeight(2)
  let r1 =60
  let r2 = 30
  noFill()
  // let bigstep = 4.5*(sin(frameCount*0.01)*0.5+0.5)+4.5
  let bigstep = 90
  for (let i = frameCount*0.01; i <= bigstep * 2+frameCount*0.01; i++) {
    let ang = i * PI / bigstep
    let modif = exp(cos(ang)) -
      2 * cos(4 * ang) -
      pow(sin(ang / 12), 5)
    // modif = cos(modif)
    let oy = r1 * cos(PI+ang) * modif + width / 2
    let ox = r1 * sin(PI+ang) * modif + height / 2
    // let modif
    beginShape()
    for (let j = 0; j <= 4; j++) {
      let ang2 = (j ) * PI / 2
      let modif2 = noise(j+r2,frameCount*0.01)
      let x = r2 * sin(frameCount*0.01+ ang2) * modif2 + ox
      let y = r2 * cos(frameCount*0.01+ ang2) * modif2 + oy
      vertex(x, y)
    }
    endShape(CLOSE)
  }

}