const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const clearBtn = document.getElementById('clearBtn');
const clearCompleteBtn = document.getElementById('clearCompleteBtn');
const addBtn = document.getElementById('addBtn'); 
function addTodo() {
  const todoText = todoInput.value;
  
  const listItem = document.createElement('li');
  listItem.innerHTML = todoText;
  todoList.appendChild(listItem);
  listItem.addEventListener("click", toggleSelector); 
  todoInput.value = '';
   
    
}

function clearTodoList() {
  todoList.innerHTML = ''; 

}

function clearCompleted ()  { 
  let selectedItems = todoList.querySelectorAll('.selected') 
  selectedItems.forEach(listItem => {
   todoList.removeChild(listItem); 

}); }  



function toggleSelector(event) {
  event.target.classList.toggle('selected'); 
   
}

clearBtn.addEventListener('click', clearTodoList);
clearCompleteBtn.addEventListener('click', clearCompleted);
addBtn.addEventListener('click', addTodo); 
