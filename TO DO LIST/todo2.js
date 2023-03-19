const addToDoButton = document.getElementById('addToList');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');
const clears = document.getElementById('clear');
const clearCompletes = document.getElementById('clearComplete');

addToDoButton.addEventListener('click', addToDoList)
clears.addEventListener('click', clear)
clearCompletes.addEventListener('click', clearComplete)


function addToDoList(){
    const li = document.createElement('li');
   li.innerText = inputField.value; 
   li.addEventListener('click', toggleSelectedClass)
    toDoContainer.appendChild(li);
    inputField.value = " "; 
    let count = toDoContainer.querySelectorAll('*').length   
    document.querySelector('#counts').innerHTML = "Tasks:" + count;
}

function toggleSelectedClass(event){ 
    event.target.classList.toggle('selected');
}

function clear(){
    toDoContainer.innerHTML = '';
    document.querySelector('#counts').innerHTML = "Tasks:" + 0;
}

function clearComplete(){
    let selectedItems = toDoContainer.querySelectorAll('.selected');
    selectedItems.forEach(li => {
    toDoContainer.removeChild(li);
    });
    let count = toDoContainer.querySelectorAll('*').length
    document.querySelector('#counts').innerHTML = "Tasks:" + count;
}

document.querySelector('#counts').innerHTML = "Tasks:" + toDoContainer.querySelectorAll('*').length