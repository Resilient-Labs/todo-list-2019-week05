const list = document.querySelector('#list');
const taskBtn = document.querySelector('#task');
const resetBtn = document.querySelector('#reset');

// make event listener for task button
taskBtn.addEventListener('click', makeList);

// make a event listener for the reset button
resetBtn.addEventListener('click', resetList);

// create a function for when a person enters a task for the list
function makeList() {
  const listInput = document.querySelector('#inputList').value;
  const newListItem = document.createElement('li');
  const textNode = document.createTextNode(listInput);
  newListItem.addEventListener('click', lineThrough)
  newListItem.appendChild(textNode);
  list.appendChild(newListItem);

}

// create a function to reset the list
function resetList() {
  list.innerHTML = '';
}

// make a function to where they are able to cross out a task on the list
function lineThrough(e) {
  e.currentTarget.classList.toggle('lineThrough');
  console.log('text')
}

