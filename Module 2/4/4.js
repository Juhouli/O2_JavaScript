'use strict';

let nums = [];
let a = 1;

while (true) {
  a = parseInt(prompt("Type a number. 0 ends the program:"))
  if (a !== 0) {
    nums.push(a)
  }
  else {
    break
  }
}
nums.sort((a,b) => a-b);
for (let i = 0 ; i < nums.length; i++) {
  console.log(nums[i])
}