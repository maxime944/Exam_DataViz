// Récupérer les éléments du DOM
const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialiser le compteur à 0
let counter = 0;
counterElement.textContent = counter;

// Ajouter un écouteur d'événement pour le bouton d'incrémentation
increaseBtn.addEventListener('click', function() {
  counter++;
  counterElement.textContent = counter;
});

// Ajouter un écouteur d'événement pour le bouton de décrémentation
decreaseBtn.addEventListener('click', function() {
  counter--;
  counterElement.textContent = counter;
});

// Ajouter un écouteur d'événement pour le bouton de remise à zéro
resetBtn.addEventListener('click', function() {
  counter = 0;
  counterElement.textContent = counter;
});


