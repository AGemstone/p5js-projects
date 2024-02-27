function rose(offX, offY, r, numer, denom) {
  let k = numer / denom;
  let angInc = 0.2;
  beginShape();
  for (let ang = 0; ang <= TWO_PI * denom; ang += angInc) {
    let x = r * cos(k * ang) * cos(ang) + offX;
    let y = r * cos(k * ang) * sin(ang) + offY;
    vertex(x, y);
  }
  endShape();
}

class particle {
  constructor(offX, offY, radius, growthRate) {
    this.x = offX;
    this.y = offY;
    this.r = radius;
    this.growth = growthRate;
    this.growing = true;
  }
}

let particles = [];
function setup() {
  createCanvas(600, 600);
  let particleCount = 200;
  let maxRadius = 20;

  let x = random() * width - width / 2;
  let y = random() * height - height / 2;
  let growthRate = 0.1 + random() * 0.05
  particles.push(new particle(x, y, 1, growthRate));
  for (let i = 0; i < particleCount; i++) {
    x = random() * width - width / 2;
    y = random() * height - height / 2;
    growthRate = 0.1 + random() * 0.05
    // if we have initial radii greater than 1
    // let j = 0;
    // while (j < i) {
    //   let x0 = particles[j].x;
    //   let y0 = particles[j].y;
    //   let distance = (x0 - x) * (x0 - x) + (y0 - y) * (y0 - y);
    //   if (distance <= 4) {
    //     console.log("hit");
    //     x = random() * width - width / 2;
    //     y = random() * height - height / 2;
    //     j = -1;
    //   }
    //   j++;
    // }
    particles.push(new particle(x, y, 1, growthRate));
  }
}

function draw() {
  colorMode(RGB);
  background(0);

  translate(width / 2, height / 2);
  for (let i = 0; i < particles.length; i++) {
    colorMode(HSB, 360, 70, 100);
    fill((frameCount + i * 5) % 360, 100, 100);
    rose(particles[i].x, particles[i].y, particles[i].r, 13, 17);
    for (let j = 0; j < particles.length; j++) {
      if (i == j) {
        continue;
      }

      let ang = atan2(
        -particles[i].y + particles[j].y,
        -particles[i].x + particles[j].x
      );

      let distX =
        particles[i].x +
        particles[i].r * cos(ang) -
        particles[j].x -
        particles[j].r * cos(PI + ang);
      let distY =
        particles[i].y +
        particles[i].r * sin(ang) -
        particles[j].y -
        particles[j].r * sin(PI + ang);
      let distance = distX * distX + distY * distY;
      if (distance < 1) {
        particles[i].growing = false;
      }
    }
    if (particles[i].growing) {
      particles[i].r += particles[i].growth;
    }
  }
}
