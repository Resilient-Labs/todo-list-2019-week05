// Simple to do list
// insert tasks into an input and them into a ul so list items can be seen and crossed off
// there will be a counter to display how many tasks are in your list 
// there will be 3 buttons, to add the task into the ul, to clear completed tasks and to reset the whole thing
// use will also be able to cross out all their tasks by clicking on  them 
// Mark Mentor and Shawn Charles helped me with the JS//

document.getElementById('addTask').addEventListener("click", addTask)
document.getElementById('clearAll').addEventListener('click', clear)
document.getElementById('clearCompleted').addEventListener('click', clearComplete)
const userTask = document.getElementById('userTask')
const taskList = document.getElementById('taskList')
const taskTotal = document.getElementById('taskTotal')

// Got the create element code from MDN



// document.getElementById('clearCompleted').addEventListener('click', )

function addTask(){
    // console.log(userTask.value)
    // console.log(taskList)
    const userLi = document.createElement("li")
    userLi.innerHTML = userTask.value
    console.log(userLi)
    taskList.appendChild(userLi)
    +taskTotal.innerText ++
    // let num = parseInt(taskTotal.innerText ++)
    // num+=1
    // taskTotal.innerText = num
    // console.log(num)
    userLi.addEventListener('click', event => complete(event))
}

function clear(){
  const tasks =document.querySelectorAll('li')
  for( let i = 0; i < tasks.length; i++){
      tasks[i].remove()
  }
  taskTotal.innerText = 0
}

function complete(event){
    console.log(event.target)
    var name = event.target.classList.value
    console.log(name)
   event.target.classList.toggle('completed')
   if (name !== 'completed'){+taskTotal.innerText -- } else{ +taskTotal.innerText ++
   }
}

function clearComplete(){
    document.querySelectorAll('.completed').forEach(task => task.remove())

}






