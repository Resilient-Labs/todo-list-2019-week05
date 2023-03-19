const itemsInput = document.querySelector('#items')
const addBtn = document.querySelector('#add')
const showItems = document.querySelector('#list')
const btnClearAll = document.querySelector('#clearAll')
const btnRemove = document.querySelector('#itemRemove')
let taskCountP = document.querySelector('.totalCount')
let count = 0

function makeAListItem(){
  if(itemsInput.value === '') {
    return alert('Do you not know what you need to do?')
  }
  const listItem = document.createElement('li')
  listItem.innerText = itemsInput.value
 
  showItems.appendChild(listItem)
  itemsInput.value = ""

  count++
 if(count === 1) {
  taskCountP.innerText = `There is ${count} thing left to do`
 } else if(count >= 2) {
  taskCountP.innerText = `There are ${count} things left to do`
 }else if(count === 0) {
  taskCountP.innerText = "Nothing on the list"
 }
}

 function crossOffList(e) {
   e.target.classList.toggle('strike')
   if(e.target.classList.contains('strike')) {
    count--
   }else {
    count++
   }
   if(count === 1) {
    taskCountP.innerText = `There is ${count} thing left to do`
   } else if(count >= 2) {
    taskCountP.innerText = `There are ${count} things left to do`
   }else if(count === 0) {
    taskCountP.innerText = "Nothing on the list"
   }
  // taskCountP.innerText = `There are ${count} things left to do`
 }

 function clearAll() {
  document.querySelectorAll('li').forEach(li => li.remove())
  taskCountP.innerText = "Nothing on the list"

 }

 function removeDone(){
  document.querySelectorAll('.strike').forEach(li => li.remove())

 }

addBtn.addEventListener("click", makeAListItem)
showItems.addEventListener('click', crossOffList)
btnClearAll.addEventListener('click', clearAll)
btnRemove.addEventListener('click', removeDone)











