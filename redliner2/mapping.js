/*
Peter Chang
MM621
11-7-2019
Project 3
*/

//this code works to averaging speeds

var speedData;
var train1min, train2min, train3min;
var url;
var totalSpeed, averageSpeed;
var counter;
var speedArray = [];
var count0,count20,count40,count60,count80;
var xpos,ypos,size1;

function setup(){
//put setup code here
createCanvas(windowWidth,windowHeight);

url = "https://data.cityofnewyork.us/resource/i4gi-tjb9.json";
getSpeeds();
background(0);
// rectMode(CENTER);
// fill(0);
// rect(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
fill(255);
textSize(60);

totalSpeed = 0;
averageSpeed = 0;
count0 = 0;
count20 = 0;
count40 = 0;
count60 = 0;
count80 = 0;
if (speedData){
ypos = windowHeight/2;
xpos = windowWidth/2;
size1 = count0;
}
}

function getSpeeds(){
  loadJSON(url, gotData);
}

function gotData(data){
  speedData=data;
}

function draw(){
  background(0);
  //parse the speedData json to get the minutes of first train

if (speedData){
  buildSpeed();
  counter2 = int(speedData[0].speed)
//   print("speedData[0] is "+ counter2);
//   print("second speed: " + speedData[1].speed);

drawDiamonds();



}

//test square
fill(0,255,0);
translate(width / 2, height / 2);
rotate(PI / 3.0);
rect(-26, -26, 52, 52);

fill(0,200,0);
translate(width / 2, height / 2);
rotate(PI / 3.0);
sq(300, 300, 300);






}
function mousePressed(){
  //define the button and then call getBart()

}

function buildSpeed(){


    // print(speedData[0].speed);
print("total speed " + totalSpeed);
    for (var i = 0; i < 1000; i++) {
    // print(speedData[i].speed);
    // print(float(speedData[i].speed));
    if (speedData){
    totalSpeed += float(speedData[i].speed);

    //sort
    if (speedData[i].speed>=0 && speedData[i].speed<20){
      count0++;
    }
    if (speedData[i].speed>=20 && speedData[i].speed<40){
      count20++;
    }
    if (speedData[i].speed>=40 && speedData[i].speed<60){
      count40++;
    }
    if (speedData[i].speed>=60 && speedData[i].speed<80){
      count60++;
    }
    if (speedData[i].speed>=80){
      count80++;
    }



    selectRange();
    speedArray.push(speedData[i].speed);
      }
    }

        averageSpeed = totalSpeed/1000;
        // averageSpeed2 =

    // print("added speed is "+int(totalSpeed));
    print("average speed is "+int(averageSpeed));
    // print("average float speed is "+int(averageSpeed));
    // print("average float speed is "+averageSpeed2);
    // print("average float speed is "+speedArray);
    print("highest speed is "+max(speedArray));
    print("count0 is "+count0);
    print("count20 is "+count20);
    print("count40 is "+count40);
    print("count60 is "+count60);
    print("count80 is "+count80);
  noLoop();
  }

  function selectRange(){


  }

  function drawDiamonds(xpos,ypos,size){
    // translate(width / 2, height / 2);
    rotate(PI*0.25);
    rectMode(CENTER);
    // rotate(0.5);
    fill('rgba(255,0,0,0.50)');

    textAlign(CENTER);
    fill('rgba(255,0,0,0.50)');
    square(windowWidth/2, windowHeight/2, count0*2);
    fill('rgba(255)');
    text('0-20 MPH',windowWidth/2,windowHeight/2);

    fill('rgba(255,0,0,0.50)');
    square(windowWidth*0.25, windowHeight*0.75, count20*2);
    fill('rgba(255)');
    text('20-40',windowWidth*0.25,windowHeight*0.75);
    fill('rgba(255,0,0,0.50)');
    square(windowWidth*0.25, windowHeight*0.25, count40*2);
    fill('rgba(255)');
    text('40-60',windowWidth*0.25,windowHeight*0.25);
    fill('rgba(255,0,0,0.50)');
    square(windowWidth*0.75, windowHeight*0.25, count60*2);
    fill('rgba(255)');
    text('60-80',windowWidth*0.75,windowHeight*0.25);
    fill('rgba(255,0,0,0.50)');
    square(windowWidth/4, windowHeight*0.75, count80*0.75);
    fill('rgba(255)');
    text('80-100',windowWidth*0.75,windowHeight*0.75);

    // triangle(xpos-size1,ypos,xpos+size1,ypos,xpos,ypos+size1);
    // triangle(xpos-size1,ypos,xpos+size1,ypos,xpos,ypos-size1);

    print(windowWidth + 'x' + windowHeight);

    noLoop();
  }

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
