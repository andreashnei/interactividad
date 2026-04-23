let x = 0, y =0;
let vx = 5, vy = 5;
const vel = 5;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    // frameRate(60);
}

function draw() {
    background("#ff4d00");
    stroke("black");
    fill("white");
    drawStar(x +50, y + 50, 30, 60,5);
    x += vx;
    y += vy;
    if (x > width) {
        x = 0;
    }
    if (y > height) {
        y = 0;
    }   
    if (x <= 0 || x + 100 >= width) {
        vx *= -1;
    }
    
    if (y <= 0 || y + 100 >= height) {
        vy *= -1;
    }
}

function drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}   