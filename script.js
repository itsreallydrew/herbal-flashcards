/* REUSABLE ITEMS 
// This section is to identify what actions/commands will be reused and can be written using a function:

- Flipping the card to reveal the other side
- Cycling to the next card or the previous card
- Counting/Identifying which card in the stack the user is currently at
    - have a counter
- Adding a definition and a term to the deck
- Update HTML with function 
- Have all of of the HTML clear out on each click and display the proper information
- Have one part of the HTML have an #id of "term" and the other of "definition"
- Create a class list for each new deck item that is added (stretch goal)
- Possibly add a quiz mode (stretch goal)
- Create a shuffle option (stretch goal)

*/

const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
const shuffle = document.querySelector('#shuffle');
const display = document.querySelector('.text-display');
const term = document.querySelector('#term');
const definition = document.querySelector('#definition');
const totalCards = document.querySelector('#totalCards');
const curCard = document.querySelector('#curCard');
// const catList = document.querySelector('.categoryList');
let currentCard = 0;
let previousCard = 0;
let cardCount = 1;
// let arr;

// function energeticsStudy(event) {
// 	let arr = allTerms.filter((allTerms) => allTerms.category.length === 9);
// }
// function herbTypesStudy(event) {
// 	let arr = allTerms.filter(
// 		(allTerms) => allTerms[i].category === 'herb types'
// 	);
// }
// function tissueStatesStudy(event) {
// 	let arr = allTerms.filter(
// 		(allTerms) => allTerms[i].category === 'tissue states'
// 	);
// }

// catList.addEventListener('click', (event) => {
// 	if (event.target.id === 'energetics') {
// 		energeticsStudy();
// 	}
// 	console.log(event);
// 	console.log(arr);
// 	if (event.target.id === 'herbCats') {
// 		herbTypesStudy();
// 	}
// 	if (event.target.id === 'tissueStates') {
// 		tissueStatesStudy();
// 	}
// 	console.log(arr);
// 	return arr;
// });

display.addEventListener('click', flipCard);
// display.addEventListener('click', (event) => {
// 	console.log(event);
// });
next.addEventListener('click', nextCard);
prev.addEventListener('click', prevCard);
shuffle.addEventListener('click', shuffleCards);

init();

function init(params) {
	setTotal();
	resetCard();
	render();
}

function render(params) {
	currentCard = 0;
	cardCount = 1;
	term.innerText = energetics[currentCard].term;
	definition.innerText = energetics[currentCard].definition;
}

// Pseudocode Functions

// IF the user clicks on the card
// THEN the card will flip to the other side and reveal the information
function flipCard(event) {
	// when the card is clicked it flips to the other side
	// have the definition side be hidden (toggle) and on click/flip hide the term
	term.classList.toggle('hidden');
	definition.classList.toggle('hidden');
}

// IF the user clicks an arrow
// THEN the next card or the previous card will display
function nextCard(arr) {
	// when the 'next' button is clicked the next card in the stack displays
	// console.log(event);
	// currentCard = previousCard;
	// console.log(arr);
	currentCard += 1;
	if (currentCard >= energetics.length) {
		currentCard = 0;
	}
	setCardText(currentCard);
	incrementCount();
}

function setCardText(currentCard) {
	// when next is clicked the the content in the paragraph should display the content coordinating to the index of the array
	term.innerText = energetics[currentCard].term;
	definition.innerText = energetics[currentCard].definition;
}

function prevCard(arr) {
	// when the 'prev' button is clicked the previous card will display
	currentCard -= 1;
	if (currentCard < 0) {
		currentCard = energetics.length - 1;
	}
	setCardText(currentCard);
	decrementCount();
}

// IF the user clicks the next arrow
// THEN increment the counter by 1
function incrementCount(params) {
	// increase count by 1 per each 'next' arrow click
	cardCount++;
	if (cardCount > energetics.length) {
		cardCount = 1;
	}
	curCard.innerText = cardCount;
}

// IF the user clicks the previous arrow
// THEN decrement the counter by 1
function decrementCount(params) {
	// decrease count by 1 per each 'previous' arrow click
	// console.log(cardCount);
	cardCount--;
	if (!cardCount) {
		cardCount = 5;
	}
	curCard.innerText = cardCount;
	// if (cardCount > 0 && cardCount <= terms.length) {
	// 	cardCount--;
	// 	// } else if (cardCount < 0) {
	// 	// 	cardCount = terms.length - 1;
	// 	// }
	// 	curCard.innerText = cardCount;
	// }
}

// Shuffle function
function shuffleCards(params) {
	// choose random number between 0 and length of terms array
	// assign that number to randomCard value
	randomCard = Math.floor(Math.random() * energetics.length);
	// run setCardText function with randomCard value
	setCardText(randomCard);
	incrementCount();
}

function setTotal(params) {
	// total will equal length of array
	totalCards.innerText = energetics.length;
	return totalCards.innerText;
}

function resetCard(params) {
	curCard.innerText = 1;
}

// On each CLICK clear out DIV
// THEN add the new PARAGRAPH item
// On second thought this may not be necessary because the only info that needs to be displayed is the next term/definition so clearing the card isn't necessary
// function clearCard(params) {
// clear the text of the card to allow for next piece of info to be displayed
// }

// Total cards in stack = terms.length
// currentCardCount = terms[i]
