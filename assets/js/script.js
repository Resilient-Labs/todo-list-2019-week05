// add an event listener to the add button to run a function to add list items to a list
// add an event listener to the clear all button to run a function to clear all items
// add an event listener to the clear completed button to run a function to clear completed list items

document.querySelector('#add').addEventListener('click', addToList)
document.querySelector('#clearAll').addEventListener('click', clearAllItems)
document.querySelector('#clearCompleted').addEventListener('click', clearCompleted)


//create a function that appends the value of the input to a list in the DOM. This function should store the value of the input in a variable, create a list item w/ a checkbox and show it in the DOM. if input is empty, prompt user to enter a task.

function addToList(){

    let task = document.querySelector('#task').value
    let li= document.createElement('li')

    if (task === '' || task === " ") {
        document.querySelector('h2').innerText = 'Enter a task!'
    } else {
        document.querySelector('h2').innerText = ''
        //create a list item and append it to the empty ul 
        document.querySelector('ul').appendChild(li)

        // Clear the input
        document.querySelector('#task').value = ""

        li.innerHTML =`<input type = 'checkbox' class =''><label class=''>${task}</label`
    }

}

//Add an event listener on the ul to invoke a function to strikethrough the task once completed
document.querySelector('ul').addEventListener('click', strikethrough)



//Jose helped me debug this block of code
function strikethrough(click) {
    let checkbox = click.target;

    // Ensure the clicked element is an input of type checkbox
    if (checkbox.tagName === 'INPUT' && checkbox.type === 'checkbox') {
        let li = checkbox.parentElement;

        // Toggle the strike class based on the checkbox's checked status
        if (checkbox.checked) {
            li.classList.add('strike');
        } else {
            li.classList.remove('strike');
        }
    }
}


//this function should clear the items that have already been completed by selecting all list elements and parsing through each one to see if it contains the class "strike". If so, remove it.

function clearCompleted(){

    let tasks = document.querySelectorAll('li')
    tasks.forEach((task) => {
        if (task.classList.contains('strike')){
            task.remove()
        }
    })
}


// create a function that clears all the items in the list by reloading the browser

function clearAllItems(){
    location.reload()
}

