const text = document.querySelector('#trigger');
const img = document.querySelector('#target');
text.addEventListener('mouseover', function(evt){
  img.src = "img/picB.jpg";
});

text.addEventListener('mouseout', function(evt) {
  img.src = "img/pica.jpg";
});