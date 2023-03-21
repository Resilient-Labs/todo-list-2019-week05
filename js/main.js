const enter = document.querySelector('.btnOne');
const listItem = document.querySelector('#list');
const clearAll = document.querySelector('.btnTwo');
const clearComplete = document.querySelector('.btnThree'); 
const form = document.querySelector('#toDoForm')
const liCount = document.querySelector('#count')

function enterLi (e) { // create a function that allows user to ender list items 
    e.preventDefault() // Randy gave advice on my list disapearing, said this keeps the page from refreshing
    let item = document.querySelector('#toDo').value// 
    if (item === ' '){
        return 
    }
    let list = document.createElement('li') // create list element within js
    let text = document.createTextNode(item) // put into HTML text
    list.appendChild(text) // putting the user text into the list
    listItem.appendChild(list) // putting the list created by the user into the listeItem(UL)
    listItem.addEventListener('click', crossOut )
    if (item != ' '){
        form.reset()
    }
    updateTaskCount()
}
enter.addEventListener('click', enterLi) // event listener to add items to the list 

function clearBtn(){ // create button to clear all items on the list. 

    form.reset() // reset the form so that lines are cleared
    listItem.innerText = '' // to make sure the html also clears the list
    liCount.innerText = '' // to make the li count to 0
}
clearAll.addEventListener('click', clearBtn)


function updateTaskCount(){ // JT walked Mena and I on how to call the array to count the list items
    const liElems = document.querySelectorAll('li')
    console.log(`licounts = ${liElems.length}`)
    liCount.innerText = liElems.length
}
// add li element as parameter, target element on a click event, add ability to strike out completed task
function crossOut(event){
    //toggle status done class on LI elements
    console.log(`crossout target=${event.target}`) // checking that the event is working 
    const liElem = event.target // targeing the event and putting it into a variable
    const classes = liElem.classList; // making my li element into a class list with the varible classes
    const result = classes.toggle('crossOut') // creating class to target css and cross out the list 
    console.log(`li classes = ${result}`)
}

// create a button to clear all completed task and remove it from the list count
function clearCompleteBtn(){
    let completeTask = listItem.querySelectorAll('.crossOut') // grabbing all li's that have been crossed out 
    completeTask.forEach(task => { // creating a loop for each individual task 
        listItem.removeChild(task) // removing each task that has been crossed out
    })
    updateTaskCount() // calling on the count function to update the count for finsihed tasks
}
clearComplete.addEventListener('click', clearCompleteBtn)