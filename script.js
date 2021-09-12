//testing script link
//console.log(4+4)


//STEPS:
//enter task into input field
//press 'add' button 
//task will be added to list with checkbox
//select checkbox and click 'clear completed' button to remove that item from list || press clear whole list to remove all list items 



//DOM HANDLERS
let input = document.getElementById('newTask')
let addTaskBtn = document.getElementById('addNewTask')
let taskList = document.getElementById('taskItems') // ul
let tasksRemaining = document.getElementById('tasksRemaining')
let wholeClearBtn = document.getElementById('clearWholeList')
let completedClearBtn = document.getElementById('clearSingleTask')
// let finishedList = document.getElementById('finishedItems')
let totalTasks = 0


//FUNCTIONS

//functions needed:
// - add task function 

function addNewTask (){
    let taskItem = document.createElement('li')
    taskItem.addEventListener('click', completedTask)
    taskItem.innerText = input.value
    console.log(taskItem.value)
    taskList.appendChild(taskItem)
    console.log(taskItem)
    input.value = ""
    totalTasks += 1
    tasksRemaining.innerText = "Total tasks remaining: " + totalTasks
    
    // - checkbox/strikethrough
    // let check = document.createElement('a')
    // check.innerHTML = '<i class="fal fa-square"></i>'
    // taskItem.appendChild(check)
    

}

// - clear whole list
function clearAllItems(){
    taskList.innerHTML = ""
    
}

// - clear completed items

function clearCompletedItems(){
    // let finishedItem = document.createElement('li')
    // finishedList.appendChild(finishedItem)
    taskList.querySelectorAll('li').forEach(function (element){
        if(element.classList.contains('completed')){
            element.remove()
            // finishedList.innerHTML = element
        }
    }
    )

    // remove from count
    // let total = totalTasks - (taskItem.length)
}



function completedTask(event){
    event.target.classList.toggle('completed')
}



//EVENT LISTENERS 

addTaskBtn.addEventListener('click', addNewTask)
wholeClearBtn.addEventListener('click', clearAllItems)
completedClearBtn.addEventListener('click', clearCompletedItems)