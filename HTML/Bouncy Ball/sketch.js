let y = 30;
let x = 30;
let directions = [true, false];
let xDirection = directions[0];
function setup(){
    createCanvas(600, 600)
    background(53, 94, 213)
};

function drawCircle(){

        if(xDirection == true && x < 596){
            x += 2;
        }
        else if(xDirection == false && x > 10){
            x -= 2;
        };
        if( x == 596|| x == 10){
            xDirection = !xDirection;
        };
circle(x, y, 20)
};

function draw(){
    rect(2, 2, 596, 596);
    drawCircle()
};