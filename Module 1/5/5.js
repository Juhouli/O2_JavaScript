'use strict';
const target = document.querySelector('#target');

const year = prompt("Type year and I'll tell if it is a leap year.")

if (year % 100 === 0) {
  if (year % 400 === 0) {
    target.innerHTML = year + ' is a leap year.';
  }
  else {
    target.innerHTML = year + ' is not a leap ear.';
  }
}
else {
  if (year % 4 === 0) {
    target.innerHTML = year + ' is a leap year.';
  }
  else {
    target.innerHTML = year + ' is not a leap year.';
  }
}