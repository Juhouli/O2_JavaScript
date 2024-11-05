'use strict';

const fir = parseInt(prompt("Give starting year:"))
const sec = parseInt(prompt("Give ending year:"))


let a = 0
let b = 0
let returnString = ""
while (a != 1) {
  if ((fir + b) % 100 == 0) {
    if ((fir + b) % 400 == 0) {
      a = 1;
    }
    else {
      a = 0
      b += 1;
    }
  }
  else {
    if ((fir + b) % 4 == 0) {
      a = 1;
    }
    else {
      a = 0
      b += 1;
    }
  }
}

if (fir + b > sec) {
  document.querySelector('#target').innerHTML = 'There are no leap years in this range.'
}
else {
  let c = fir + b
  returnString += c
  returnString += "<br/>"
  c += 4
  while (c <= sec) {
    if (c % 100 == 0) {
      if (c % 400 == 0) {
        returnString += c
        returnString += "<br/>"
        c += 4;
      } else {
        c += 4;
      }
    }
    else {
      returnString += c
      returnString += "<br/>"
      c += 4;
    }
  }
}
document.querySelector('#target').innerHTML = returnString