const addButton = document.getElementById('addButton')
const deleteButton = document.getElementById('deleteButton')
const crossButton = document.getElementById('crossButton')
const tasks = document.querySelectorAll('.task')
let taskAssigned = document.getElementById('displayTask')
let taskCompleted = document.getElementById('displayCompleted')

let currentActive = 1
let currentCompleted = 1

function addTask(){
  let userTask = document.getElementById('textTask').value
  tasks.forEach((task, idx) => {
  if(idx < currentActive) {
    task.classList.remove('disabled')
    taskAssigned.innerHTML = 'Tasks:' + " " + (currentActive - 1)
  }
})
}

addButton.addEventListener('click', () => {
  currentActive++
  console.log(currentActive)
  console.log(tasks.length)
  if(currentActive > tasks.length){
    currentActive = tasks.length
  }
  addTask()
})
function deleteTask(){
  tasks.forEach((task, idx) => {
  if(idx === currentActive) {
    task.classList.add('disabled')
    task.value = " "
    console.log(task.value)}
  })
}
     

deleteButton.addEventListener('click', () => {
  currentActive--
  if(currentActive > tasks.length){
    currentActive = tasks.length
  }
  deleteTask()
})

    if(currentActive === 1) {
      deleteButton.disabled = false
    }else if (currentActive === tasks.length){
      addButton.disabled = true
      deleteButton.disabled = false
    }else{
      addButton.disabled = false
    deleteButton.disabled = false
    }
crossButton.addEventListener('click', () => {
  currentActive--
  if (currentActive > tasks.length){
    currentActive = tasks.length
  }
  completeTask()
})

function completeTask(){
  currentCompleted++
  currentActive--
tasks.forEach((task, idx) => {
  if(idx > currentActive) {
    task.classList.add('completed')
    taskCompleted.innerHTML = 'Completed' + ': ' + (currentCompleted - 1)
  }
  })
}
