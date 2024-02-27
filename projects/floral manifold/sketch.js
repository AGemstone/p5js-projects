let points = []
let starrP = []
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541]
//let n = PI/12
let rosek
let cv
let flip = false
let lp = 180

function primordialShape(r, ang, k) {
  let rose = r * cos(k * ang)
  return createVector(rose * cos(ang) + width / 2, rose * sin(ang) + height / 2, false)
}

function starr(r, ang, a, b, c) {


  return createVector(
    width / 2 + r / 4 * (2 + sin(a * ang) / 2) * cos(ang + sin(b * ang) / c),
    height / 2 - r / 4 * (2 + sin(a * ang) / 2) * sin(ang + sin(b * ang) / c));
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cv = createVector(width / 2, height / 2)

  //rosek = PI / 7
  rosek = PI

  //rosek = (1.618 + PI) / 2
  //rosek = TWO_PI/sqrt(65)
  //rosek = 2 / sqrt(51)
  //rosek = PI / sqrt(68)
  //rosek=PI/sqrt(17)
  //primes[floor(random(100))]
  //rosek = primes[3]

  for (i = 0; i < lp; i++) {

    let r = height / 2 * 0.5
    let detail = 90
    let ang = i * PI / detail

    //points.unshift(primordialShape(r, ang, rosek))

  }
  for (i = 1; i < points.length; i++) {
    noFill()
    colorMode(HSB, 360)
    stroke(((i)) % 360, 200, 270, 32)
    //line(points[i].x, points[i].y, points[(points.length - i) % points.length].x, points[(points.length - i) % points.length].y)
    //ellipse(points[i].x, points[i].y, points[(points.length - i) % points.length].x, points[(points.length - i) % points.length].y)
  }
  //noLoop()
}


function draw() {
  background(0, 48)
  colorMode(HSB, 360)
  strokeWeight(2)
  noFill()
  ellipseMode(CENTER)
  colorMode(HSB, 255)
  let r = height / 2 * 0.5
  let detail = 360
  let ang = (frameCount + 90) * PI / detail
  if (flip) ang = -ang


  let a = 6
  let b = 18
  let c = 18
  //starrP.unshift(starr(r, ang/2, a, b, c))
  //for (i = 1; i < starrP.length; i++) {
  //  stroke(((i)) % 360, 200, 270)
  //  line(starrP[i].x, starrP[i].y,
  //    starrP[(starrP.length - i) % starrP.length].x,
  //    starrP[(starrP.length - i) % starrP.length].y)
  //}
  points.unshift(primordialShape(r, ang, rosek))
  for (let i = 1; i < points.length; i++) {
    stroke(((i)) % 360, 200, 270)
    //stroke(360, 0, 100 + i % 280)
    ellipse(
      points[i].x,
      points[i].y,
      points[(points.length - i) % points.length].x,
      points[(points.length - i) % points.length].y,
    )
  }
  for (let i = (points.length) / 2; i < points.length; i++) {
    stroke(360, 0, 180 + i % 180, 180)
    //line(points[i].x, points[i].y,
    //  points[(points.length - i) % points.length].x,
    //  points[(points.length - i) % points.length].y)
  }

  //if (starrP.length > lp*2) starrP.pop()
  if (points.length >= 180) {
    points.pop()
  }
  if (frameCount % 720==0) {
    flip = !flip
    console.log(frameRate())
    //lp = random(360)
  }

  //if (noise(frameCount) > 0.9) flip = true
  //else flip = false

}