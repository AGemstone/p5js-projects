class Cell {
  constructor(x, y, cellsize) {
    this.pos = createVector(x, y);
    this.size = cellsize;
    this.alive = random() < 0.15;
    this.survive = false;
    this.revive = false;
  }

  show() {
    colorMode(HSB, 360);
    noStroke();
    // stroke(360)
    // strokeWeight(1)
    if (this.alive) {
      //strokeWeight(this.size);
      //stroke(map(random(),0,1,0,360),map(random(),0,1,280,300),360);
      //point(this.pos.x+this.size/2, this.pos.y+this.size/2);
      let low = 0;
      let high = 50;
      let changerate = 0.001 * frameCount;
      fill(
        map(
          random(),
          0,
          1,
          sin(changerate) * 180 + 180,
          sin(changerate + high) * 180 + 180
        ),
        map(random(), 0, 1, 280, 300),
        360
      );
    } else {
      fill(0);
    }
    hexagon(this.pos.x, this.pos.y, this.size);
    // square(this.pos.x, this.pos.y, this.size);
  }
}

function hexagon(x, y, radius) {
  beginShape();
  for (let i = 0; i <= 6; i++) {
    let a = (i * PI) / 3;
    let posx = cos(a) * radius + x;
    let posy = sin(a) * radius + y;
    vertex(posx, posy);
  }
  endShape();
  // stroke(255, 0, 0);
  point(x, y);
}

let cells = [];
let cellSize = 6;

function index(i, j) {
  if (j >= width / cellSize || j < 0) return null;
  if (i >= height / cellSize || i < 0) return null;
  return j + (i * height) / cellSize;
}
function updateCell(i, j) {
  let count = 0;
  let idx;

  idx = round(index(j, i - 1));
  count += idx == null ? 0 : cells[idx].alive;

  idx = round(index(j - 1, i));
  count += idx == null ? 0 : cells[idx].alive;

  idx = round(index(j + 1, i));
  count += idx == null ? 0 : cells[idx].alive;

  idx = round(index(j, i + 1));
  count += idx == null ? 0 : cells[idx].alive;

  idx = round(index(j - 1, i - 1));
  count += idx == null ? 0 : cells[idx].alive;

  idx = round(index(j - 1, i + 1));
  count += idx == null ? 0 : cells[idx].alive;

  if (!cells[j + (i * height) / cellSize].alive) {
    if (count === 2) cells[j + (i * height) / cellSize].revive = true;
    else cells[j + (i * height) / cellSize].revive = false;
  } else {
    if (count >= 2 && count <= 3)
      cells[j + (i * height) / cellSize].survive = true;
    else {
      cells[j + (i * height) / cellSize].survive = false;
    }
  }
}

function setup() {
  createCanvas(720, 720);
  for (let i = 0; i < height / cellSize; i++) {
    // let x = i * cellSize;
    for (let j = 0; j < width / cellSize; j++) {
      // let y = j * cellSize;
      cells[j + (i * height) / cellSize] = new Cell(
        i * (cellSize + cellSize / 2),
        (j * cellSize + (cellSize / 2) * ((i + 1) % 2)) * 1.73,
        cellSize
      );
    }
  }
}

function draw() {
  colorMode(RGB);
  background(0);
  frameRate(10);

  for (i = 0; i < cells.length; i++) cells[i].show();

  for (i = 0; i < height / cellSize; i++) {
    for (j = 0; j < width / cellSize; j++) {
      updateCell(i, j);
    }
  }
  for (i = 0; i < cells.length; i++) {
    if (!cells[i].survive) cells[i].alive = false;
    if (cells[i].revive) cells[i].alive = true;
    cells[i].survive = false;
    cells[i].revive = false;
  }
  // noLoop();
}
