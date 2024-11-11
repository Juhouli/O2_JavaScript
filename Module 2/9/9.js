'use strict';

function even(nums) {
  let evenN = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenN.push(nums[i])
    }
  }
  let html = `<li>Original list: ${nums}</li><li>Even number list: ${evenN}</li>`;
  document.querySelector('#target').innerHTML = html;
}
let nums = [1,2,3,4,5,6,7,8,9,10]
even(nums)
