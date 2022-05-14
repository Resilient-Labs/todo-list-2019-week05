
const todoInput = document.querySelector ('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todoList');
const clearList = document.querySelector('.clearList');
const clearCompleted = document.querySelector('.clearCompleted');
const total = document.querySelector('.total');


todoButton.addEventListener('click', addToDo);

function addToDo(event){
  event.preventDefault(); 

  if (todoInput.value === "") {
    return
    
  } 

  else {
    const li = document.createElement('li')  
    li.innerText = todoInput.value; 
    todoList.appendChild(li)
    li.addEventListener('click', crossOut)

    todoInput.value = ""

    totalTask() 
  }
   
  // console.log(li) (wasnt working duh didnt link todo.js ya dummy :P)
}

// need a functuon that toggles of cross out 
  
  
  
  function crossOut(event){
    event.target.classList.toggle("strikeThrough") 
    totalTask() 
  }  

// need a function for counting my list 
  function totalTask(){ 
    var counting = 0 
    document.querySelectorAll("li").forEach((li) => counting += 1 )
    document.querySelectorAll('.strikeThrough').forEach((li) => counting -= 1 ) 
    total.innerText = counting + "Tasks Left" 
  }

// need function of clear the todoList
  clearList.addEventListener('click', deleteAll)
  function deleteAll(){
    document.querySelectorAll("li").forEach((li) => li.remove())
    totalTask() 
  }

  // forEach((element) => { /* ... */ }) NOTE REFREENCE

  

// need a function of clear completeed
  clearCompleted.addEventListener('click', deleteCompleted)
  function deleteCompleted(){
    document.querySelectorAll(".strikeThrough").forEach((li) => li.remove())
  }