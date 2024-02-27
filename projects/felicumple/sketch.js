function preload() {

    fontObj = loadFont("asset/GreatVibes-Regular.ttf")
}

let pointArray = []
function setup() {
    createCanvas(windowWidth, windowHeight)
    textFont(fontObj)
    let msg = "Feliz Cumple!"

    //let y = 0
    pointArray = fontObj.textToPoints(msg, width / 3, height / 2, 96, { sampleFactor: 0.5 });
    // for (let char of msg) {
    //     let bound = fontObj.textBounds(char, width / 3.8, height / 2, 48)
    // let textPoints = fontObj.textToPoints(char, width / 3.8 + y, height / 2, 48, { sampleFactor: 0.5 });
    //     y += bound.w-10
    //     pointArray.push(textPoints)
    // }

    //frameRate(100)
}
function drawHeart(
    offsetx,
    offsety,
    size,
    drawStart,
    drawEnd,
    drawStep,
    startAngle,
    rings,
    bright
  ) {
    let scaling;
    let thicc = 2;
    let step = thicc / 25;
    let ringCount = rings * step;
  
    for (let s = size + step; s <= size + ringCount; s += step) {
      beginShape();
      strokeWeight(thicc);
    //   stroke((((s / step) * size) / 2 + frameCount * 0.5) % 360, bright, bright);
      fill(0)
  
      for (let i = drawStart; i <= drawEnd; i += drawStep) {
        let t = (i * PI) / 180;
        scaling = s;
  
        // define
        let heart = createVector(
          scaling * (16 * sin(t) * sin(t) * sin(t)),
          scaling * (16 * cos(t) - 3 * cos(2 * t) - 3 * cos(3 * t))
        );
        // rotate
        let nx = heart.x;
        let ny = heart.y + (sin(frameCount * 0.01 + (height+size) * 0.3) * height) / 32;
        // draw
  
        vertex(nx + offsetx, -ny + offsety);
      }
      endShape();
    }
  }
    

let i = 0
let j = -1
opx = i
opx = j
function draw() {
    colorMode(RGB,255)
    background(0, 8);
    colorMode(HSB,360,100,100)
    stroke((j*5)%360,75,100)
    strokeWeight(2)
    noFill()
    let heart = createVector(
        16 * sin(frameCount) * sin(frameCount) * sin(frameCount),
        13 * cos(frameCount) - 5 * cos(2 * frameCount) - 2 * cos(3 * frameCount) - cos(4 * frameCount)
      );

    // for (let char of pointArray) {
    //     for (textPoint of char)
    //         point(textPoint.x, textPoint.y)
    // }

    p1 = pointArray[(i) % pointArray.length]
    p2 = pointArray[(i + 1) % pointArray.length]
    if (dist(p1.x, p1.y,p2.x,p2.y) < 15) {
        let lerpAmt = (frameCount * 0.2) % 1.1
        px = lerp(p1.x, p2.x, lerpAmt)
        py = lerp(p1.y, p2.y, lerpAmt)
        //point(px, py)
	line(p1.x,p1.y,px,py)
        if (lerpAmt > 0.99)
            i++
    }
    else i++
    if(i == 0) j+=2

    
    px = pointArray[(i) % pointArray.length].x
    py = pointArray[(i) % pointArray.length].y
    
    point(px, py)
    i++

    // stroke(255);
    strokeWeight(0.05);
    translate(width / 2, height / 2);
    noFill()
    
    let offsetx = 0;
    let offsety = height/4;
    let size = 8;
  
    let deg = 10 * sin(frameCount * 0.1);
    let ang = (deg * PI) / 180;
  
    let drawableStep = 2;
    let hiddenStep = 2;
    // let rings = 3
    
    // for (let i = 0.5; i >= 0.1; i -= 0.05)
    drawHeart(-offsetx, offsety, size, 0, 360, drawableStep, ang, 1, 255);

}
