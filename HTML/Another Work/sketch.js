let r, g ,b;

function setup(){
    createCanvas(1000, 1000);
    r =random(255);
    g =random(255);
    b =random(255);
};

function draw(){
    background(120);
    strokeWeight(3);
    stroke(r, g, b);
    fill(r, g, b + 50);
    ellipse(20, 20, 40, 40);
};

function mousePressed(){
    r =random(255);
    g =random(255);
    b =random(255);
};