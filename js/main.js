const list = document.querySelector('#list')
const enterActivity = document.querySelector('#activity')
const add = document.querySelector('#add')
const clearAll = document.querySelector('#clearAll')
const removeCompleted = document.querySelector('#removeCompleted')
let counter = 0;


function addInput() {
  const listItem = document.createElement('li')
  listItem.innerText = enterActivity.value
  counter++
  list.appendChild(listItem)
  countHowManyListItems(counter)
  listItem.addEventListener('click', crossOut)
  function crossOut() {
    counter--
    countHowManyListItems(counter)
    listItem.className = 'completed'
    listItem.style.setProperty('text-decoration', 'line-through')
  }
  enterActivity.value = ''
}
add.addEventListener('click', addInput)

function clearAllItems(){
list.innerHTML = ''
counter = 0;
countHowManyListItems(counter)
}
clearAll.addEventListener('click', clearAllItems)

function removeCompletedOnly(){
  const listItems = document.querySelectorAll('li')
  for (let i = 0; i < listItems.length; i++){
    if (listItems[i].className === 'completed') {
      list.removeChild(listItems[i]);
    }
  }
}
removeCompleted.addEventListener('click', removeCompletedOnly)

function countHowManyListItems(counter){
  if (counter > 0){
    document.querySelector('#numberOfItems').innerText = 'You Have ' + counter + ' Uncompleted Tasks!'
  } else {
    document.querySelector('#numberOfItems').innerText = 'You Have ' + counter + ' Uncompleted Tasks!'
  }
}
function enter(e) {
  if(e.key === 'Enter'){
    addInput()
    e.preventDefault()
  }
}
enterActivity.addEventListener('keydown', enter)
