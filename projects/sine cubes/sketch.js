function setup() {
  createCanvas(windowWidth, windowHeight);
}

function sinBox(xoff, yoff, box_length, box_width, box_height) {
  colorMode(HSB, 360, 100, 100)
  let old_x = xoff;
  let old_y = yoff;
  let xy_step = 1;
  for (let i = 0; i <= box_length; i++) {
    let x = old_x + xy_step;
    let y = old_y + sin(((frameCount + i) * PI) / 90) * 0.8;
    stroke(((y + x) * 0.5 + 100) % 360, 75, 100)
    for (let k = 0; k <= box_width; k += 10) {
      line(old_x + k, old_y, x + k, y);
    }
    if (i % 10 == 0) {
      line(x, y, x, clamp(y, yoff + box_height, yoff + box_height));

      line(x, y, x + box_width, y);
    }
    old_y = y;
    old_x = x;
  }
}

function clamp(val, a, b) {
  return max(a, min(val, b));
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(1);
  let box_width = 40
  let box_height = 120
  sinBox(0, height-box_height , width, box_width, box_height);

  // sinLine(0,50)
  // sinLine(20,50)
  // rotateX(frameCount*0.1)
}
