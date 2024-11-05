const goal  = parseInt(prompt("How many times do you want to throw a dice?"))
let sum = 0
let throws = 0
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
while (throws <= goal) {
  sum += randomIntFromInterval(1, 6)
  throws += 1
}
document.querySelector('#target').innerHTML = 'Sum of your throws is ' + sum + '.'