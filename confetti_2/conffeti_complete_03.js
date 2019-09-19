//Happy and Joyful Children by Free Music | https://soundcloud.com/fm_freemusic
//Music promoted by https://www.free-stock-music.com
//Creative Commons Attribution 3.0 Unported License
//https://creativecommons.org/licenses/by/3.0/deed.en_US

/*
Peter Chang, Sheldon Russell
Project 1
CSUEB FA2019
MM621: Screen Based Interaction
Instructor: Gwyan Rhabyt
9-19-2019
*/

var intX;
var intY;

var xloc1;
var yloc1;
var xloc2;
var yloc2;
var xloc3;
var yloc3;
var xloc4;
var yloc4;
var xloc5;
var yloc5;
var xloc6;
var yloc6;
var xloc7;
var yloc7;
var xloc8;
var yloc8;

var introTime = 60 * 10;
var introExitTime = 60 * 20;
var introImg;
var instructImg;
let song;

var SPACEBAR;

//loading variables
var timer = 0;
var loadingDots = 'Loading';
var loading = true;


var myFont;

function preload() {
   	introImg = loadImage('assets/confetti_collage_5.png');
    song = loadSound('assets/song.mp3');
    myFont = loadFont('assets/Chango-Regular.ttf');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(250);
  noStroke();
  fill(255,0,0);
  rectMode(CENTER);
  imageMode(CENTER);





  song.loop();
}

// function windowResized{
//
//   createCanvas(windowWidth,windowHeight);
//
// }


function draw() {
     //250 bc softer white





  textAlign(CENTER, CENTER);
  textSize(50);




//first 10 seconds, loading
  if (frameCount < introTime && loading === true)  {
      background(250);
      image(introImg,width/2,height/2,600,600);

      fill(130);
      textFont(myFont);
      textAlign(LEFT, CENTER);
      textSize(25);
      // line(76,0,76, height)
      text('Peter Chang & Sheldon Russell', width*0.1, height*0.8 - 160);
      text('Project 01', width*0.1, height*0.8 - 120);
      text('CSUEB FA2019', width*0.1, height*0.8 - 80);
      text('MM621: Screen Based Interaction', width*0.1, height*0.8 - 40);
      text('Instructor: Gwyan Rhabyt', width*0.1, height*0.8);
      // textAlign(LEFT, CENTER);
      // line(450,0,450, height)
      textAlign(CENTER, CENTER);
      textSize(50);
      fill(190);
      text(loadingDots, width*0.8, height*0.8);

      fill(250);
      if (frameCount % 60 == 0 && timer<20) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
          timer ++;
          loadingDots = loadingDots + '.';


        }
        if (timer > 3 && timer < 20) {
          timer = 0;
          loadingDots = 'Loading';

        } else if (timer > 20){
          return 0;
        }


  	  return;

      //10-20 frame time in seconds, instructions
  } if (frameCount > introTime && frameCount < introExitTime && loading === true) {
      background(250);
      fill(130,130,190);
      textFont(myFont);
      textAlign(LEFT, CENTER);
      textSize(100);
      // line(76,0,76, height)
      text('Instructions', width*0.2, height/2 - 250);
      fill(130);
      textSize(50);
      text('"WAD" Keys for bursts', width*0.2+50, height/2 - 150);
      text('"LEFT CLICK" to create', width*0.2+50, height/2 - 75);
      text('Other Keys to stop', width*0.2+75, height/2);
      text('"SPACEBAR" to reset', width*0.2+50, height/2+75 );
      // textAlign(LEFT, CENTER);
      // line(450,0,450, height)
      textAlign(CENTER, CENTER);
      textSize(50);
      fill(190);
     text(loadingDots, width*0.8, height*0.8);

    fill(250);
    if (frameCount % 60 == 0 && timer<20) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer ++;
        loadingDots = loadingDots + '.';


      }
      if (timer > 3 && timer < 20) {
        timer = 0;
        loadingDots = 'Loading';

      }
      else if (timer > 20){
        return 0;
      }
  }
  else if (frameCount === introExitTime) {
    background(250);
    loading = false;
  }


  // check if xloc and yloc are defined before incrementing
  // they won't be defined until the mouse is clicked

  if (xloc1 && yloc1 && xloc1 < intX + 100 && (keyCode === 68 || keyCode === 87)) {
    //background(100);
    xloc1++;
    yloc1++;

    fill(random(255),random(255),random(255));
    rect(xloc1, yloc1, random(10,25), random(10,25));
  }

  if (xloc2 && yloc2 && xloc2 < intX + 100 && (keyCode === 68 || keyCode === 87)) {
    xloc2++;
    yloc2--;
    fill(random(255),random(255),random(255));
    rect(xloc2, yloc2, random(10,25), random(10,25));
  }

  if (xloc3 && yloc3 && xloc3 < intX + 100 && (keyCode === 68 || keyCode === 87)) {
    xloc3++;

    fill(random(255),random(255),random(255));
    rect(xloc3, yloc3, random(10,25), random(10,25));
  }

  if (xloc4 && yloc4 && yloc4 > intY - 100 && (keyCode === 68 || keyCode === 65 || keyCode === 87)) {
    yloc4--;

    fill(random(255),random(255),random(255));
    rect(xloc4, yloc4, random(10,25), random(10,25));
  }

  if (xloc5 && yloc5 && yloc5 < intY + 100 && (keyCode === 68 || keyCode === 65 || keyCode === 87)) {
    yloc5++;

    fill(random(255),random(255),random(255));
    rect(xloc5, yloc5, random(10,25), random(10,25));
  }

  if (xloc6 && yloc6 && xloc6 > intX - 100 && (keyCode === 65 || keyCode === 87)) {
    xloc6--;

    fill(random(255),random(255),random(255));
    rect(xloc6, yloc6, random(10,25), random(10,25));
  }

  if (xloc7 && yloc7 && yloc7 < intY + 100 && (keyCode === 65 || keyCode === 87)) {
    yloc7++;
    xloc7--;

    fill(random(255),random(255),random(255));
    rect(xloc7, yloc7, random(10,25), random(10,25));
  }

  if (xloc8 && yloc8 && yloc8 > intY - 100 && (keyCode === 65 || keyCode === 87)) {
    yloc8--;
    xloc8--;

    fill(random(255),random(255),random(255));
    rect(xloc8, yloc8, random(10,25), random(10,25));
  }

}

function mouseClicked() {
  xloc1 = intX = xloc2 = xloc3 = xloc4 = xloc5 = xloc6 = xloc7 = xloc8 = mouseX;
  yloc1 = intY = yloc2 = yloc3 = yloc4 = yloc5 = yloc6 = yloc7 = yloc8= mouseY;

  // prevent default
  return false;
}

function keyPressed() {
  var SPACEBAR = 32
  if (keyCode === SPACEBAR) {
    clear();
   background(250);
  }
}
