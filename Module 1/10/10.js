'use strict';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function financial(x) {
  return Number.parseFloat(x).toFixed(3);
}

const dice = parseInt(prompt("Type the amount of dice:"))
const sum = parseInt(prompt("Type the sum of the rolls of these " + dice + " dice:"));
let sumTrue = 0
let ram = 0
const times = 100000

for (let i = 1; i < times; i ++) {
  if (ram === sum) {
    sumTrue += 1
    ram = 0
  }
  else {
    ram = 0
  }
  for (let j = 1; j <= dice; j ++){
    ram += randomIntFromInterval(1, 6)
  }
}
const prob = financial((sumTrue / times) * 100)
document.querySelector('#target').innerHTML = "Probability to get sum " + sum + " with " + dice + " is " + prob + "%."