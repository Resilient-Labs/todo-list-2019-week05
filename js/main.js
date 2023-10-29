const inputText = document.querySelector('#task')

// Create an event listener for the add button
document.querySelector('#add').addEventListener('click', addTask);
document.querySelector('#clear').addEventListener('click', clearTask)

// Function to add a task to the list
function addTask() {
    const newTask = inputText.value;

    if (newTask === '') {
        alert('Please enter a task');
    }
//create a variable that will add a new list item
    const listItem = document.createElement('li');
    listItem.innerText = newTask;

    document.querySelector('#placeToSee').appendChild(listItem);

    // Clear the input field
    inputText.value = ''; 

    listItem.addEventListener('click', crossOutTask)
}

function crossOutTask(e) {
    e.target.classList.toggle('crossOut');
}

// Function to clear the task list
function clearTask() {
    const placeToSee = document.querySelector('#placeToSee');
    placeToSee.innerHTML = '';
}
