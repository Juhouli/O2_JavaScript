'use strict';

const luku = parseInt(prompt("Write a number:"))
if ((2 ** luku - 2) % luku == 0) {
  document.querySelector('#target').innerHTML = "Number " + luku + " is a prime number."
}
else {
  document.querySelector('#target').innerHTML = "Number " + luku + " is not a prime number."
}