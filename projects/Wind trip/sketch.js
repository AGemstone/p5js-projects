function setup() {
  createCanvas(400, 400);
}

function draw() {
  translate(width / 2, height / 2);
  background(0, 16);
  let pCount = 45;
  let r = 150;
  stroke(255);
  let d = 25;
  let mul = 2/8;
  let rCount = 1;
  for (let j = 0; j < rCount; j++) {
    let phase = (sin(frameCount*0.01)*0.5+0.5)*d*pCount
    for (let i =phase; i < pCount +phase; i++) {
      let ang = ((i * PI) / pCount) ;
      let k = cos(ang * mul);
      let x = ((r/2+cos(i*sin(frameCount*0.01))*r/4+r/4) * k * cos(ang + (j*0.5 * mul) / rCount) * (j + 1)) / rCount;
      let y = ((r/2+cos(i*sin(frameCount*0.01))*r/4+r/4) * k * sin(ang ) * (j + 1)) / rCount;
      point(x, y);
    }
  }
}
