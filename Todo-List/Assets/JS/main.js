document.querySelector('#add').addEventListener('click', addItem)
document.querySelector('#remove').addEventListener('click', removeItem)
document.querySelector('ol').addEventListener('click', completedTask)
document.querySelector('#clearComp').addEventListener('click', clearComp)
document.querySelector('#clearAll').addEventListener('click', clearAll)

const userInput = document.querySelector('#userTask')
const warning = document.querySelector('.warning')
const listItems = document.querySelector('#tasks')
const taskCount = document.querySelector('#counter')

function addItem() {
    if(userInput.value === '') {
        warning.innerText = 'Please Complete Field'
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${userInput.value}`))
        listItems.appendChild(li)
        warning.innerText = ''
    }
    userInput.value = ''
    const liItems = document.querySelectorAll('li')
    taskCount.innerText = `Tasks to Complete: ${liItems.length}`
}

function removeItem() {
    const removeTask = document.getElementById("tasks");
    removeTask.removeChild(removeTask.lastElementChild);
    const liItems = document.querySelectorAll('li')
    taskCount.innerText = `Tasks to Complete: ${liItems.length}`
}

function completedTask(event) {
    //Byhanka helped me understand how to target specific li's
    const liItems = event.target
    const classes = liItems.classList
    const result = classes.toggle('complete')
}

function clearComp() {
    //Ashley helped remind me how to target only complete li's
    let liComp = listItems.querySelectorAll('.complete')
        liComp.forEach(remove => {
            listItems.removeChild(remove)
        })
        const liItems = document.querySelectorAll('li')
        taskCount.innerText = `Tasks to Complete: ${liItems.length}`
}

function clearAll() {
    while (listItems.hasChildNodes()) {
        listItems.removeChild(listItems.firstChild)
    }
    const liItems = document.querySelectorAll('li')
    taskCount.innerText = `Tasks to Complete: ${liItems.length}`
}