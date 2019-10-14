// user inputs their to-do task
// user click button to enter task enter list
//list item should then populate into the list
// user can click on items to complete them
// as items are completed they are striked out and font color is turned grey
//user can click on button to clear their entire list
//user can click on button to clear 'completed tasks' list

document.getElementById('addItemButton').addEventListener('click', addItem)
document.getElementById('populateList').addEventListener('click', crossItem)
document.getElementById('clearCompleteTasks').addEventListener('click', clearComplete)
document.getElementById('clearAllTasks').addEventListener('click', clearAll)

function addItem(e){
  let input = document.getElementById("inputItem");
  const ul = document.getElementById('populateList')
  if (input.value === '')return alert ('Please input a task item')
  const li = document.createElement("li")
  li.className = 'listItem'
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value = ''
  e.preventDefault()
}

function crossItem(e){
  if (e.target.classList.contains('listItem')){
    e.target.style.textDecoration = "line-through"
    e.target.style.color="grey"
    li.classname = 'completedItems'
  }
}

function clearComplete(element) {
  let completedItems = document.getElementsByClassName('completedItems')
  while (completedItems.length > 0){
    completedItems[0].parentNode.removeChild(completedItems[0]);
    console.log(completedItems)
  }
}

function clearAll(e) {
  let ul = document.getElementById('populateList')
    while(ul.firstChild){
      ul.removeChild(ul.firstChild);
    }
}
