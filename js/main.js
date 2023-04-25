// got help from Jess, mentor JT, and Byhanka on this!

// start by grabbing things in the DOM
const form = document.querySelector('#addToDoForm')
const userInputForToDos = document.querySelector('#toDoInputs')
const addBtn = document.querySelector('#addToDoButton')
const clearAllBtn = document.querySelector('#clearEntireList')
const clearCompletedBtn = document.querySelector('#clearCompleted')
const ul = document.querySelector('#list')
const span = document.querySelector('span')
const itemCnt = document.querySelector('#itemCount')


// make a function to create lis
function createLi() {
    if (userInputForToDos.value === '') {
        return alert('Please enter a to do!');
    }
    const listItem = document.createElement('li');
    listItem.innerText = userInputForToDos.value;
    list.appendChild(listItem);
    listItem.addEventListener('click', crossOut)
    userInputForToDos.value = ''
    updateTaskCount()
}

addBtn.addEventListener('click', createLi)

// make that counter increase / decrease as things get added and removed
// add counter for amount of items on the list

function updateTaskCount() {
    const liElems = document.querySelectorAll('li')
    // console.log(`liCounts = ${liElems.length}`)
    // let completedTask = ul.querySelectorAll('.statusDone')
    // - completedTask.length 
    itemCnt.innerText = liElems.length
}

// clear page when star over button is clicked

function clearEntireList() {
    const listItem = document.createElement('li');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    itemCnt.innerText = 0
}

clearAllBtn.addEventListener('click', clearEntireList)

// add li element as parameter, google how to get target element on a click event, add ability to strike out completed tasks
function crossOut(event) {
    console.log(`statusDone target=${event.target}`)

    const liElems = event.target // targeting the event and putting it into a variable
    const classes = liElems.classList // make li element into a class list
    const result = classes.toggle('statusDone')

}

// R&y helped me with this clear completed task section
function clearCompletedTasks() {
    let completedTask = ul.querySelectorAll('.statusDone') // selects all UL with the class .statusDone applied from line 58
    for (let i = 0; i < completedTask.length; i++) {
        let li = completedTask[i]  // this is the lis that have the strike through applied 
        ul.removeChild(li) // this removes the lis that have strike-through styling applied
    }
    updateTaskCount() // calling the updateTaskCount function to update the number of tasks left after the completed tasks have been cleared
}

clearCompletedBtn.addEventListener('click', clearCompletedTasks)