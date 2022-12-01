
let itemInput = document.querySelector('#input')
document.querySelector('.addToList').addEventListener('click', addToList)

function addToList(e){
  e.preventDefault()
  if (itemInput.value !== ''){
    let newLi = document.createElement('li')
    newLi.innerText = itemInput.value 
    document.querySelector('ul').appendChild(newLi)
    itemInput.value = ''
    
  }
  document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', crossOut)
  })
  countTasks()
}

function clearList(){
  document.querySelectorAll('li').forEach(li => {
    li.remove()
  })
  
  countTasks()
}

document.querySelector('.clearList').addEventListener('click', clearList)

function crossOut(e){
  e.target.classList.toggle('strike')
  countTasks()
}


function clearCompleted(){
  document.querySelectorAll('.strike').forEach(li => li.remove())

}

document.querySelector('.clearCompleted').addEventListener('click', clearCompleted)


function countTasks(){
  tasks = 0
  document.querySelectorAll('li').forEach(li => tasks++)
  document.querySelectorAll('.strike').forEach(element => tasks--)
  document.querySelector('.amount').innerText = `You have ${tasks} sneakers left to collect.`
}




//Press "add to list" to make that value appear on a list
//When pressing on a item in the list toggle a line through the text
//Make a text appear stating how much items are in the to do list
//When "clear list" is pressed, erase everything on the list
//When "Clear completed" is pressed, erase everything that has a line through it

