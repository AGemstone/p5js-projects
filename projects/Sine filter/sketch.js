let img;
function preload() {
  // img = loadImage("stallman1366_2000.jpg");
  img = loadImage("stevejobs.jpg");
}
function sinWaves() {
  let test = createImage(width,height)
  test.loadPixels()
  let amp = 7;
  let step = 0.5;
  for (let j = 1; j < height; j += amp) {
    let oldx = 0;
    let oldy = 0;
    for (let i = step; i < width; i += step) {
      let idx = 4*(i + j * width);
      let freq = map(img.pixels[idx], 0, 255, 0.0, 0.5);
      let x = i;
      let y = (amp) * sin((freq * i * PI) / 180);
      line(oldx, oldy + j, x, y + j);
      test.pixels[idx] = img.pixels[idx]
      test.pixels[idx+1] = img.pixels[idx+1]
      test.pixels[idx+2] = img.pixels[idx+2]
      test.pixels[idx+3] = img.pixels[idx+3]
      oldx = x;
      oldy = y;
    }
  }
  test.updatePixels()
  // image(test,0,0)
}

function setup() {
  console.log(img)
  createCanvas(img.width, img.height);
  img.resize(width, height);
  pixelDensity(1);
  img.loadPixels();
  for (let i = 0; i < width * height * 4; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];
    let avg = 255-(r + g + b) / 3;
    if (avg < 100) {
    img.pixels[i] = avg;
    img.pixels[i + 1] = avg;
    img.pixels[i + 2] = avg;
    } else {
      img.pixels[i + 3] = 0;
    }
  }
  img.updatePixels();
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  // image(img, 0, 0);

  sinWaves()
  noLoop();
}
