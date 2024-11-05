'use strict';

const cabinClass = prompt("Enter the cabin class (A/B/C).");
  switch (cabinClass) {
    case 'A':
      document.querySelector('#target').innerHTML =('Top deck cabin with window.');
      break;
    case 'B':
      document.querySelector('#target').innerHTML =('Top deck cabin without window.');
      break;
    case 'C':
      document.querySelector('#target').innerHTML =('Windowless cabin under the car deck.');
      break;
    default:
      document.querySelector('#target').innerHTML =("Invalid cabin class.");
  }