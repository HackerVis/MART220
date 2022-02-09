var x = 500;
var y = 400; 
var size = 35;
var color = 120;
var backwardsDir = 800;
var forwardsDir = 0;
var BackwardsState = false;
var speedX = 2;
var speedY = 2; 
var button;
var value = 0;
function setup()
{
    createCanvas(800,600);
    speedX = random(1,10);
    speedY = random(1,10); 
    button = createButton('Return'); 
    button.position(120, 115);
    button.mousePressed(returnHome);
}
function returnHome(){
    window.open('https://www.google.com/search?q=cartoon+fedora&tbm=isch&ved=2ahUKEwiFt_rnqvL1AhXhOn0KHfS-CfcQ2-cCegQIABAA&oq=cartoon+fedora&gs_lcp=CgNpbWcQA1DTA1jAF2DDGGgAcAB4AIABOYgBzQSSAQIxMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=64wDYsWVB-H19AP0_aa4Dw&bih=646&biw=1280&rlz=1C1ONGR_enUS988US988#imgrc=goufLtHYkgtfdM')
}

function mouseClicked() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
}   

function draw()
{
    background(120);
    fill(0,255,255);
    circle(x, y, size);
    circle(x, y+size, size);
    circle(x, y-size, size);
    circle(x+size, y, size);
    circle(x-size, y, size);
    square(765, 10, 20);
    fill(value);
    rect(653, 525, 125, 35);

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
    fill(255,0,0);
    text("3-Dimensional Scan", 50, 50);
    textSize(24);
    doSomethingNow(x, y, size);
    fill(0,0,255);
    text("Jason Firth", 655, 550);
}
function doSomethingNow(x, y, size)
{
    fill(255, 213, 51);
    circle(400, 250, 75);
    rect(350, 315, 100, 175);
    rect(175, 315, 165, 35);
    rect(460, 315, 165, 35);
    rect(350, 505, 35, 175);
    rect(415, 505, 35, 175);
}