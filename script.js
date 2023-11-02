let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.querySelector('#main-title').innerText = 'DOM Toretto\'s homepage';

// Part 2
document.querySelector('body').style.backgroundColor = '#a4a4a4';

// Part 3
// console.log(document.querySelector('#favorite-things').removeChild(document.querySelector('#favorite-things').querySelector('li:last-child')));
document.querySelector('#favorite-things').removeChild(document.querySelector('#favorite-things').lastElementChild);

  // Part 4
document.querySelectorAll('.special-title').forEach(e => {
  e.style.fontSize = '2rem';
});

  // Part 5
  document.querySelector('#past-races').removeChild(document.querySelector('#past-races').querySelector('li:nth-child(4)'));
  // alt:
  // document.querySelector('#past-races').removeChild(document.querySelector('#past-races').children[3]);
  
  // Part 6
  document.querySelector('#past-races').appendChild(document.createElement('li').textContent = 'NYC');

  // Part 7


  // Part 8


  // Part 9



});
