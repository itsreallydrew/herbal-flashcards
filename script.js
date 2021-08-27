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
- Create a shuffle option 


*/

// Pseudocode Functions

// IF the user clicks on the card
// THEN the card will flip to the other side and reveal the information
function flipCard(params) {
	// when the card is clicked it flips to the other side
	// have the definition side be hidden (toggle) and on click/flip hide the term
}

// IF the user clicks an arrow
// THEN the next card or the previous card will display
function nextCard(params) {
	// when the 'next' button is clicked the next card in the stack displays
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
function clearCard(params) {
	// clear the text of the card to allow for next piece of info to be displayed
}

// Total cards in stack = terms.length
// currentCardCount = terms[i]
