// !query selectors
// selects the ul
const list = document.querySelector('.todoList');

// selects the input tag
const userInput = document.querySelector('.userInput');

// selects list add button
const submitBtn = document.querySelector('.submitBtn');

// selects clear completed button
const clearCompleteBtn = document.querySelector('.clearCompleteBtn');

// selects clear all button
const clearListBtn = document.querySelector('.clearListBtn');

// selects region where we display our remaining todos
const remainingTodos = document.querySelector('.remainingTodos');

// !event listeners
// click event to add list items
submitBtn.addEventListener('click', inputChecker);

// click event to clear completed items
clearCompleteBtn.addEventListener('click', clearComplete);

// click event to clear all
clearListBtn.addEventListener('click', clearList);

// !list counter
//calls function to immediately set counter in the DOM
updateDOMCounter();

// !updates counter in the Dom
function updateDOMCounter() {
	// select all list items and give their count using length prop
	const listItemCount = document.querySelectorAll('li').length;

	// select all completed classes, and give count with length prop
	const completedCount = document.querySelectorAll('.completed').length;

	// find total number of non-complete list items
	const listCount = listItemCount - completedCount;
	// simple conditional based on the number of items if our list

	if (listCount === 0) {
		// earlier we selected the element where we want to display the count and stored it in the remainingTodos variable
		// now we update it's inner text depending on the value stored in our listCount
		remainingTodos.innerHTML = `You have 0 items on this list`;
	} else if (listCount === 1) {
		remainingTodos.innerHTML = `You have 1 to-do left`;
	} else {
		remainingTodos.innerHTML = `You have ${listCount} to-dos left`;
	}
}

// !checks for user input
function inputChecker() {
	// ensures no empty list items are added
	if (userInput.value === '') {
		alert('please add a to-do item');
	} else {
		// if not empty, calls the function to add list items
		addListItem();
	}
}

// !adds item to list
function addListItem() {
	// once called creates a list item
	const listItem = document.createElement('li');
	// we append that list item to our ul
	list.appendChild(listItem);
	// set the inner text to the user input
	listItem.innerText = userInput.value;
	// reset the input region to empty string -- makes sure that the user doesn't have to erase each time
	userInput.value = '';
	//call function to update the dom
	updateDOMCounter();
	// call function to add event listeners to our list items
	addLiEventListener();
}

// !adds event listeners to all list items
function addLiEventListener() {
	// we make an array from all our list items and give them click events -- once clicked we call the complete item function
	const listItems = document.querySelectorAll('li');
	Array.from(listItems).forEach(el =>
		el.addEventListener('click', completeItem)
	);
}

// !toggles completed class
function completeItem(e) {
	// this function takes in a parameter "e" -- this allows us to target the specific list item that called this function
	// calling this function toggles the class completed on the list item -- our CSS contains specific styling for this class
	e.target.classList.toggle('completed');

	// we then run a function to update the count in the DOM
	updateDOMCounter();
}

// !clears complete items only
function clearComplete() {
	// we select all our li and store them in a variable
	let completeCheck = document.querySelectorAll('li');

	// we make an array from our li and use for each to loop through them
	Array.from(completeCheck).forEach(el => {
		// we declare a variable (like before) checking for that completed class
		const classCheck = el.classList.contains('completed');

		// if that variable has the completed class it is removed from the dom
		if (classCheck === true) {
			el.remove();
		}
	});

	// note: there is no need to update the count here, because completed items are already removed from the total count
}

// !clears entire list
function clearList() {
	// works the exact same as the clear complete function
	// except here there's no need to check for the completed class - we just remove everything
	let completeCheck = document.querySelectorAll('li');
	Array.from(completeCheck).forEach(el => {
		el.remove();
	});

	// call on function to update the dom counter accordingly
	updateDOMCounter();
}
