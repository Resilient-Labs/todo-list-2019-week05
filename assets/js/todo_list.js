
//these variables are used to update Total Count for tasks to do 
let displayCount = document.querySelector('#count_tasks')
let countTotal = 0; 

document.querySelector('#add_task').addEventListener('click', toDoList)
document.querySelector('#clear_tasks').addEventListener('click', clearAllTasks)
document.querySelector('#completed-tasks').addEventListener('click', clearCompletedTasks)

/* An event listener that create a new todo list item. */
function toDoList(){

  // takes the user input and creates a li element with that users 
  let task = document.createElement('li'); //create <li> element 
  task.innerText = document.querySelector('#input_task').value //add the input to the new task element 

  //add the newly created li element to the display
  document.querySelector('#todo').appendChild(task)//use method appendChild and adds a node

  countTotal += 1;
  displayCount.innerText= countTotal; 
  console.log(countTotal)

  // Add evnet listener to the li element when user select it as done.
  task.addEventListener('click', function (event){
    console.log(event);
    console.log(event.target);
    event.target.classList.add('doneTask')
    countTotal -= 1;
    displayCount.innerText= countTotal; 
    console.log(countTotal)
  })
}

//Will remove all li elements that have been completed.
function clearCompletedTasks(){

   let allDoneTasks = document.querySelectorAll('.doneTask')
   for(let i = 0; i < allDoneTasks.length; i++){
     allDoneTasks[i].remove()
   }
} 

//Will remove all li elements in todo list and update the task count total
function clearAllTasks(){

  document.querySelector('ul').remove()
  countTotal = 0;
  displayCount.innerText= countTotal; 
  console.log(countTotal)

} 