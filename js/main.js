//created variables to target the input box and ul task list.

const taskItem = document.getElementById('task')
const taskList = document.getElementById('taskList')

//Event listener to add task on click
document.querySelector('#addTask').addEventListener('click', addMyTask)

// Event listener to add task on Enter key press
taskItem.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        addMyTask();
    }
});



function addMyTask() {
    // I want to make it so when the user types in the input and presses the add button it adds the input value to the list but only if user inputs a value other than blank space
    if (taskItem.value === '') {
        document.getElementById('placeToCheck').innerText = 'You need to enter a task!'

        //if user enters an iput it should add that input as a list item to the ul. 
    } else {
      
        document.getElementById('placeToCheck').innerText = ' '

        //Figure out how to do this off MDN: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

        let li = document.createElement('li')

        //I want to add the list item with an input into the innerHTML, I also want to add a class to use later to clear the inputs
        let addThatJawn = '<input type = "checkbox" class = "delete">' + taskItem.value
        li.innerHTML = addThatJawn

        //Got this idea from FreeCodeCamp: 
        //https://forum.freecodecamp.org/t/adding-a-string-item-to-an-appendchild-li-element/314070
        
        taskList.appendChild(li)
       
    }
    // I want the input to clear after an input has been sent in. That way the user starts with a fresh input box. I got this code idea from: https://www.tutorialspoint.com/how-to-clear-the-form-after-submitting-in-javascript-without-using-reset

    taskItem.value = ''

}



//I want to make it so when the user clicks on the checkbox it clear the list item.

//Anais helped me with this code!! 
//Erica helped me understand this code!!
taskList.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete')) {
        removeTask(e.target)
    }
})


//When the event listener is ran it should remove the list item that contains the checkbox that shows being checked as true

function removeTask(completed){
    completed.parentElement.remove()
    console.log(completed)
}


