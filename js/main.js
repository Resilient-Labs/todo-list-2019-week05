//worked with Asiah, Sebastian, Sam, Nyah,Eric


document.querySelector('.addButton').onclick = newItem
const clearAll = document.querySelector('.clearAll')
const clearCompleted = document.querySelector('.clearCompleted')
const ul = document.querySelector("ul")
let totalTasks = document.querySelector("span")


function newItem(){
  event.preventDefault()
  const item = document.querySelector("input").value
  let li =document.createElement("li")
  li.appendChild(document.createTextNode(item))
  ul.appendChild(li)
  document.querySelector('input').value = ""
  checkCount();
}

ul.addEventListener('click', (e) => {
  e = e.target
  e.classList.toggle('line')
  checkCount()
})

clearAll.addEventListener('click', () => {
  const li = document.querySelectorAll('li')
  for( let i = 0; i < li.length; i++){
   ul.removeChild(li[i])
  }
  checkCount()
})

clearCompleted.addEventListener('click', () => {
 const li = document.querySelectorAll('li')
 for( let i = 0; i < li.length; i++){
   if (li[i].classList.contains('line'))
 {
     ul.removeChild(li[i])
 }
 }
 checkCount()
})

function checkCount(){
  let count = 0
  const li = document.querySelectorAll('li')
  for( let i = 0; i < li.length; i++) {
   if (!(li[i].classList.contains('line'))) {
     count++
   }
  }
  totalTasks.innerHTML = count
}
