/*
Peter Chang
MM621
11-7-2019
Project 3
*/

var bartData;
var train1min, train2min, train3min;
var url;

function setup(){
//put setup code here
createCanvas(600,600);
url = "http://api.bart.gov/api/etd.aspx?cmd=etd&orig=HAYW&key=MW9S-E7SL-26DU-VV8V&json=y";
getBart();


}

function getBart(){
  loadJSON(url, gotData);
}

function gotData(data){
  bartData=data;
}

function draw(){
  //parse the bartData json to get the minutes of first train

background(0);
fill(255);
textSize(60);

if (bartData){

  if (train1min<10){
    fill(255,0,0);
  }
  if (train1min<20 && train1min>10){
    fill(255,255,0);
  }
  if (train1min<60 && train1min>20){
    fill(0,255,0);
  }



  train1min = bartData.root.station[0].etd[0].estimate[0].minutes;
  text(train1min, 100, 200);
  rect(100,210,50,train1min*10);
  // print(train1min);

  if (train2min<10){
    fill(255,0,0);
  }
  if (train2min<20 && train2min>10){
    fill(255,255,0);
  }
  if (train2min<60 && train2min>20){
    fill(0,255,0);
  }
  train2min = bartData.root.station[0].etd[0].estimate[1].minutes;
  text(train2min, 200, 200);
  rect(200,210,50,train2min*10);



  if (train3min<10){
    fill(255,0,0);
  }
  if (train3min<20 && train3min>10){
    fill(255,255,0);
  }
  if (train3min<60 && train3min>20){
    fill(0,255,0);
  }
  train3min = bartData.root.station[0].etd[0].estimate[2].minutes;
  text(train3min, 300, 200);
  rect(300,210,50,train3min*10);
  }

}

function mousePressed(){
  //define the button and then call getBart()

}
