
const toDoInput = document.querySelector('#toDoInput')
const submitBtn = document.querySelector('#submit')
const clearAll = document.querySelector('#clearAll')
const listDisplay = document.querySelector('#toDoList')
const taskAmount = document.querySelector('#taskAmount')
const completedBtn = document.querySelector('#completeClear')
const completedTask = document.querySelectorAll('.crossOut')



function thingsToDo() {
    if (toDoInput.value === '') {
        alert('Must Add Task To Add To List')

    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${toDoInput.value}`));
        listDisplay.appendChild(li)
    }
    toDoInput.value = ''
    taskCount()
}

function clearEverything() {
    while (listDisplay.hasChildNodes()) {
        listDisplay.removeChild(listDisplay.firstChild)
    }
    taskCount()
}

function deleteCompleted() {
    const crossedOut = listDisplay.querySelectorAll('.crossOut')
    crossedOut.forEach(crossO => {
        listDisplay.removeChild(crossO)
    })
    taskCount()
}


function taskCount() {
    const liItems = document.querySelectorAll('li')
    taskAmount.innerText = liItems.length
}

function clearTaskCount() {
    while (taskAmount.hasChildNodes()) {
        taskAmount.removeChild(taskAmount.firstChild)
    }

}


function completedTasks(event) {
    const liItems = event.target
    const classes = liItems.classList
    const result = classes.toggle('crossOut')
}

listDisplay.addEventListener('click', completedTasks)
submitBtn.addEventListener('click', thingsToDo)
clearAll.addEventListener('click', clearEverything)
completedBtn.addEventListener('click', deleteCompleted)










