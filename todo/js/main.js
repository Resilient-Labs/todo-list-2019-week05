
const createList = document.querySelector('#create')
const clearChecked = document.querySelector('#clearChecked')
const total = document.querySelector('#total')
const list = document.querySelector('#orderedList')
const count = document.querySelector('#count')

createList.addEventListener('click', addTaskToList)
// clearChecked.addEventListener ('click', clearCompleted)

//input value creates a li item

function addTaskToList() {
    const listInput= document.querySelector('#inputList').value
    const newListItem = document.createElement('li')
    const text = document.createTextNode(listInput)
    newListItem.addEventListener('click', lineThrough)
    newListItem.appendChild(text)
    list.appendChild(newListItem)

    totalTasks()
}


function lineThrough (e) {
    e.currentTarget.classList.toggle('lineThrough')
    console.log('text')
}

function totalTasks() {
    const totalNumber = document.querySelectorAll('ol#orderedList li')
    count.innerText = totalNumber.length
}

function clearCheckedItems () {
    let clearItems = ol.querySelectorAll('.lineThrough')
        for (i = 0; i)
}





// toggle checked items

// total items on list counted

// clear checked items