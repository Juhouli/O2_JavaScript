'use strict';

const name = prompt("Write your name")

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const a = randomIntFromInterval(1, 4);

switch(a) {
  case 1:
    document.querySelector('#target').innerHTML = name + ', you are Ravenclaw';
    break;
  case 2:
    document.querySelector('#target').innerHTML = name + ', you are Slytherin';
    break;
  case 3:
    document.querySelector('#target').innerHTML = name + ', you are Hufflepuff';
    break;
  case 4:
    document.querySelector('#target').innerHTML = name + ', you are Gryffindor';
    break;
}