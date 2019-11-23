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

function setup(){
//put setup code here
createCanvas(600,600);
url = "https://data.cityofnewyork.us/resource/i4gi-tjb9.json";
getSpeeds();

totalSpeed = 0;
averageSpeed = 0;

}

function getSpeeds(){
  loadJSON(url, gotData);
}

function gotData(data){
  speedData=data;
}

function draw(){
  //parse the speedData json to get the minutes of first train

if (speedData){
  buildSpeed();
  counter2 = int(speedData[0].speed)
  print("speedData[0] is "+ counter2);
  print("second speed: " + speedData[1].speed);
}





background(0);
fill(255);
textSize(60);


}
function mousePressed(){
  //define the button and then call getBart()

}

function buildSpeed(){


    // print(speedData[0].speed);
print("total speed " + totalSpeed);
    for (var i = 0; i < 1000; i++) {
    print(speedData[i].speed);
    print(float(speedData[i].speed));
    if (speedData){
    totalSpeed += float(speedData[i].speed);
      }
    }

        averageSpeed = totalSpeed/1000;
    print("added speed is "+totalSpeed);
    print("average speed is "+averageSpeed);
    print("average float speed is "+float(averageSpeed));
  noLoop();
}
