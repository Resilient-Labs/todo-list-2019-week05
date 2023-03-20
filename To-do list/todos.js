let addToDoButton = document.getElementById('addToDo')
let clearButton = document.getElementById('clear')
let clearCompletedButton = document.getElementById('clearCompleted')
let inputField = document.getElementById('inputField')
let list = document.getElementById('toDoContainer')
let whatsLeft = document.getElementById('whatsLeft')
addToDoButton.addEventListener('click', spiceGirl)


function spiceGirl(){
  let li = document.createElement('li')
  li.innerText = inputField.value
  list.appendChild(li)
  li.onclick = markCompleted
  updateNumber()
}
function updateNumber(){
  let  allTasks = document.querySelectorAll('li').length
  let  allCompletedTasks = document.querySelectorAll('.completed').length
  whatsLeft.innerHTML = allTasks - allCompletedTasks

}
function markCompleted(){
  this.classList.toggle('completed')
  updateNumber()
}
function clearCompleted(){
  //only delete li's that have completed class
  let  allCompletedTasks = document.querySelectorAll('.completed')
  for(let i = 0; i < allCompletedTasks.length; i++){
    allCompletedTasks[i].remove()
  }
  console.log(allCompletedTasks)
  updateNumber()
}

//I made a variable and called it add that creates a paragraph element inside the dom. 
//on line 9, the value inside input field it will = exactly what i put inside paragraph.
//on line 13: inside of list, we are adding a child element
clearButton.addEventListener('click', scarySpice)
clearCompletedButton.addEventListener('click', clearCompleted)

function scarySpice(){
  list.innerHTML = ""
  updateNumber()
}







