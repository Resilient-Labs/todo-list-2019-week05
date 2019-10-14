let inputItem;
//for button
let addItemBtn = document.querySelector('#addItemBtn')

//for the remaining list at bottom of todo list
let notCompleted = document.querySelector('#remainingTasks').innerHTML = 0

let tasks;

//this adds the list as you add a task
let taskList;
//this targets the btn to clear all
let clearAll = document.querySelector('#clearAllTasks')
//this targets the btn to clear completed Tasks
let clearCompleted = document.querySelector('#clearCompletedTasks')



addItemBtn.addEventListener('click', ()=>{
  inputItem = document.querySelector('#inputItem')

  let tasks = document.querySelector('#tasks')

  let taskList = document.createElement('li')

  if (inputItem.value ===''){
    return;
  }

  taskList.appendChild(document.createTextNode(inputItem.value));

//clicking on the task list allows the CSS style to apply by drwing a line through it
  taskList.addEventListener('click', ()=>{
    event.target.classList.toggle('completed')
  })

//this updates the list inside the ol(tasks) and keep adding
  tasks.appendChild(taskList)
  inputItem.value=''
  notCompleted++

//this updates in the dom the count of the list remaining/not completed
document.querySelector('#remainingTasks').innerHTML = notCompleted
})

//on click of the clearAllTasks button this targets both ol and li and remove them
clearAll.addEventListener('click', ()=> {
  let removeTasks = document.querySelectorAll('#tasks li')
  removeTasks.forEach(el => {
    el.parentNode.removeChild(el)
    document.querySelector('#remainingTasks').innerHTML = 0
    notCompleted = 0
  })

})

clearCompleted.addEventListener('click', ()=>{
  let tasks = document.querySelectorAll('.completed')
  tasks.forEach(el =>{
    el.parentNode.removeChild(el)
  })
  document.querySelector('#remainingTasks').innerHTML =
  document.querySelectorAll('#tasks li').length
  notCompleted=document.querySelectorAll('#tasks li').length
})
