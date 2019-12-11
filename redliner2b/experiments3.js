//construct variable in for loop test

var count1, count2;

function setup(){
  count1 = 10;
  count2 = 10;
}

function draw(count1){
  for(i=0;i<10;i++){count1++;}
  for (i=0;i<10;i++){
    let count;
    let array = [i];
  let separator = '';
  let message = join(array, separator);
  // let q1 = 'count+[i]';
    print(message);
    print(i);

  }
noLoop();
}
