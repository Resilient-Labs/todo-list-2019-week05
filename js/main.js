// User interface elements - input and button: Ask the documant for the input and bottoma nd put into vaariable
const input = document.getElementById('input')
console.log('input', input)
const button = document.getElementById('topButton')
console.log('this is the top button', button)
// Link the list to the button and the input
const toDoList = document.getElementById('list')
console.log('I go the list', toDoList)

// How to make it when you click the button it will do something
function addButtonHandler() {
    console.log('hey this botton was clicked')
    console.log('extra')
    console.log(input.value)
    // Creating an empty li
    const li = document.createElement('li')
    // adding a class to the li
    li.classList.add('item')
    // Filled up the li with the text it came from the input.value (took whatver was in inout.value and took whatever was in input.value and put it into the li)
    li.innerText = input.value
    console.log('li', li)
    // adding the li to the page list
    toDoList.appendChild(li)
    // When the li is clicked it will run the function toDoItemClickHandler
    li.addEventListener('click', toDoItemClickHandler)
    countActiveItems()
}
topButton.addEventListener('click', addButtonHandler)

// creating a function that runs when you click on a to-do item
function toDoItemClickHandler(event) {
    // toggle item item completed task 
    event.target.classList.toggle('itemCompleted')
    console.log('hey you clicked on a to-do item', event.target)
    countActiveItems()
}

// Create a function that counts the active items
function countActiveItems() {
    // Pseudo code (start)
    // get all the li
    // for each li (need to create a loop that goes through )
        // if li does not have the item completed class
        // then add one to active items count
    // Return active items count 
    // Pseudo Code (end)
    // added const to document selector because need to put the list of items to the variable so can use it later. If not then will not be able to use it later.
    const items = document.querySelectorAll('.item')
    console.log('all items', items)
    let activeCount = 0
    // create a loop
    for(let i = 0; i < items.length; i ++ ){
        console.log(items[i])
        const li = items[i]
        if (li.classList.contains('itemCompleted') === false) {
            ++activeCount
        }
    }
    const activeCountSpan = document.getElementById('activeCount')
    console.log('this is the top activeCountSpan', activeCount)
    activeCountSpan.innerText = activeCount

}
// create a button in html
// create a function to handle the button click
function clearButtonHandler(){
    // function will do the following:
    // in order to clear that ul you need to get the ul from the document -already have it in todolist on line 7
    // take the variable on line 7 and put empty string into the .innerhtml property into the todolist
        toDoList.innerHTML = ' '
        countActiveItems()
}
 // attach that function to the button with an add event listener (line 25)
const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click', clearButtonHandler)

// Try to get the console log to get to ƒclear completed button
document.getElementById('clearCompleted').addEventListener('click', clearCompletedHandler)

function clearCompletedHandler() {
    let clearCompleted = document.querySelectorAll('.itemCompleted')
    clearCompleted.forEach(e => e.classList.add('itemCleared')) 
}
// function clearCompletedHandler() {
//     console.log('jello')
    // identify all the items that are completed on the to-do-list
    // const items = document.querySelectorAll('.item')
    // for(let i = 0; i < items.length; i ++ ){
    //     console.log(items[i])
    //     const li = items[i]
        // the computer is checking if the li does have the class of the item completed
        // let isCompleted = li.classList.contains('itemCompleted') 
        // if (isCompleted) {
                // delete those items and make sure the physical to-do list has those physical items
//     console.log(li)
//         }
//     }
// }
// create and eveent listener to fire clear completed handler
// finish the if statement