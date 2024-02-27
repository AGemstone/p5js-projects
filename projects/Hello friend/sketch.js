let t1pts;
let fonttype;
function preload() {
  fonttype = loadFont("FiraMono-Regular.otf");
}
function hellofriend(offset1, offset2) {
  for (let i = 0; i < t1pts.length; i++) {
    line(
      t1pts[i].x,
      t1pts[i].y,
      t1pts[i].x +
        noise(frameCount * noise(i)*0.01 + t1pts[i].y) * offset1 -
        offset1 / 2,
      t1pts[i].y
    );
  }
  // for (let i = 0; i < t2pts.length; i++) {
  //   line(
  //     t2pts[i].x,
  //     t2pts[i].y,
  //     t2pts[i].x +
  //       noise(frameCount * noise(i)*0.01 + t2pts[i].y) * offset2 -
  //       offset2 / 2,
  //     t2pts[i].y
  //   );
  // }
}

function setup() {
  createCanvas(windowWidth , windowHeight);

  t1pts = fonttype.textToPoints("_hellofriend.mov", 80, height / 2, 100, {
    sampleFactor: 0.5,
  });
  // t2pts = fonttype.textToPoints("", width/2-110,height / 2 + 100, 100, {
  //   sampleFactor: 0.25,
  // });
}

function draw() {
  background(0, 8);

  stroke(0, 150, 255, 200);
  hellofriend(20, 20);
  stroke(255,0,100,200);
  hellofriend(-20,-20)
  stroke(255,255,255);
  hellofriend(15,15)
}
