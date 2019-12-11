/*
Peter Chang
MM621
12-10-2019
Project 3
*/

///////////////
/*ripping examples for the wheel*/
//////////////

//global variables
var speedData;

var url;
var totalSpeed, averageSpeed;
var counter;
var speedArray = [];
var count0,count20,count40,count60,count80;
var xpos,ypos,size1;
var divisions;



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

//initialize variables as numbers
totalSpeed = 0;
averageSpeed = 0;
count0 = 0;
count20 = 0;
count40 = 0;
count60 = 0;
count80 = 0;

divisions = 10;

}

//get the api
function getSpeeds(){
  loadJSON(url, gotData);
}

//make data useable
function gotData(data){
  speedData=data;
}

function draw(){
  // clear();
  rectMode(CENTER);
  fill(0);
  rect(windowWidth/2,windowHeight/2,windowWidth*2,windowHeight*2);
  //parse the speedData json to get the minutes of first train

  

if (speedData){

  print("speedData loaded");
  buildSpeed();
  fill('rgb(2,255,2)');
  circle(0,0,200);


//draws the squares/diamonds
drawCounts();






}
//end speedData


}


//creates speed arrays and calculations
function buildSpeed(){


    // print(speedData[0].speed);
print("total speed " + totalSpeed);
    for (var i = 0; i < 1000; i++) {
    // print(speedData[i].speed);
    // print(float(speedData[i].speed));
    if (speedData){
    totalSpeed += float(speedData[i].speed);

    //sort speeds into bins relative to speed
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

  //sort children into personal arrays
  function selectRange(){


  }


//draws the squares/diamonds
  function drawCounts(){
      print('count0 is ' + count0);

    translate(windowWidth/2,windowHeight/2);

    for (i=0;i<divisions;i++) {

      noStroke();
      print("positions are " + xpos + ", "+ypos);


      //makes the meter
      push();
      fill('rgba(255,0,0,0.50)');
      let parsefix = 70/100;
      let multy1 = 20;
      let multx1 = int(count+ i*10) *5;
      //count0, count20
      rotate(PI*75/100);
    		rotate(TWO_PI*i *parsefix / divisions);
    		rect(200, 0, multx1, multy1);
    	pop();
    }


    noLoop();
  }

//resizes canvas if changed
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
