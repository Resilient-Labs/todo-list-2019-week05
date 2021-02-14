//declare variables from the DOM
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelector('.input')
const clear = document.querySelector('.clear')
const clearCompleted = document.querySelector('.clearCompleted')
const countElement = document.querySelector('.countElement')
let count = 0

// initialize items to complete in the document
countElement.innerText = count

// create the function a function that adds an li to the ul
function createTodoItem(e){
  e.preventDefault()
  if (input.value === ''){
    return alert('please add items to your list')
  }
  const li = document.createElement('li')
  li.className = 'listItem'
  // li.innerText = input.value
  li.innerHTML = '<i class= "fas fa-times"></i>'
  li.innerText = input.value
  // const a = document.createElement('a')
  // a.className = 'x'


  // li.appendChild(a)
  list.appendChild(li)
  input.value = ''
  count++
  countElement.innerText = count

}

// cross out a single item
function crossOutItem(e){
  //e.target represents whatever you're clicking on
  if (e.target.classList.contains('listItem')){
    e.target.className = 'done'
    if(count > 0) {
      count -= 1
      countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    countElement.innerText = count
  }
}

// clear all items
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}

// remove a single item
function removeItem(e){
  if (e.target.tagName === 'i'){
    list.removeChild(e.target.parentNode)
    count--
    countElement.innerText = count
  }


  countElement.innerText = count
}

// remove all completed items (they all have the class done)
function removeCompletedItems(){
  const completedItem = document.querySelectorAll('.done')
  completedItem.forEach((comp) => {
    list.removeChild(comp)
  })
}

// add event listeners
list.addEventListener('click', removeItem)
clear.addEventListener('click', clearAll)
button.addEventListener('click', createTodoItem)
list.addEventListener('click', crossOutItem)
clearCompleted.addEventListener('click', removeCompletedItems)

//tell browser to not refresh
//conditional if input has nothing in it, then return / alert a message
//create li
// give li a class
// assign li's inner text the value of the input
// create a
// give a a class
//asign a' inner text the value of an icon

//apend a to li
//apend li to ul
//tell input's value to go back to being empty everytime a new item is added to the list
