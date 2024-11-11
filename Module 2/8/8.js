'use strict';

function concat (list) {
  let html = ""
  for (let i = 0; i < list.length; i ++) {
    html += `${list[i]}`
  }
  document.querySelector('#target').innerHTML = html;
}
const lista = ["Johnny", "DeeDee", "Joey", "Marky"]
concat (lista)
