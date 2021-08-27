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
const display = document.querySelector('.text-display');
const term = document.querySelector('#term');
let definition = document.querySelector('#definition');
let currentCard = 0;
let previousCard = 0;

display.addEventListener('click', flipCard);
// display.addEventListener('click', (event) => {
// 	console.log(event);
// });
next.addEventListener('click', nextCard);

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
function nextCard(event) {
	// when the 'next' button is clicked the next card in the stack displays
	console.log(event);
	// currentCard = previousCard;
	currentCard += 1;
	if (currentCard >= terms.length) {
		currentCard = 0;
		// console.log(currentCard);
	}
	setCardText(currentCard);
}

function setCardText(currentCard) {
	// when next is clicked the the content in the paragraph should display the content coordinating to the index of the array
	term.innerText = terms[currentCard].term;
	definition.innerText = terms[currentCard].definition;
}

function prevCard(params) {
	// when the 'prev' button is clicked the previous card will display
}

// IF the user clicks the next arrow
// THEN increment the counter by 1
function incrementCount(params) {
	// increase count by 1 per each 'next' arrow click
}

// IF the user clicks the previous arrow
// THEN decrement the counter by 1
function decrementCount(params) {
	// decrease count by 1 per each 'previous' arrow click
}

// IF the user gets to the end of the stack
// THEN start the count over -- count must start at 1
function cardCarousel(params) {
	//
}

// IF a new card is added
// THEN increase the TOTAL by 1
function cardTotal(params) {
	// calculate total number of cards and increment by # cards added
}

// On each CLICK clear out DIV
// THEN add the new PARAGRAPH item
// On second thought this may not be necessary because the only info that needs to be displayed is the next term/definition so clearing the card isn't necessary
// function clearCard(params) {
// clear the text of the card to allow for next piece of info to be displayed
// }

// Total cards in stack = terms.length
// currentCardCount = terms[i]
