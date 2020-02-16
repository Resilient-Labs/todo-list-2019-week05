// <!-- // TEAM: Kenneth, Zikre, Chi, Elmer, Angelica, Joshua
// // also consulted with: Thais, Aiperi, Vanessa -->

let counter = document.querySelector("#tasksLeft")
const ul = document.querySelector("ul")
const deleter = document.querySelector("#deleteAll")
const clearLis = document.querySelector("#deleteSelected")

// input + adding
document.querySelector("#adder").addEventListener("click", plus => {
  event.preventDefault()
  let task = document.createElement("li")
  let item = document.querySelector("#userItem").value
  ul.appendChild(task)
  task.appendChild(document.createTextNode(item))
  document.querySelector("#userItem").value = ""
  checkTally()
})
// function to add tallys (referenced throughout)
function checkTally(){
  let number = 0
  const task = document.querySelectorAll('li')
  for (let i =0; i < task.length; i++){
    // if the list item (any of them) doesn't have a strike then...
    if(!(task[i].classList.contains('strike'))){
      number++
    }
  }
tasksLeft.innerHTML= number
}
// event listener to click on the item and strike it
ul.addEventListener('click', (e) => {
  e= e.target
  // when you clcik on the element you activate the CSS class of strike on it
  e.classList.toggle('strike')
  checkTally()
})
// clear All event once you click the button
deleter.addEventListener("click", () => {
  const task = document.querySelectorAll("li")
  for (let i= 0; i <task.length; i++){
    ul.removeChild(task[i])
  }
  checkTally()
})
// clear selected event once you click the button
clearLis.addEventListener("click", () => {
  const task = document.querySelectorAll("li")
  for (let i= 0; i <task.length; i++){
    if(task[i].classList.contains("strike")){
    ul.removeChild(task[i])
  }
}
  checkTally()
})
