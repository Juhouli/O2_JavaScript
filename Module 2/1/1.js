'use strict';

let numbers = []
for (let i = 0; i < 5; i++) {
  let a = parseInt(prompt("Give a number:"));
  numbers.push(a);
}

for (let i = numbers.length -1 ; i >= 0; i-= 1) {
  console.log(numbers[i]);
}




