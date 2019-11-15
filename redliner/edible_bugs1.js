/*
Peter Chang
Project 2
CSUEB FA2019
MM621: Screen Based Interaction
Instructor: Gwyan Rhabyt
10-8-2019
*/

var images = [];
var screen1,screen2,screen3 = false;
var burgerdown = false;

function preload(){
  img = [ loadImage("assets/SVG/burger.svg")


        ];

}


function setup(){
  createCanvas(windowWidth, windowHeight);
  //initialize start screen
  screen1 = true;
  burgerdown = false;



}

function draw(){

    // rect(windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/2);

    if(screen1=true){
    background(0);
    fill(255,255,0);
    rect(0,0,windowWidth,windowHeight/12);

    // menu burger
    imageMode(CENTER);
    image(img[0],windowHeight/24,windowHeight/24,windowHeight/16,windowHeight/20);

    burgerdown = false;
    }

    // if(img[0].mouseClicked = true){
    //   rect(400,500,500,500);
    // }

    if (burgerdown===true){
      fill(200);
      rect(400,400,400,400);
    }else{
      burgerdown = false;
    }

    screen1functions();
    burgerfunctions();

}

function mouseClicked() {

}

function keyPressed() {

}

function screen1functions(){

}

function burgerfunctions(){

  if (mouseIsPressed){
    if (mouseX < windowHeight/12 && mouseY < windowHeight/12){
      burgerdown = true;
      rect(mouseX,mouseY,20,20);
      print(burgerdown);
    }

  }

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);

}
