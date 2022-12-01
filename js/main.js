3
// assign variables to elements in HTML

/*    
      create something to listen to the click
      create something to get user input
      create an li
      attach input(li) to ul ToDo list 
      make sure to have an empty input each time
      make sure to not have ul items dissapear 
      make something to clear all:

        make title/class + function remove item
        target CSS to make changes to cross off


*/

const input = document.getElementById('input')
const addTask = document.getElementById('addTask')
const toDoList = document.getElementById('toDoList')


function createToDoList(e){
  e.preventDefault()
  let text = input.value  
  if(text === ''){
    return
  }
  const li = document.createElement('li')
  li.className = 'notCrossed'
  toDoList.appendChild(li)
  li.innerText = text
  input.value = ''
  let count = document.querySelectorAll('.notCrossed').length
  document.querySelector('#message').innerText = count
}

function crossOut(e){
  if(e.target.classList.contains('notCrossed')){ 
    e.target.style.textDecoration = 'line-through'
    e.target.style.color = 'gray' 
    e.target.className= 'crossed' 
  }else if(e.target.classList.contains('crossed')){
    e.target.className = 'notCrossed'
    e.target.style.color = 'black'
    e.target.style.textDecoration = 'none'
  }

  let notCrossedCount= document.querySelectorAll('.notCrossed').length
  // putting the value of the list items not crossed into our messages
  console.log(notCrossedCount)
  document.querySelector('#message').innerText = notCrossedCount
  // create variable to target the li's not crossed and get it's length
}

function removeList(){
  while(toDoList.firstChild){
    toDoList.removeChild(toDoList.firstChild)
  }
}


function clearComplete(){
Array.from(toDoList.childNodes).forEach(item => {
  if(item.classList.contains('crossed')){
    item.remove()  
  }
})


}

document.querySelector('#removeAll').addEventListener('click', removeList)
document.querySelector('#removeListItem').addEventListener('click', clearComplete )

addTask.addEventListener('click', createToDoList)
toDoList.addEventListener('click', crossOut)

// const input = document.getElementById('input')
// const addTask = document.getElementById('addTask')
// const toDoList = document.getElementById('toDoList')


// function createToDoList(e){
//   e.preventDefault()
//   let text = input.value
  
//   if(text === ''){
//     alert('please submit input value')
//     return
//   }
//   const li = document.createElement('li')
//   li.innerText = text
//   toDoList.appendChild(li)

// }

// addTask.addEventListener('click', createToDoList)
