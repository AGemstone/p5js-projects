let sp = [];
// let palette = ["#ef3e36", "#17bebb", "#2e282a", "#edb88b"];
let palette = [
               // "#ef3e36", 
               // "#17bebb", 
               "#2e282a", 
              "#1e382a", 
              "#1e385a", 
                
               // "#edb88b"
];

let pg;
function setup() {
  createCanvas(400, 400);
  background(0);
  let sp0 = [random(), random(), random()];
  sp.push(sp0);
  for (let i = 0; i < 50; i++) {
    sp.push([
      sp0[0] + random() * 0.2 - 0.1,
      sp0[1] + random() * 0.2 - 0.1,
      sp0[2] + random() * 0.2 - 0.1,
    ]);
  }
  pg = createGraphics(width, height, WEBGL);
}

function draw() {
  pg.push();
  pg.background(0, 32);
  // background(255,max(max(0,255-frameCount),0))

  pg.scale(3);
  // pg.rotateY(noise(frameCount * 0.0001) * TAU);
  // pg.rotateZ(PI/2)
  
  
  let sigma = 10;
  let rho = 28;
  let beta = 8 / 3;
  let t = map(noise(frameCount*0.001+1),0,1,0.001,0.01);
  let ball_max_size = 5;
  
  let plot = (x,y,z,size) =>{pg.translate(x,y,z)
                            pg.sphere(size)
                            pg.translate(-x,-y,-z)}
  
  pg.ambientLight(255)
  pg.pointLight(
    color("#7852a9"),
    width/4*cos(frameCount*PI/360),
    height/4*sin(frameCount*PI/360),
    0);
  for (let i = 0; i < sp.length; i++) {
    let p = sp[i];
    
    pg.specularMaterial(palette[Math.floor(i % palette.length)]);
    // pg.normalMaterial()
    pg.noStroke();
    let size = map(noise(frameCount * 0.01+i), 0, 1, 1, ball_max_size);
    let nx = sp[i][0] + sigma * (p[1] - p[0]) * t;
    let ny = sp[i][1] + (p[0] * (rho - p[2]) - p[1]) * t;
    let nz = sp[i][2] + (p[0] * p[1] - beta * p[2]) * t;
    sp[i][0] = nx;
    sp[i][1] = ny;
    sp[i][2] = nz;

    //     pg.point(p[0], p[1], p[2]);
    //     pg.point(-p[0], p[1], p[2]);
    //     pg.point(p[0], -p[1], -p[2]);
    //     pg.point(-p[0], -p[1], -p[2]);
    //     pg.point(p[0], p[1], -p[2]);
    //     pg.point(-p[0], p[1], -p[2]);
    //     pg.point(p[0], -p[1], p[2]);
    //     pg.point(-p[0], -p[1], p[2]);

    
    plot(nz, nx, ny,size);
    // pg.point(-nz,nx,ny);
    // pg.point(nz,-nx,ny);
    // pg.point(-nz,-nx,ny);
    // pg.point(nz,nx,-ny);
    // pg.point(-nz,nx,-ny);
    // pg.point(nz,-nx,-ny);
    plot(-nz, -nx, -ny, size);
    
  }
  image(pg, 0, 0);

  // remove if we dont want the disappearing effect
  // if(size <= 1.1)
  pg.reset();

  pg.pop();
}