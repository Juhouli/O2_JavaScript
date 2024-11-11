'use strict';

let dogs = []
for (let i = 1; i < 7; i++) {
  let a = prompt("Give the name of dog no. " + i);
  dogs.push(a);
}

dogs.sort()
dogs.reverse()
let html = ""
for (let j = 0 ; j < dogs.length; j++) {
  html += `<li>${dogs[j]}</li>`
}

document.querySelector('#target').innerHTML = html