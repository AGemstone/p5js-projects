class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function fib_fast(n) {
  let fibarr = [0, 1]
  let res = 0
  for (i = 0; i < n; i++) {

    let n_2 = fibarr[0]
    let n_1 = fibarr[1]
    res = n_2 + n_1
    fibarr[0] = fibarr[1]
    fibarr[1] = res
  }

  return res

}





function draw() {
  let radius = 8
  //frameRate(10)
  let circ = 2 * PI
  let PHI = 1.61803398875
  let PHI2 = 0.61803398875
  //let rand = map(random(), 0, 1, -1, 1)
  let dt = 0.0005
  background(0,0,0,64);
  colorMode(HSB, 360)
  
  let x = width/2
  let y = height/2
  
  //noFill()
  beginShape(TRIANGLE_STRIP)
  let dcount = 36*6
  for (j = 1; j < dcount; j++) {
    let px = x
    let py = y
    x = (radius/8) * cos((j * PHI)) + width / 2 + j * map(cos(j * frameCount * dt), -1, 1, -radius / 2, radius / 2) 
    y = (radius/8) * sin((j * PHI)) + height / 2 + j * map(sin(j * frameCount * dt), -1, 1, -radius / 2, radius / 2)
    
    
    
    // point(x, y)
    //point(px, py)
    
    strokeWeight(radius/4)
    stroke((floor((frameCount+1)*j*0.0001))%360, 
           0,
           floor(map(j,0,dcount,360,0)))
    
    //vertex (x,y+j)
    vertex (px,py-dcount-j)
    vertex (x+(dcount-j),y+(dcount-j))
    vertex (x-(dcount-j),y+(dcount-j))
    
    //stroke(0)
    //point(width/2,height/2)
    
    //ellipse(x, y, radius / 2)

  }
  endShape()

  //dt += 0.1

  //noLoop()
}