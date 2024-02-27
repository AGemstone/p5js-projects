let fibs = []
let seq = [
  1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900, 2674440, 9694845, 35357670, 129644790, 477638700, 1767263190, 6564120420, 24466267020, 91482563640, 343059613650, 1289904147324, 4861946401452, 18367353072152, 69533550916004, 263747951750360, 1002242216651368, 3814986502092304
]

let xoff
let yoff

function fib(n) {
  let arr = [1, 1]
  let res = n == 0 ? 0 : 1
  for (let i = 0; i < n - 2; i++) {
    res = arr[0] + arr[1]
    arr[0] = arr[1]
    arr[1] = res
  }
  return res
}

function fibNext(arr) {
  let res = arr[0] + arr[1]
  arr[0] = arr[1]
  arr[1] = res
  return res
}

function fib2Next(arr) {
  let res = arr[0] + arr[1] / (1 + arr[2])
  arr[0] = arr[1]
  arr[1] = arr[2]
  arr[2] = res
  return res
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // let arr = [floor(random(10)), floor(random(10)), floor(random(10))]
  let arr = [0,1,1]
  // for (let i = 0; i < 100; i++) 
  //   fibs[i] = fibNext(arr)
  for (let i = 1; i < 10000; i++) 
     fibs[i] = i*i*i - i*i
  //   for (let i = 0; i < seq.length; i++) {
  //   fibs[i] = seq[i]
  // }
  xoff = width / 2
  yoff = height / 2
}

let bin = ""
let count = 2
let ang = 0
let j = 0
let i = 0

function draw() {
  colorMode(RGB)
  textSize(24)
  text(j, 40, 20)
  background(0, 16);
  colorMode(HSB)
  //frameRate(10)

  strokeWeight(1)

  //console.log(fib(2))
  // for (let i = 2; i < frameCount; i++)
  if (count >= bin.length) {
    j++
    bin = fibs[j % fibs.length].toString(2)
    count = 0
  }
  count++
  let size = width / 8
  let nx
  let ny
  if (bin[i] === "0") {
    ang += PI / 3
    // size = constrain(size-3,6,30)
  } else if (bin[i] === "1") {
    ang -= PI / 3
    // size = constrain(size+3,6,30)
  }

  nx = size * (1 + i) / bin.length * cos(ang)
  ny = size * (1 + i) / bin.length * sin(ang)
  let nxoff = (xoff + nx)
  let nyoff = (yoff + ny)
  // let noff = createVector(nxoff,nyoff)
  let noff = p5.Vector.lerp(createVector(xoff, yoff), createVector(nxoff, nyoff), 0.5)
  // frameRate(10)

  // line(xoff, yoff, nxoff, nyoff)
  stroke((frameCount) % 360, 100, 100)
  fill(((frameCount)) % 360, 100, 100)
  //ellipse(xoff, yoff, size)
  strokeWeight(2)
  line(xoff, yoff, noff.x, noff.y)
  xoff = noff.x
  yoff = noff.y

  if (nxoff > width + size) xoff = noff.x % width
  else if (noff.x < -size) xoff = width + noff.x

  if (noff.y > height + size) yoff = noff.y % height
  else if (noff.y < -size) yoff = height + noff.y

  i = (i + 1) % bin.length
  //frameRate(5)
  //console.log(bin)
  // if (bin.length > 100) {
  // bin = bin.substr(bin.length-10)
  // }
  // if (!bin) console.log(bin)
  //noLoop()


}