class Cell {
  constructor(x, y, cellsize) {
    this.pos = createVector(x, y);
    this.size = cellsize;
    this.alive = random() < 0.5
    this.survive = false
    this.revive = false
  }



  show() {
    colorMode(HSB, 360)
    stroke(360)
    strokeWeight(1)
    if (this.alive) {
      //strokeWeight(this.size);
      //stroke(map(random(),0,1,0,360),map(random(),0,1,280,300),360);
      //point(this.pos.x+this.size/2, this.pos.y+this.size/2);

      fill(map(random(), 0, 1, 0, 360), map(random(), 0, 1, 280, 300), 360);

    } else {
      fill(0);
    }
    square(this.pos.x, this.pos.y, this.size);
  }
}
let cells = [];
let cellSize = 12;

function updateCell(i, j) {
  let count = 0
  for (n = i - 1; n <= i+1; n++) {
    if (n < 0 || n >= height / cellSize ) continue
    for (m = j - 1; m <= j+1; m++) {
      if (m < 0 || m >= width / cellSize || (n === i && m == j)) continue
      count += cells[m +n * height / cellSize].alive
    }
  }
  
  if (!cells[j + i * height / cellSize].alive) {
    if (count === 3) cells[j + i * height / cellSize].revive = true
    else cells[j + i * height / cellSize].revive = false
  } else {
    if (count === 2 || count === 3) cells[j + i * height / cellSize].survive = true
    else cells[j + i * height / cellSize].survive = false
  }
}


function setup() {
  createCanvas(720, 720);
  for (i = 0; i < height / cellSize; i++) {
    let x = i * cellSize
    for (j = 0; j < width / cellSize; j++) {
      let y = j * cellSize
      cells[j + i * height / cellSize] = new Cell(x, y, cellSize)
    }
  }
}


function draw() {
  background(0);
  //translate(width/2,0)
  frameRate(120)



  for (i = 0; i < cells.length; i++)
    cells[i].show()


  for (i = 0; i < height / cellSize; i++) {
    for (j = 0; j < width / cellSize; j++) {
      updateCell(i, j)
    }
  }
  for (i = 0; i < cells.length; i++) {
    if (!cells[i].survive) cells[i].alive = false
    if (cells[i].revive) cells[i].alive = true
    cells[i].survive = false
    cells[i].revive = false
  }
  //noLoop()
}