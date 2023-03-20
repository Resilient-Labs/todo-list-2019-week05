const addbutt = document.querySelector('#add')
    ///this is the button for the inputed task. will require event listener to add li to ul
const clear = document.querySelector('#clear')
    /// clear button that will require a event listener that runs a function with a refresh method
const done = document.querySelector('#done')
    /// clear striked list items button that will require an event listener that targets the class of added list items that have been affected by the strike though function
const input = document.querySelector('#innie')
    ///input for tasks
   const ul = document.querySelector('#list')                                           
    //list that requires list items to be added to as apended children
   
///create function that adds list items to list
// create function that strike through items that have been clicked, and gives them a class once they have been struck through
// create event listeners for all buttons

function listies() { ///got help from Alina and Jess
    
    const task = document.createElement('li')

    task.innerText = input.value
    if(input.value === ""){
        return alert('Invalid entry! Please enter text.')
    }
    ul.appendChild(task) //make sure that the created li shows up as whatever value is submitted in the input
    input.value = "" // to automatically clear input once submitted


    //make sure that the list item is inserted into the list
}

function ClearAll() {
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }

}
///had some help from ChatGPT to understand and correct my mistakes in the code, and to learn some new code.
function Togglies(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('taskdone');
        // event.target.style.textDecoration = event.target.classList.contains('taskdone') ? 'line-through' : 'none';
      }
}
      
///had some help from ChatGPT again
function GoneGirl() {
  const completedTasks = document.querySelectorAll('.taskdone');
  
  completedTasks.forEach(task => {
    ul.removeChild(task);
  });
}


addbutt.addEventListener('click', listies)

clear.addEventListener('click', ClearAll)
ul.addEventListener('click', Togglies)
done.addEventListener('click', GoneGirl)

// let menu = document.getElementById('menu');
// menu.removeChild(menu.lastElementChild);
