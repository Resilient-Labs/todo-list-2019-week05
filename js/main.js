const userInput = document.querySelector('#inputTask')
const submitUserInput = document.querySelector('#addTask')
const listContainer = document.querySelector('#list')
const clearAll = document.querySelector('#clearAll')
const clearCompleted = document.querySelector('#clearCompleted')

submitUserInput.addEventListener('click',addTaskToList)
userInput.addEventListener('keyup', enterKeySubmit)
listContainer.addEventListener('click', toggleClass)
clearAll.addEventListener('click', clearAllTasks)
clearCompleted.addEventListener('click', clearCompletedTasks)

function enterKeySubmit(event){
  if (event.keyCode === 13){
    addTaskToList()
  }
}
function addTaskToList(){
  if (userInput.value !== ''){
    let newTask = document.createElement('li')
    newTask.innerText = userInput.value
    listContainer.appendChild(newTask)
    remainingTasks()
    userInput.value = ''  
  }
}

function toggleClass(event) {
  event.target.classList.toggle('finished')
  remainingTasks()
}

function remainingTasks(){
  let allTasks = document.querySelectorAll('li').length
  let finishedTasks = document.querySelectorAll('.finished').length
  let remainingTasks = allTasks - finishedTasks

  document.querySelector('#remaining').innerText = remainingTasks
  return remainingTasks
}

function clearAllTasks(){
  let allTasks = document.querySelectorAll('li')
  
  allTasks.forEach(element => element.remove())

  remainingTasks()
}


function clearCompletedTasks(){
  let finishedTasks = document.querySelectorAll('.finished')
  
  finishedTasks.forEach(element => element.remove())

  remainingTasks()
}



















/* 
  forEach is a higher order method (takes in a whole function as an argument). forEach is looping through the node list elements (like an array) and the argument 'element' represents each iteration of the loop (similar to what 'i' does in a for loop)

  These two functions do the exact same thing:

  allTasks.forEach(element => element.remove())

    finishedTasks.forEach(function(element){
    element.remove()
  })

*/