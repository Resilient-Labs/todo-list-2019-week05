// const taskList = []
const main = document.querySelector('#main')
const tasksHTML = main.querySelector('#list-items')
const taskCount = main.querySelector('#task-count')
const completeCount = main.querySelector('#complete-count')

document.querySelector('#add-task').addEventListener('click', addListen)
prepTask()//Preadd first item
document.querySelector('#reset-button').addEventListener('click', reset)
document.querySelector('#clear-complete-button').addEventListener('click', clear)


//Adds a new prep task if there is a current staged task that has content
function addListen(){
  let currentStaged =tasksHTML.querySelector('.stage')
  let currentStagedContent = tasksHTML.querySelector('.stage .task-box')
  console.log(currentStagedContent)
  if (currentStagedContent.value.length>0){
    if (true) {
      currentStaged.classList.remove('stage')
      prepTask()
    }

  }
}

// Removes all list items and sets up new task to be added
function reset(){
  let tasks = tasksHTML.querySelectorAll('li')
  Array.from(tasks).forEach(task => task.remove())
  taskCount.innerText=0
  completeCount.innerText=0
  prepTask()
}

//Removes ALL completed items
function clear(){
  let completedTasks = Array.from(tasksHTML.querySelectorAll('.complete'))
  console.log(`found ${completedTasks.length} completed tasks`);
  if(completedTasks.length>0){
    completedTasks.forEach(task => {
      task.remove()
      taskCount.innerText = Number(taskCount.innerText) - 1
    })
    completeCount.innerText=0

    //Keep all stage content that isn't considered "complete"
    console.log(`Tasks left: ${Number(taskCount.innerText)}`);
    if(Number(taskCount.innerText)===0 || tasksHTML.querySelector('.stage')===null){
      prepTask()
    }
  }
}

//Sets up a new task item in dom

function prepTask() {
  let editButton = document.createElement('button')
  editButton.classList.add('hover', 'edit', 'main-action')
  editButton.addEventListener('click', editTask)
  editButton.innerText = "EDIT"

  let textbox = document.createElement('input')
  textbox.setAttribute( 'type', 'text')
  textbox.classList.add('task-box')
  textbox.setAttribute('placeholder', 'Add a new ToDo...')
  textbox.setAttribute('size', '30?')
  textbox.setAttribute('max-length', '30')
  textbox.addEventListener('keyup', textBoxCheck)
  textbox.addEventListener('click', completeTask)
  textbox.addEventListener('blur', removeFocus)

  let li = document.createElement('li')
  li.classList.add('task', 'stage', 'flex-container', 'task-item', 'flex-xy-center')

  //adding to the DOM
  li.appendChild(textbox)
  li.appendChild(editButton)
  tasksHTML.appendChild(li)
  taskCount.innerText = Number(taskCount.innerText)+1

  textbox.focus()
}

//RESEARCHED FEATURE - Allows Task editing for changes to any of the submitted tasks
function editTask(click){
  let textbox =click.currentTarget.previousElementSibling
  textbox.readOnly = !textbox.readOnly
  console.log('textbox')

  textbox.focus()
}

//RESEARCHED FEATURE - Helps to signify that textbox is done editing
function textBoxCheck(event){
  console.log(event.key)
  switch (event.key){
    case 'Enter':
    console.log('enter')
      event.currentTarget.blur()
      if(event.currentTarget.parentElement.classList.contains('stage')){
        console.log("make new stage");
        addListen()
      }
      break
    case 'Backspace':
      console.log('backspace')
      if(event.currentTarget.value==''){
        event.currentTarget.classList.remove('strikethrough')
        event.currentTarget.parentElement.classList.remove('complete')
      }
      break;
  }
}

//This creates the strikethrough with content (Parent Class)
function completeTask(event) {
  if(event.currentTarget.value!==''&& event.currentTarget.readOnly) {
    event.currentTarget.classList.toggle('strikethrough')
    event.currentTarget.parentElement.classList.toggle('complete')
    if (event.currentTarget.parentElement.classList.contains('complete')) {
      completeCount.innerText = Number(completeCount.innerText)+1
    } else {
      completeCount.innerText = Number(completeCount.innerText)-1
    }
  }
  //If the list item is empty this will help  focus on "item" to enter task
  else if (event.currentTarget.value==''&& event.currentTarget.readOnly) {
    event.currentTarget.readOnly = false
    event.currentTarget.focus()
  }
}

//Extenstion of blur effects on the tasks being written - researched
function removeFocus(event) {
  event.currentTarget.blur
  event.currentTarget.readOnly = true
}
