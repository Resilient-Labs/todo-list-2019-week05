//worked with Sarah B., Rio Castillo
//create a to-do list
//add inputs for UI to create their tasks
//create a button to add a new list
//when a task is completed mark it off

//add EL to grab info from input
document.querySelector('#inputSubmit').addEventListener('click', addATask);

document.querySelector('#clearFinish').addEventListener('click', clearFinish);

function addATask() {
	let inputTask = document.querySelector('#inputTask').value;
	console.log(inputTask);
	//create an li
	let li = document.createElement('li');

	//create a textnode
	let addText = document.createTextNode(inputTask);

	li.appendChild(addText);

	//put the li inside the ul
	let ol = document.querySelector('#list');
	ol.appendChild(li);

	li.addEventListener('click', lineThrough);
}

//put a line through li to say its complete when clicked
function lineThrough(e) {
	e.target.classList.toggle('strike');
}

// //when a line through li hit clear to delete
function clearFinish() {
	document.querySelectorAll('.strike').forEach((task) => {
		task.remove();
	});
}


