'use strict';

const year = prompt("Type year and I'll tell if it is a leap year.")

if (year % 100 == 0) {
  if (year % 400 == 0) {
    document.querySelector('#target').innerHTML = year + ' is a leap year.';
  }
  else {
    document.querySelector('#target').innerHTML = year + ' is not a leap ear.';
  }
}
else {
  if (year % 4 == 0) {
    document.querySelector('#target').innerHTML = year + ' is a leap year.';
  }
  else {
    document.querySelector('#target').innerHTML = year + ' is not a leap year.';
  }
}