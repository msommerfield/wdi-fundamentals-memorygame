var cards = [
 {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png",
  id: 0
 },
 {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png",
  id: 1
 },
 {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png",
  id: 2
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png",
  id: 3
}
];
//1
function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    // console.log(cardElement);
    cardElement.addEventListener('click', (function(x) {return function() {flipCard(x)}})(i)); // 'i' is immediately evaluated to the correct value
    cards[i].element = cardElement; // Keep association with DOM here
	}
}

createBoard();
//2
function flipCard () {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  cardsInPlay.push(cards[cardId].id);
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  console.log("cardImage");
  console.log("suit");

// Check for match here =>
  if (cardsInPlay.length === 2) {
  	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
  	}
  	else {
  		alert("Sorry, try again.");
  		console.log(cardsInPlay);
  		cardsInPlay[0].setAttribute('src', 'images/back.png'); // this doesnt work
  	}   cardsInPlay[1].setAttribute('src', 'images/back.png'); //this doesnt work
  }

var cardsInPlay = [] ;
















