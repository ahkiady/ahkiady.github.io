
let a = 0, b = 0;
function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(220);
    ellipse(200 + 100*cos(b+=2/50), 200 + 100*sin(b+=2/50), 80, 80);
}
