var cards = [
 {
  rank: "queen",
  suit: "hearts",
  cardImage: "Images/queen-of-hearts.png"
 },
 {
  rank: "queen",
  suit: "diamonds",
  cardImage: "Images/queen-of-diamonds.png"
 },
 {
  rank: "king",
  suit: "hearts",
  cardImage: "Images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "Images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var checkForMatch = function() {
  	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
  	}
  	else {
  		console.log("Sorry, try again.");
  	}	
};
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardsId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
  	if (cardsInPlay.length === 2) {
  			checkForMatch();}
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
 };

 var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);         
    cardElement.setAttribute('click', "flipCard");
    document.getElementById('game-board').appendChild(cardElement);
}
};
createBoard();
















