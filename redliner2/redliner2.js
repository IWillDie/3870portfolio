/*
Peter Chang
MM621
11-7-2019
Project 3
*/

var speedData;
var train1min, train2min, train3min;
var url;

function setup(){
//put setup code here
createCanvas(600,600);
url = "https://data.cityofnewyork.us/resource/i4gi-tjb9.json";
getSpeeds();

}

function getSpeeds(){
  loadJSON(url, gotData);
}

function gotData(data){
  speedData=data;
}

function draw(){
  //parse the speedData json to get the minutes of first train

background(0);
fill(255);
textSize(60);

if (speedData){

  // print(speedData[0].speed);

  }
}
function mousePressed(){
  //define the button and then call getBart()

}
