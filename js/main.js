// create a button that submits the task
//create a textinput for the list
//create an il element
//make an alert to made the user write and task
// insert the li element into the textinput
//create a button to clear all task
//make a function to assign to clear all tasks
//remember that appending li at the end because the parent goes first 
//make a counter that counts the tasks 
//two functions to rest and crossout the li and make them count by putting a lengh 
//put a inner text in each so you can see the task


document.querySelector('#subBtn').addEventListener('click', createTodos)
document.querySelector('#clearBtn').addEventListener('click', reset)
let counter = document.querySelector('.counter')
let count = 0


function createTodos() {
  const task = document.querySelector('#textInput')
  let printList = document.querySelector('#todoListOne')
  if(textInput.value === '') {

        return alert('Please write a task')
    }
    else{ const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = task.value
    li.appendChild(p)
    printList.appendChild(li)
    count++
    counter.innerText =  + count  + " tasks";

    task.value = ""
    li.addEventListener('click', crossOut)
    
  }
 }

function reset(){
let goAway = document.querySelectorAll('li');
goAway.forEach(li => li.remove());
goAway = document.querySelectorAll('li').length
  counter.innerText = + goAway + " tasks";


}


function crossOut(e){
  e.target.classList.toggle('vete')
  let taskTotal = document.querySelectorAll('li').length - document.querySelectorAll('.vete').length
  count = taskTotal
  counter.innerText = + taskTotal + " tasks"

}

