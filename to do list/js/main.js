//to do list
const toDoInput = document.getElementById('addToDo')
const submitBtn = document.getElementById('submitBtn')
const toDoList = document.getElementById('toDoList')

toDoList.addEventListener('click', strikethrough)
submitBtn.addEventListener('click', addItem)
document.getElementById('hideCompleted').addEventListener('click', hideCompleted)
document.getElementById('clearAll').addEventListener('click', clearAll)

//collect value from input
//put input values into list
function addItem(e){
  e.preventDefault() //prevents form from refreshing
  let item = addToDo.value
  const li = document.createElement('li')
  li.innerText = item
  toDoList.appendChild(li) //adds item to end of list
  addToDo.value = '' //refreshes input
}

//clear entire list
function clearAll(){
  document.querySelectorAll('li').forEach(li => li.remove())
}

//hide completed items
function hideCompleted(){
  document.querySelectorAll('.strikethrough').forEach(li => li.remove())
}

//toggle completed items
function strikethrough (e){
    e.target.classList.toggle('strikethrough')
  }

