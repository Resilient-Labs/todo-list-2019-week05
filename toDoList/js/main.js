// goal is to be able to add tasks to the do to list 
//  Create a todo list that is able to:
//  - Add new tasks
//  - List added tasks
// - strike thru completed task 
//  - Remove a task
// - Clear  list 
// - Clear completed 
// show left to do 

// #toDoList
// #submit 
// #clear 
// #complete
// #leftToDo
// #inputBox
// ul
// li

// Main variables: 

document.querySelector('#submit').addEventListener('click', addToList)
document.querySelector('#clear').addEventListener('click', clearli)
document.querySelector('ul').addEventListener('click', strikeThru)

document.querySelector('#complete').addEventListener('click', clearComplete)

// add to the todo list & create li

function addToList(e){
  e.preventDefault()
  let listItem = document.querySelector('#inputBox').value
  let li = document.createElement('li')
  let ul = document.querySelector('ul')
  if (listItem === ''){
    return
  }
  
  ul.appendChild(li).innerText = listItem 
  document.querySelector('#inputBox').value=""  
  countTasks()

  // appendChild adds a node to the end of the list of children of a specifieid parent node

}

// strike thru todo list using CSS class

function strikeThru(event){
  event.target.classList.toggle('strikeOut')
  document.querySelector('#leftToDo').innerText = numOfTask

  countTasks()

  //parameter (e) is automatically passed from javascript to the function when you add an event listener. It represents the element that was affected

}

// clear all li 
function clearli(){
  document.querySelectorAll('li').forEach(li =>{
    li.remove()
    document.querySelector('#leftToDo').innerText = numOfTask
  })

  countTasks()


  // click #clear and it will remove all li elements
}

function clearComplete(){
  document.querySelectorAll('.strikeOut').forEach(li =>{
    li.remove()
    document.querySelector('#leftToDo').innerText = numOfTask
  })
  countTasks()

}

// Thank you Kelly Cche 
function countTasks(){
  numOfTask = 0
  document.querySelectorAll('li').forEach(li => numOfTask++)
  document.querySelectorAll('.strikeOut').forEach(element => numOfTask --)
  document.querySelector('span').innerText = numOfTask
}
