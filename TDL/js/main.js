// this is the smurf for when you press the add button it will run the addItem function;
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

function addItem() {
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

function clearInputOnFocus() {
	document.getElementById("list").value = "";
}

function pressEnter(event) {
	// the unicode for the enter button
	// https://www.toptal.com/developers/keycode
	if (event.keyCode === 13) {
		addItem();
	}
}

function markItemAsComplete(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("strike");
	}
}

// creating a function that will clear all the li's with the class of strike.
function clearCompleted() {
	let completedTasks = document.querySelectorAll("ol li.strike");

	// loop through the node list of the QSA and remove any tasks that have been completed

	for (let i = 0; i < completedTasks.length; i++) {
		completedTasks[i].remove();
	}
}

function clearAll() {
	let clearAll = document.querySelectorAll("ol li");

	for (let i = 0; i < clearAll.length; i++) {
		clearAll[i].remove();
	}
}
