'use strict';

const people = parseInt(prompt("Give the number of candidates:"))
let objlist = []
let namestr = ""
for (let i = 1; i <= people; i++) {
  let name = prompt("Give name for candidate " + i)
  let obj = {
    name: name,
    votes: 0
  }
  objlist.push(obj)
  namestr += `${name}, `
}
namestr = namestr.slice(0, -2);
const voters = parseInt(prompt("Give the number of voters:"))
for (let j = 1; j <= voters; j ++) {
  let vote = prompt(`Voter ${j} give your vote. List of candidates: ${namestr}`)
  if (vote === ""){}
  else {
    let candidateIndex = objlist.findIndex(person => person.name === vote);
    objlist[candidateIndex].votes += 1;
  }
}

objlist.sort((a, b) => b.votes - a.votes);
if (objlist[0].votes === objlist[1].votes) {
  console.log("There is a tie!")
}
else{
  console.log(`The winner is ${objlist[0].name}!`)
}

console.log(`Results:`)
for (let f = 0; f < objlist.length; f++) {
  console.log(`${objlist[f].name}: ${objlist[f].votes}`)
}
