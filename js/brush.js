let array = [];
const PALETTE = ["#ff5900", "#00ff4d", "#4d00ff", "#ffd900", "#00eaff", "#ff0000"];
let bg_color = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg_color = color(random(PALETTE));
}

function draw() {
   background(bg_color);
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}