let r, g ,b;

function setup(){
    createCanvas(1525, 775);
    r =random(255);
    g =random(255);
    b =random(255);
    background(255);
};

function mouseDragged({clientX, clientY}){
    strokeWeight(3);
    stroke(r, g, b);
    fill(r, g, b);
    makeCircle(clientX, clientY);
};



function mouseClicked({clientX, clientY}){
    makeCircle(clientX, clientY);
};

function makeCircle(x, y){
    ellipse(x, y, 10, )
};