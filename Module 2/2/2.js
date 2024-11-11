'use strict';


const num = parseInt(prompt("Give the number of participants:"))
let people = []
for (let i = 1; i <= num; i+= 1 ) {
  let a = prompt("Give the name of participant no. " + i);
  people.push(a);
}

people.sort()
let html = ""
for (let j = 0 ; j < people.length; j++) {
  html += `<li>${people[j]}</li>`
}

document.querySelector('#target').innerHTML = html