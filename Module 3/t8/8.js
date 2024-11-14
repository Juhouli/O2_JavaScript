'use strict';

let a = document.getElementById('num1').innerText;
let b = document.getElementById('num2').value;
let res = 0;

function calculator() {
  switch (document.getElementById('operation').value) {
    case "add":
      console.log(a);
      console.log(b);

      break;
    case "sub":
      res = a-b;
      break;
    case "multi":
      res = a*b;
      break;
    case "div":
      res = a/b;
      break;
  }
  document.querySelector('#result').innerHTML = res.toString();
}