console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"] ;

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}



var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2]; 
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

var flipCard = function (cardID) {
	if (cardsInPlay === 2) {cardsInPlay.length === 2}; {
		return true;
	} else if { (cardsInPlay[0] === cardsInPlay[1] ) {
	alert("You found a match!") }
	} else {(cardsInPlay[0] !=== cardsInPlay[1]) {
	alert("Sorry, try again.") }
	console.log("User flipped" + cards[cardID]);
};

flipCard(0);
flipCard(2);
checkForMatch();












