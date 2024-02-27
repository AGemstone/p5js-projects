function subdivide_l(sqr,i) {
  let new_squares = [];

  // big rect
  w1 = sqr[2] / 1.755625;
  h1 = sqr[3];
  x1 = sqr[0] - (sqr[2] - w1) / 2;
  y1 = sqr[1];

  // small rect
  w2 = sqr[2] / 2.325;
  h2 = sqr[3] / 1.755625;
  x2 = sqr[0] + (sqr[2] - w2) / 2;
  y2 = sqr[1] + (sqr[3] - h2) / 2;

  // square
  w3 = sqr[2] / 2.325;
  h3 = sqr[3] / 2.325;
  x3 = sqr[0] + (sqr[2] - w3) / 2;
  y3 = sqr[1] - (sqr[3] - h3) / 2;

  new_squares.push([x1, y1, w1, h1, "l",i], [x3, y3, w3, h3], [x2, y2, w2, h2]);

  return new_squares;
}
function subdivide_d(sqr,i) {
  let new_squares = [];
  // big rect
  w1 = sqr[2];
  h1 = sqr[3] / 1.755625;
  x1 = sqr[0];
  y1 = sqr[1] + (sqr[3] - h1) / 2;
  // small rect
  w2 = sqr[2] / 1.755625;
  h2 = sqr[3] / 2.325;
  x2 = sqr[0] + (sqr[2] - w2) / 2;
  y2 = sqr[1] - (sqr[3] - h2) / 2;
  // square
  w3 = sqr[2] / 2.325;
  h3 = sqr[3] / 2.325;
  x3 = sqr[0] - (sqr[2] - w3) / 2;
  y3 = sqr[1] - (sqr[3] - h3) / 2;

  new_squares.push([x1, y1, w1, h1, "d", i], [x3, y3, w3, h3], [x2, y2, w2, h2]);
  return new_squares;
}
function subdivide_u(sqr,i) {
  let new_squares = [];
  // big rect
  w1 = sqr[2];
  h1 = sqr[3] / 1.755625;
  x1 = sqr[0];
  y1 = sqr[1] - (sqr[3] - h1) / 2;
  // small rect
  w2 = sqr[2] / 1.755625;
  h2 = sqr[3] / 2.325;
  x2 = sqr[0] - (sqr[2] - w2) / 2;
  y2 = sqr[1] + (sqr[3] - h2) / 2;
  // square
  w3 = sqr[2] / 2.325;
  h3 = sqr[3] / 2.325;
  x3 = sqr[0] + (sqr[2] - w3) / 2;
  y3 = sqr[1] + (sqr[3] - h3) / 2;

  new_squares.push([x1, y1, w1, h1, "u",i], [x3, y3, w3, h3], [x2, y2, w2, h2]);
  return new_squares;
}
function subdivide_r(sqr,i) {
  let new_squares = [];
  // big rect
  w1 = sqr[2] / 1.755625;
  h1 = sqr[3];
  x1 = sqr[0] + (sqr[2] - w1) / 2;
  y1 = sqr[1];    
  // small rect
  w2 = sqr[2] / 2.325;
  h2 = sqr[3] / 1.755625;
  x2 = sqr[0] - (sqr[2] - w2) / 2;
  y2 = sqr[1] - (sqr[3] - h2) / 2;
  // square
  w3 = sqr[2] / 2.325;
  h3 = sqr[3] / 2.325;
  x3 = sqr[0] - (sqr[2] - w3) / 2;
  y3 = sqr[1] + (sqr[3] - h3) / 2;

  new_squares.push([x1, y1, w1, h1, "r",i], [x3, y3, w3, h3], [x2, y2, w2, h2]);
  return new_squares;
}

function dig_round(num, digits) {
  let div = pow(10, digits);
  return Math.round(num * div) / div;
}

let squares;
let subdivs = 8
let scaling = 150
function setup() {
  createCanvas(600, 600);
  squares = [[width / 2, height / 2, 3.080625 * scaling, 2.325 * scaling]];
  // for (let i = 0; i < 1; i++)
  squares = subdivide_l(squares[0]);
  for (let j = 0; j < subdivs; j++) {
    let sqrlen = squares.length;
    for (let i = 0; i < sqrlen; i += 3) {
      if (squares[i][4] === "l") {
        squares.push(...subdivide_d(squares[i], i));
        squares.push(...subdivide_l(squares[i + 1], i));
      }
      if (squares[i][4] === "d") {
        squares.push(...subdivide_r(squares[i],i));
        squares.push(...subdivide_d(squares[i + 1],i));
      }
      if (squares[i][4] === "r") {
        squares.push(...subdivide_u(squares[i],i));
        squares.push(...subdivide_r(squares[i + 1],i));
      }
      if (squares[i][4] === "u") {
        squares.push(...subdivide_l(squares[i],i));
        squares.push(...subdivide_u(squares[i + 1],i));
      }
    }
  }
  console.log(squares.length);
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  background(0);
  noFill();
  // this aint exactly right
  let circ_size = 4
  let ang = PI / 2;
  for (let i = 2; i < squares.length; i++) {
    stroke((i * 30) % 360, 0, 100);
        // rect(squares[i][0], squares[i][1], squares[i][2], squares[i][3]);
    if (abs(dig_round(squares[i][2] / squares[i][3], 3) - 1) < 0.1) {
      // stroke((i ) % 360, 100, 100);
      strokeWeight(Math.ceil(subdivs*squares[i][2]/scaling))
      // rect(squares[i][0], squares[i][1], squares[i][2], squares[i][3]);
      if(squares[i-2][4] == "l"){
        if ( i !== 2)
      arc(
        squares[i][0] - squares[i][2] / 2,
        squares[i][1],
        squares[i][2] / circ_size,
        squares[i][3],
        -PI/2,
        PI / 2
      );
        arc(
        squares[i][0] - squares[i][2] / circ_size,
        squares[i][1] - squares[i][3] / 2,
        squares[i][2] / 1.755,
        squares[i][3] / circ_size,
        0,
        PI
      );
      }
      if(squares[i-2][4] == "u"){
        
      arc(
        squares[i][0] ,
        squares[i][1]- squares[i][3] / 2,
        squares[i][2],
        squares[i][3]/circ_size,
        0,
        PI 
      );
        arc(
        squares[i][0] + squares[i][2] / 2,
        squares[i][1] - squares[i][3] / circ_size,
        squares[i][2] / circ_size,
        squares[i][3] / 1.755,
        PI/2,
        -PI/2 
      );
      }
      if(squares[i-2][4] == "r"){
        
      arc(
        squares[i][0] + squares[i][2] / 2,
        squares[i][1],
        squares[i][2]/circ_size,
        squares[i][3],
        PI / 2,
        -PI / 2
      );
        arc(
        squares[i][0] + squares[i][2] / circ_size,
        squares[i][1] + squares[i][3] / 2,
        squares[i][2] / 1.755,
        squares[i][3] / circ_size,
        PI,
        0 
      );
      }
      if(squares[i-2][4] == "d"){
        
      arc(
        squares[i][0] ,
        squares[i][1] + squares[i][3] / 2,
        squares[i][2],
        squares[i][3]/circ_size,
        -PI,
        0 
      );
        arc(
        squares[i][0] - squares[i][2] / 2,
        squares[i][1] + squares[i][3] / circ_size,
        squares[i][2] / circ_size,
        squares[i][3] / 1.755,
        -PI/2,
        PI/2 
      );
      }
    }
  }
  noLoop()
}
