//get UL element
const todoUl = document.getElementById('todo');

// list of items
let listItems = [];

// add item to list
document.getElementById('addToList').onclick = addToList;

function addToList() {
  // Create unique id as now in miliseconds
  const uniqueId = Date.now();
  const newItem = document.getElementById('newItem');

  const item = document.createElement("li");
  const doneButton = document.createElement("button");

  item.id = uniqueId;
  item.done = false;
  doneButton.id = uniqueId;
  doneButton.onclick = markAsDone;
  doneButton.innerHTML = "Done/Complete";

  item.innerHTML = newItem.value;
  item.appendChild(doneButton);

  todoUl.appendChild(item);
  listItems.push(item);
  updateCount();
}

function markAsDone(event) {
  // Get item id from event
  const id = event.target.id;

  // Clear todo list
  todoUl.innerHTML = null;

  // Find item in listItems by item id
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].id === id) {

      // Add boolean flag "done" to found item
      listItems[i].done = true;

      // Change li css to text-decoration: line-through;
      listItems[i].setAttribute("style", "text-decoration: line-through;");
    }

    todoUl.appendChild(listItems[i]);
  }
  updateCount();
}

document.getElementById('clearCompleted').onclick = clearCompleted;

function clearCompleted () {
  // Clear todo list
  todoUl.innerHTML = null;

  // Find item in listItems by item id
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].done === false) {
      todoUl.appendChild(listItems[i]);
    }
  }
}

document.getElementById('clearAll').onclick = clearAll;
function clearAll () {
  listItems = [];
  // rebuild html ul list
  todoUl.innerHTML = null;
  updateCount();
}

function updateCount (){
  let count = 0;
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].done !== true) {
      count++
    }
  }
  document.getElementById('countToBeCompleted').innerHTML = count;
}
