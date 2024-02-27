var vstart = 0
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
  colorMode(HSB,360,100,100)
  blendMode(ADD)
  scale(30)
  rotateX(PI/2)
  rotateZ(PI/2)
  background(0);
  // 1.41421356237 = sqrt 2
  let ustart =  frameCount
  vstart+=0.00001
  let n = 255*4
  for (let i = 1; i < n; i++){
  let u = (i+frameCount)*0.05
  let v = vstart+i*0.005
  let a = 2
  let sqrt2cosv = 1.41421356237 + cos(v);
  let cosu2 = cos(2 / u);
  let sinu2 = sin(2 / u);
  let sinv = sin(v);
  let sin2v = sin(2*v)
  let cosv = cos(v);
  // let xyexp = a + cosu2*sinv - sinu2*sin2v
  let xyexp = cosu2*sqrt2cosv+sinu2*sinv*cosv
  let x = cos(u) * xyexp*4;
  let y = sin(u) * xyexp;
  let z = -sinu2*sqrt2cosv+cosu2*sinv*cosv
  // let z = sinu2 *sinv+cosu2*sin2v
  
  stroke(map(((i+frameCount))%360,1,n,0,360),80,90)
  
  point(x,y,z)
  }
}
