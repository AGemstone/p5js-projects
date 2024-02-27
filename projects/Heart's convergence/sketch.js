//AGemstone
//Original idea by the dot is black

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255)
  strokeWeight(2)
  noFill()
  let r = height * 0.8;

  for (let j = 0; j < 10; j++) {
  beginShape()
    let nr = (r/(j+1))
    if (j === 5)
      continue
    let t = frameCount
    
    
    nr = (r - j * height * 0.16) / 2
    if (j !== 0)
      for (let i = 45; i >= 0; i--) {
        let ang = 45*sin(t+i) * PI / 90
        let x = ( nr*exp((1-cos(ang+t*PI/180)) *(cos(ang+t*PI/540)) ))
        let y = ( nr*exp((1-cos(ang+t*PI/180)) *(sin(ang+t*PI/540)) ))
        curveVertex(width / 2 + y, height / 1.5 + x - (r/2-nr ) /2)
      }

    endShape()
  }


}