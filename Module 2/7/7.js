'use strict';

function noppa(sides) { // min and max included
  return Math.floor(Math.random() * (sides) + 1);
}

let html = ""
let a = 0

let sides = parseInt(prompt("Give the numbers of sides of a dice:"))

while (true) {
  a = noppa(sides)
  if (a === sides) {
    html += `<li>${a}</li>`
    break
  }
  else {
    html += `<li>${a}</li>`
  }
}
document.querySelector('#target').innerHTML = html