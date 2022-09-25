//To-Do List

//declare variables
const input = document.querySelector('#inputItem')
const listItem = document.querySelector('#listItems')

//event listeners
const toDoBtn = document.querySelector('#toDoBtn').addEventListener('click', addToDo)
listItem.addEventListener('click', completedToDo)
document.querySelector('.clearCompleted').addEventListener('click', clearCompleted)
document.querySelector('.clearAllItems').addEventListener('click', clearAll)

//add item to list 
function addToDo(e) {
    e.preventDefault()
    if(input.value === ''){
        return
    }
const li = document.createElement('li')
li.innerText = input.value
listItem.appendChild(li)
li.className = 'listItem'
input.value = ''
}

//cross out completed list items 
function completedToDo(e) {
    if(e.target.classList.contains('listItem')) {
        e.target.classList.toggle('crossOut')  
    }
}

//clear completed

function clearCompleted() {
    document.querySelectorAll('.crossOut').forEach(li => li.remove())
}

//clear all list items 

function clearAll() {
    document.querySelectorAll('li').forEach(li => li.remove())
}

