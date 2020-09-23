/*
Peter Chang
MM621
12-10-2019
Project 3
*/

///////////////
/*redo the wheel*/
//////////////

//global variables
var speedData;
var amp1;
var url;
var totalSpeed, averageSpeed;
var counter;
var speedArray = [];
var count0,count10,count20,count30,count40,count50,count60,count70,count80,count90;
var xpos,ypos,size1;
var divisions;
var textOffset;



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
count10 = 0;
count20 = 0;
count30 = 0;
count40 = 0;
count50 = 0;
count60 = 0;
count70 = 0;
count80 = 0;

divisions = 10;
amp1 = 2;

textOffset = 250;

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


  // fill('rgb(2,255,2)');
  // // circle(0,0,100);
  //
  // textAlign(BASELINE);
  // textSize(30);
  // text('Data Loaded',0,30);
  // pop();

if (speedData){

  print("speedData loaded");
  buildSpeed();
  fill('rgb(2,255,2)');
  // circle(0,0,100);
  push();
  textAlign(RIGHT);
  textSize(30);
  text('Data Loaded',170,30);
  pop();


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
    if (speedData[i].speed>=0 && speedData[i].speed<10){
      count0++;
    }
    if (speedData[i].speed>=10 && speedData[i].speed<20){
      count10++;
    }
    if (speedData[i].speed>=20 && speedData[i].speed<30){
      count20++;
    }
    if (speedData[i].speed>=30 && speedData[i].speed<40){
      count30++;
    }
    if (speedData[i].speed>=40 && speedData[i].speed<50){
      count40++;
    }
    if (speedData[i].speed>=50 && speedData[i].speed<60){
      count50++;
    }
    if (speedData[i].speed>=60 && speedData[i].speed<70){
      count70++;
    }
    if (speedData[i].speed>=70 && speedData[i].speed<80){
      count70++;
    }
    if (speedData[i].speed>=80 && speedData[i].speed<90){
      count80++;
    }
    if (speedData[i].speed>=90){
      count90++;
    }



    showRange();
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
  function showRange(){
    print('count40 ' + count40);


  }


//draws the squares/diamonds
  function drawCounts(){
      print('count0 is ' + count0);

    translate(windowWidth/2,windowHeight/2);



      noStroke();
      print("positions are " + xpos + ", "+ypos);


      //makes the meter
      push();
      fill('rgba(255,0,0,0.50)');
      let parsefix = 70/100;
      let multy1 = 10;
      let multx1 = count0 *amp1;
      //count0, count20
      rotate(PI*75/100);
    		rotate(TWO_PI*1 *parsefix / divisions);
    		rect(200, 0, multx1, multy1);
        textSize(20);
        fill('rgba(200,200,255,1)');
        // rotate(PI);
        text('0-10 mph',textOffset,0);
    	pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx2 = count10 *amp1;
      //count0, count20
      rotate(PI*75/100);
    		rotate(TWO_PI*2 *parsefix / divisions);
    		rect(200, 0, multx2, multy1);
        textSize(20);
        fill('rgba(200,200,255,0.5)');
        // rotate(PI);
        text('10 mph',textOffset,0);
    	pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx3 = count20 *amp1;
      //count0, count20
      rotate(PI*75/100);
    		rotate(TWO_PI*3 *parsefix / divisions);
    		rect(200, 0, multx3, multy1);
        textSize(20);
        fill('rgba(200,200,255,0.5)');
        // rotate(PI);
        text('20 mph',textOffset,0);
    	pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx4 = count30 *amp1;
      //count0, count20
      rotate(PI*75/100);
    		rotate(TWO_PI*4 *parsefix / divisions);
    		rect(200, 0, multx4, multy1);
        textSize(20);
        fill('rgba(200,200,255,0.5)');
        // rotate(PI);
        text('30 mph',textOffset,0);
    	pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx5 = count40 *amp1;
      //count0, count20
      rotate(PI*75/100);
    		rotate(TWO_PI*5 *parsefix / divisions);
    		rect(200, 0, multx5, multy1);
        textSize(20);
        fill('rgba(200,200,255,0.5)');
        // rotate(PI);
        text('40 mph',textOffset,0);
    	pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx6 = count50 *amp1;
      //count0, count20
      rotate(PI*75/100);
        rotate(TWO_PI*6 *parsefix / divisions);
        rect(200, 0, multx6, multy1);
        textSize(20);
        fill('rgba(200,200,255,0.5)');
        // rotate(PI);
        text('50 mph',textOffset,0);
      pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx7 = count60 *amp1;
      //count0, count20
      rotate(PI*75/100);
        rotate(TWO_PI*7 *parsefix / divisions);
        rect(200, 0, multx7, multy1);
        textSize(20);
        fill('rgba(200,200,255,0.5)');
        // rotate(PI);
        text('60 mph',textOffset,0);
      pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx8 = count70 *amp1;
      //count0, count20
      rotate(PI*75/100);
        rotate(TWO_PI*8 *parsefix / divisions);
        rect(200, 0, multx8, multy1);
        textSize(20);
         fill('rgba(200,200,255,0.5)');
          // rotate(PI);
          text('70 mph',textOffset,0);
      pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx9 = count80 *amp1;
      //count0, count20
      rotate(PI*75/100);
        rotate(TWO_PI*9 *parsefix / divisions);
        rect(200, 0, multx9, multy1);
        textSize(20);
        fill('rgba(200,200,255,0.5)');
        // rotate(PI);
        text('80 mph',textOffset,0);
      pop();

      push();
      fill('rgba(255,0,0,0.50)');
      // let parsefix = 70/100;
      // let multy1 = 20;
      let multx10 = count90 *amp1;
      //count0, count20
      rotate(PI*75/100);
        rotate(TWO_PI*10 *parsefix / divisions);
        rect(200, 0, multx10, multy1);
        textSize(20);
        fill('rgba(200,200,255,1)');

        text('90+ mph',textOffset,0);
      pop();


    noLoop();
  }

//resizes canvas if changed
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
