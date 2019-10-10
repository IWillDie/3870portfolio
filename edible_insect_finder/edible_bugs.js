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
var pagNum,pagNum0,pagNum1,pagNum2,pagNum3;
var mouseX, mouseY;

function preload(){
  img = [ loadImage("assets/1x/p1_burger.png"),
          loadImage("assets/1x/p1_buttons2.png")


        ];

}


function setup(){
  createCanvas(windowWidth, windowHeight);
  //initialize start screen
  pagNum=1;



}

function draw(){





    background(0);
    fill(255,255,0);
    rect(0,0,windowWidth,windowHeight/12);

    // menu burger
    imageMode(CENTER);
    image(img[0],windowHeight/24,windowHeight/24,windowHeight/16,windowHeight/20);




    if (pagNum===1)pageOne();
    if (pagNum===2)pageTwo();




    burgerfunctions();






}

function mouseClicked() {

}

function keyPressed() {

}

function pageOne(){
// rect(200,200,200,200);
image(img[1], width/2,height/2,width*0.8,width*0.8);
}

function burgerfunctions(){

  if (mouseX < windowHeight/12 && mouseY < windowHeight/12){
    fill(60);
    rect(0,height/12,200,175);
    fill(255);
    textSize(30);
    text('Camera',width/12,height/12 +35);
    text('Search',width/12,height/12 +75);
    text('Locate',width/12,height/12 +115);
    text('Lists',width/12,height/12 +155);

  // print(burgerdown);
  }


}

function mouseIsPressed(){

  pagNum=2;

print(pagNum);
}

function pageTwo(){
  image(img[1], 200,200,200,300);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);

}
