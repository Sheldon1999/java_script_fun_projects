//make an array of stars
//to ease manipulation
let stars = [];
let speed = 10;
function setup() {
  //making a canvas of full screen:
  createCanvas(windowWidth, windowHeight);
  //initialise canvas with stars:
  for(let i = 0;i < 800;++i)
    stars.push(new star());
  button = createButton('speedUp');
  button.position(windowWidth-80, windowHeight-40);
  button.mousePressed(speedup);
  button = createButton('speedDown');
  button.position(30, windowHeight-50);
  button.mousePressed(speedDown);
}

function speedup(){
   speed = speed+5;
}
function speedDown(){
   speed = speed-5;
}
function draw() {
  background(0);
  translate(width/2,height/2);
  //continuosly update and show the stars;
  for(let i = 0;i < stars.length;++i){
    stars[i].show();
    stars[i].update();
  }
}