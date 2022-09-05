let pattern;
let pattern2;
let circleSize = 150;
let circleColorValue = 0;
let circleincrNum = 0.01;
let circleColor = 0;
let _size = 300;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
    circleSize = window.innerWidth/3;
    noStroke();
    angleMode(DEGREES);
     pattern = new PatternOne(circleSize);
pattern2 = new PatternTwo(0, 0,circleSize/2,circleSize/4,30);
   frameRate(30);
    circleColor = lerp(100,255,circleColorValue);
 pattern.draw(circleColor,circleSize);
}

function draw() {
  background(0);
    circleColorValue += circleincrNum;
    if (circleColorValue>=1){
        circleincrNum = -circleincrNum;
    }
    else if (circleColorValue<=0){
        circleincrNum = -circleincrNum;
    }
    //console.log(x);
    circleColor = lerp(100,255,circleColorValue);
     pattern.draw(circleColor,circleSize);
    pattern2.draw(_size);
}