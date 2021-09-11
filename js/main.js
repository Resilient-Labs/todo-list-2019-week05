document.getElementById('addItem').addEventListener('click', function() {addToList()});
document.getElementById('clearAll').addEventListener('click', function() {clearAll()});
document.getElementById('clearComplete').addEventListener('click', function() {clearComplete()});

let li = document.querySelectorAll('li');
var counter = 0;

function displayCount(){
	document.getElementById('todoCount').innerHTML = 'You have ' + counter + ' Todos left'
}

function addToList() {
  let todoList = document.getElementById("todoList");
  var newItem = document.createElement("li");
  var itemText = document.getElementById("task");
  
  newItem.appendChild(document.createTextNode(itemText.value));
  todoList.appendChild(newItem);
  li = document.querySelectorAll('li');
  markComplete();
  itemText.value = '';
  counter ++;
  displayCount();
}

function markComplete() {
  li.forEach(function(e) {
    e.addEventListener('click', function() {
      this.className = "completed"
    })
  })
}

markComplete();


function clearComplete() {
  let todoList = document.getElementsByClassName("completed");
  while (todoList.length > 0) {
    todoList[0].parentNode.removeChild(todoList[0]);
	counter --;
  }
  li = document.querySelectorAll('li');
  markComplete();
  displayCount();
}

function clearAll() {
  li.forEach(function(e) {
    e.parentNode.removeChild(e)
  })
  counter = 0;
  displayCount();
}