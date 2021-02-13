/* Make a checklist

//button adds another check-item with blank textinput and checkbox

//stage a task to be added and then add to list of tasks when entered or another task is set to stage

//when checked, animate strikethrough

//additems
//ul in html suggestions
//li is added
//2 buttons
//clear all /remove all li
//clear completed remove tasks that are marked completed
//total of active tasks
*/

// const taskList = []
const main = document.querySelector('#main')
const tasksHTML = main.querySelector('#list-items')
const taskCount = main.querySelector('#task-count')
const completeCount = main.querySelector('#complete-count')

document.querySelector('#add-task').addEventListener('click', addListen)
stageTask()//Preadd first item
document.querySelector('#reset-button').addEventListener('click', reset)
document.querySelector('#clear-complete-button').addEventListener('click', clear)
// document.querySelector

/*
Adds a new staged task if current staged task has content
*/
function addListen(){
  let currentStaged =tasksHTML.querySelector('.stage')
  let currentStagedContent = tasksHTML.querySelector('.stage .task')
  console.log(currentStagedContent)
  if (currentStagedContent.value.length>0){
    if (true) {
      currentStaged.classList.remove('stage')
      stageTask()
    }

  }
}
// tasksHTML.querySelector('.stage').classList.remove('stage')

// Removes all list items and sets up new task to be added
function reset(){
  let tasks = tasksHTML.querySelectorAll('li')
  Array.from(tasks).forEach(task => task.remove())
  taskCount.innerText=0
  completeCount.innerText=0
  stageTask()
}

//Removes all completed items
function clear(){
  let completedTasks = Array.from(tasksHTML.querySelectorAll('.complete'))
  console.log(`found ${completedTasks.length} completed tasks`);
  if(completedTasks.length>0){
    completedTasks.forEach(task => {
      task.remove()
      taskCount.innerText = Number(taskCount.innerText) - 1
    })
    completeCount.innerText=0

    //stage if no tasks or if there is no staged task
    console.log(`Tasks left: ${Number(taskCount.innerText)}`);
    if(Number(taskCount.innerText)===0 || tasksHTML.querySelector('.stage')===null){
      stageTask()
    }
  }
}



/*
Sets up a new task item in dom
*/
function stageTask() {


  let editButton = document.createElement('button')
  editButton.classList.add('hover', 'edit')
  editButton.addEventListener('click', editTask)
  editButton.innerText = "EDIT"


  let textbox = document.createElement('input')
  textbox.setAttribute( 'type', 'text')
  textbox.classList.add('task')
  textbox.setAttribute('placeholder', 'What should I do?')
  textbox.setAttribute('size', '30?')
  textbox.setAttribute('max-length', '30')
  textbox.addEventListener('keyup', textBoxCheck)
  textbox.addEventListener('click', completeTask)
  textbox.addEventListener('blur', removeFocus)

  let li = document.createElement('li')
  li.classList.add('task', 'stage', 'flex-container', 'task-item', 'flex-xy-center')

  //add to DOM
  li.appendChild(textbox)
  li.appendChild(editButton)
  tasksHTML.appendChild(li)
  taskCount.innerText = Number(taskCount.innerText)+1

  textbox.focus()
}

/*
Allows Task editing for corresponding task
*/
function editTask(click){
  let textbox =click.currentTarget.previousElementSibling
  textbox.readOnly = !textbox.readOnly
  console.log('textbox')

  textbox.focus()
}

/*
To signify that textbox is done editing
*/
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

    //supposedly for mac?
    case 'Delete':
      console.log('backspace')
      if(event.currentTarget.value==''){
        event.currentTarget.classList.remove('strikethrough')
        event.currentTarget.parentElement.classList.remove('complete')
      }
      break;
  }
}

/*
Styles content with strikethrough
gives parent container class complete
*/
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
  //if list item is empty, focus on item to enter task
  else if (event.currentTarget.value==''&& event.currentTarget.readOnly) {
    event.currentTarget.readOnly = false
    event.currentTarget.focus()
  }
}

/*
Fires when focus is removed
*/
function removeFocus(event) {
  event.currentTarget.blur
  event.currentTarget.readOnly = true
}

/**
Aside panel functionality
**/
document.querySelector('.info-button').addEventListener('click', toggleAside)
document.querySelector('#hide-aside').addEventListener('click', toggleAside)

function toggleAside(){       document.querySelector('aside').classList.toggle('reveal')
}
/**
Aside Panel end
*/


// /*
//   Task Constructor
//   contains type: task, (future) event, (future) note
//   content: content of task items
//   status: for task(incomplete, complete, (near future migrate/down carat/), (far future migrate/up carat/))
//   source: related html ID
// */
// function Task(type, content, status, source) {
//   this.type = type;
//   this.content = content;
//   this.status = status;
//   this.source = source;
// }
//
//

// /*fires when checkbox is clicked*/
// function checkMe(click){
//   let checkbox = click.currentTarget
//   if(checkbox.checked===false){
//     console.log("I'm not checked");
//     checkbox.parentElement.classList.remove('checked')
//     completeCount.innerText = Number(completeCount.innerText)-1
//   } else {
//     console.log("I'm checked");
//     checkbox.parentElement.classList.add('checked')
//     console.log(`completed tasks: ${completeCount.innerText}`);
//     completeCount.innerText = Number(completeCount.innerText)+1
//   }
// }

// /* Do this later
// ToDoList Constructor
// default starter List
// */
// function ToDoList(starterList = [], listName){
//   this.taskList = [];
//   this.taskCounter -> live counter for created tasks, includes tasks that were deleted
// }
