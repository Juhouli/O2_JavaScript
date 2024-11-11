'use strict';

const target = document.querySelector('#target');

const q = confirm("Should I calculate the square root?")
if (q === false) {
  target.innerHTML = "The square root is not calculated.";
}
else {
  let num = parseInt(prompt("Write a number:"))
  if (num >= 0) {
    target.innerHTML = 'Square root of ' + num + ' is ' + Math.sqrt(num) + '.'

  }
  else {
    target.innerHTML = "The square root of a negative number is not defined."
  }
}