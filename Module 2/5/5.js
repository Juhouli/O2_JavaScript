'use strict';

let nums = [];
let a = 1;

while (true) {
  a = parseInt(prompt("Type a number. If you type number that has already been written the program:"))
  if (nums.includes(a)) {
    break
  }
  else {
    nums.push(a)
  }
}
nums.sort((a,b) => a-b);
for (let i = 0 ; i < nums.length; i++) {
  console.log(nums[i])
}