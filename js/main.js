const addToList = document.querySelector ('#addToList')
const theBoton = document.querySelector('#submitItem')
const laLista = document.querySelector('#laLista')
// const body = document.querySelector('body')

 
//create a function to stop user from submitting empty task
function toDoList (){
  if(addToList.value === '') {
    alert ('Add a task to your to do list, please!')
  }else {
    const li = document.createElement('li')
    li.innerText = addToList.value
    laLista.appendChild(li)
    count++
    addToList.value = ""
    countTask.innerText = + count + ' task';
  }
 
}
// smurf to submit entry with button
theBoton.addEventListener('click', toDoList)

// create an event to clear the done tasks on added to do list.
document.querySelector('#clearList').addEventListener('click', clearList)

function clearList(){
  let goAway = document.querySelectorAll('li')
  goAway.forEach(li => li.remove());
  goAway = document.querySelectorAll('li').length
  countTask.innerText = + goAway + ' task';

}

//create a function to put the a line through each one of the done taks
laLista.addEventListener('dblclick', crossLine)

function crossLine(e){
  e.target.classList.toggle('crossIt')
  let scratch = document.querySelectorAll('li').length - document.querySelectorAll('.crossIt').length
  count = scratch
  countTask.innerText = + scratch +  ' task'
  
}

//add a count to the list. 

let countTask = document.querySelector('.taskCount')
let count = 0