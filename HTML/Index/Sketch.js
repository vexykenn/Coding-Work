function setup(){
    createCanvas(800, 800);
    background(101, 26, 176);
};

function mouseClicked({clientX, clientY}){
    //console.log('X:', clientX, '& Y:', clientY);
    if(clientX <= 100 && clientY <= 100){
        console.log('Are you DeadAss my guy??')
    }
};

function draw(){
    //console.log('Good morning is two words and goodnight is one word')
    circle(50, 50, 100);
};