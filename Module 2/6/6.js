'use strict';

function noppa() {
  return Math.floor(Math.random() * (6) + 1);
}

let html = ""
let a = 0

while (true) {
  a = noppa()
  if (a === 6) {
    html += `<li>${a}</li>`
    break
  }
  else {
    html += `<li>${a}</li>`
  }
}
document.querySelector('#target').innerHTML = html

