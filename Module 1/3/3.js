'use strict';

const int1 = parseInt(prompt("Give first integer:"))
const int2 = parseInt(prompt("Give second integer:"))
const int3 = parseInt(prompt("Give third integer:"))

const sum = int1 + int2 + int3
const prod = int1 * int2 * int3
const aver = sum/3

document.querySelector('#target').innerHTML = 'Sum: ' + sum + ', product: ' + prod + ', average: ' + aver
