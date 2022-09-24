//Make a Todo List 


document.querySelector('#addTaskToList').addEventListener('click', addTask)
let update = document.querySelector('.update')
document.querySelector('#completedTask').addEventListener('click', clearCompleted)
let countTag = document.querySelector('.count')
let count = 0

function addTask(){
  // created a variable for the input task, a user will be able to write a task
  let task = document.querySelector('#task').value
  if(task){
    const ul = document.querySelector('#taskList')
    const li = document.createElement('li')
    // putting text into the li
    li.appendChild(document.createTextNode(task))
    ul.appendChild(li)
    count++ 
    countTag.innerText = 'you have ' + count + ' tasks left'
    li.addEventListener('click', crossOut)
  } else{
    update.innerText = 'you forgot to add a task'
  }
  }

 
// create a new function that strikes through whenever the user clicks on an li 

function crossOut(e){
  e.target.classList.toggle('strike')
  let listTotal= document.querySelectorAll('li').length - document.querySelectorAll('.strike').length
  count = listTotal
  countTag.innerText = 'you have ' + listTotal + ' tasks left'

}


document.querySelector('#clearList').addEventListener('click', clearAll)
// create a function to clear all the list items 
function clearAll(){
  window.location.reload()
}

// create a function to clear all of the completed list items 
function clearCompleted(){
  document.querySelectorAll('.strike').forEach(list => {
    list.remove()
  })
}