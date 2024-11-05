'use strict';

const q = confirm("Should I calculate the square root?")
if (q == false) {
  document.querySelector('#target').innerHTML = "The square root is not calculated.";
}
else {
  let num = parseInt(prompt("Write a number:"))
  if (num >= 0) {
    document.querySelector('#target').innerHTML = 'Square root of ' + num + ' is ' + Math.sqrt(num) + '.'

  }
  else {
    document.querySelector('#target').innerHTML = "The square root of a negative number is not defined."
  }
}