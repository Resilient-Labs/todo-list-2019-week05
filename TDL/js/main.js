/* Psuedo Code:
There's a button. When you click it, we want to add what you typed into our list.
    - Click the "button" and the 'addItem' function happens.

 Got an input field named "list". If you type something and hit Enter, it adds to our list too.
    - Type and hit Enter in "list", and the 'addItem' function does its thing.

 If you double-click any item inside our list, it'll either get crossed out (if not already) or return to normal.
    - Double-click an item, and it runs 'markItemAsComplete'.

 When you click inside the "list" box, whatever was typed inside goes away.
    - Click inside "list", and 'clearInputOnFocus' makes sure it's empty.

 There's a button named "CA". If you click it, we remove every single item in our list.
    - Click "CA" button and all items go away with 'clearAll'.

 Another button named "CC" is there. If you click it, it only removes items you've crossed out.
    - Click "CC" button and the 'clearCompleted' function removes all crossed out items. */


|// this is the smurf for when you press the add button it will run the addItem function;
document.getElementById("button").addEventListener("click", addItem);

// this smurf on the input and if you press enter I want it to run the same functionality ass the addItem
document.getElementById("list").addEventListener("keyup", pressEnter);

// this smurf is to mark items as completed and put the class .strike through I used the dbl click eventlistener property.
document.querySelector("ol").addEventListener("dblclick", markItemAsComplete);

// this smurf is to clear the filed of input once I enter something and press the add button or enter button
document.getElementById("list").addEventListener("focus", clearInputOnFocus);

// smurf is for clearing all the tasks (thinking of usiong a for loop)
document.getElementById("CA").addEventListener("click", clearAll);

// smurf is clearing all the li's and removing them from the ol (going back to how it all started)
document.getElementById("CC").addEventListener("click", clearCompleted);


/* 'addItem': 
    - Looks at "list" to see if you typed anything.
    - If not, tells you to type something.
    - If you did type, it adds your typing to the list and then clears the box.
*/

function addItem() {

	// the .trim will check for white spaces or empty spaces and remove them. The reason why I used this was because 
	let checkIfEmpty = document.getElementById("list").value.trim();
	if (checkIfEmpty.length === 0) {
		document.getElementById("error").innerText = "Please enter a task";
		// return is immediately exiting out the function and not running the rest of the code
		return;
	}

	let ol = document.querySelector("ol");
	let li = document.createElement("li");
	li.innerText = checkIfEmpty;
	ol.appendChild(li);

	// clear the input

	document.getElementById("list").value = "";
}

/* 'clearInputOnFocus':
    - Just empties the "list" box.
 */

function clearInputOnFocus() {
	document.getElementById("list").value = "";
}

/* 'pressEnter':
    - If you hit the Enter key, it does the same thing as the 'addItem' function. */


function pressEnter(event) {
	// the unicode for the enter button
	// https://www.toptal.com/developers/keycode
	if (event.keyCode === 13) {
		addItem();
	}
}

/* 
'markItemAsComplete':
    - It checks if you double-clicked a list item. If you did, it either crosses it out or uncrosses it. 
*/

function markItemAsComplete(event) {
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName
	if (event.target.tagName === "LI") {
		// class I got from codepen thats in my css
		event.target.classList.toggle("strike");
	}
}

/* 'clearCompleted':
    - It looks for all crossed-out items and then removes them from the list.
 */


// creating a function that will clear all the li's with the class of strike.
function clearCompleted() {
	let completedTasks = document.querySelectorAll("ol li.strike");

	// loop through the node list of the QSA and remove any tasks that have been completed I remember that leon used QSA and said it makes an object of all the li's

	for (let i = 0; i < completedTasks.length; i++) {
		completedTasks[i].remove();
	}
}

/* 'clearAll':
    - Simply removes everything from the list.
*/

// run a function that runs a for loop and removes all li's
function clearAll() {
	let clearAll = document.querySelectorAll("ol li");

	for (let i = 0; i < clearAll.length; i++) {
		clearAll[i].remove();
	}
}
