var x = 100;
var y = 100; 
var size = 25;
var color = 120;
var backwardsDir = 800;
var forwardsDir = 0;
var BackwardsState = false;
var speedX = 2;
var speedY = 2; 
var Red = 0;
var Green = 0;
var Blue = 0; 

function setup()
{
    createCanvas(800,600);
    speedX = random(1,10);
    speedY = random(1,10);

    
}
function draw()
{
    background(120);
    circle(x, y, size);
    square(100, 100, 20);

    while(x>200 && x<600){
        Red+=1;
        Green+=1;
        Blue+=1;
        fill(Red,Green,Blue);
    }
    while(x<200 && x>600){
        Red-=1;
        Green-=1;
        Blue-=1;
        fill(Red,Green,Blue);
    }

    //x = x + speed;
    if(x >= 800) {
        speedX = random(1,10);
        speedX = -speedX;
    }
    else if (x < 0){
        speedX = random(1, 10);
    }
    if(y >= 600) {
        speedY = random(1,10);
        speedY = -speedY;
    }
    else if (y < 0){
        speedY = random(1, 10);
    }
    x = x+speedX;
    y = y+speedY;
    textSize(24);
    text(x, 255, 255);
    textSize(24);
    text(BackwardsState, 300, 300);
    doSomethingNow(x, y, size);
}
function doSomethingNow(x, y, size)
{
    fill(100, 200, 20);
    circle(500, 400, 120);
}