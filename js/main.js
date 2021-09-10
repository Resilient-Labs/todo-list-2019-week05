// user clicks on add task, clear completed tasks or clear all tasks
document.querySelector('#addTask').addEventListener('click', addTask)
document.querySelector('#clearCompleted').addEventListener('click', clearCompleted)
document.querySelector('#clearAll').addEventListener('click', clearAll)

// user clicks on task and it toggles it as completed or not
document.querySelector('ul').addEventListener('click', toggleCompleted)

let tasks = 0

// user inputs task
function addTask(){
    let task = document.querySelector('#inputTask').value // gets task
    if (task != ""){
        document.querySelector('ul').innerHTML += `<li>${task}</li>` // adds task to list
    } else {
        alert("Put in a task.")
        
    }
    updateTasks()
}
// marks a task as complete
function toggleCompleted(e){
    e.target.classList.toggle('completed')// adds completed class
    updateTasks()
}
// clears completed tasks
function clearCompleted(){
    document.querySelectorAll('.completed').forEach(e => e.remove())
}
// empties task list
function clearAll(){
    document.querySelector('ul').innerHTML = ""
    updateTasks()
}
// update # of tasks left to do
function updateTasks(){
    let tasks = document.querySelectorAll('li').length - document.querySelectorAll('.completed').length
    document.querySelector('#numberOfTasks').innerHTML = `${tasks} `
}