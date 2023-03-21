//create variable for input, 2 buttons to add and clear 
let input = document.querySelector('#input')
let addButton = document.querySelector('#add')
let clearButton = document.querySelector('#clear')
let displaySec = document.querySelector('#todo') //show  list items
let clearCompButton = document.querySelector('#clearCompleted')
let displayCount = document.querySelector('#count')


function toDoList(){
  console.log(input.value) //test working input
  let task = document.createElement('li'); //create the element
  task.innerText = input.value //add the input to the new task element 
  //task.classList.add('paragraph-styling')
  displaySec.appendChild(task)
  task.addEventListener('click', ()=> task.classList.toggle('done'))
  count()
}

function clearList(){
  displaySec.innerText = ''
  count()
}

 //worked with Julia, Ludjy, Michael Kazin, and Vic for this function
function clearCompleted(){
   let doneTasks = document.querySelectorAll('.done')
   for(let i = 0; i < doneTasks.length; i++){
     doneTasks[i].remove()
   }
   count()
}

function count(){
  let totalTask = document.querySelectorAll('li').length
  let doneTasks = document.querySelectorAll('.done').length
  displayCount.innerText = totalTask - doneTasks
}
 
addButton.addEventListener('click', toDoList)
clearButton.addEventListener('click', clearList)
clearCompButton.addEventListener('click', clearCompleted)

//when the add button is clicked, run todolist function
//grab the input value which is the user generated task
//display the input on the webpage
//make a line of code that input.value = span.innertext AKA task variable.innertext(dont get got in the sauce)
//todo is a parent. node.appendchild() allows me to add a child to this section (my tasks)