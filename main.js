const input = document.querySelector("#input")
const ul = document.querySelector ("#ul")
const btn = document.querySelector("#button")
const clearList = document.querySelector("#byeByeList")


function makeToDo (event){
  event.preventDefault()
  if(input.value === "") return
  const li = document.createElement("li")
  li.innerText = input.value
  ul.appendChild(li)
  li.className="line"
  input.value = ""

  countTasks()
}

function crossOut (e){
  if(e.target.classList.contains("line")){
  e.target.classList.toggle("crossOut")
  }

  countTasks() // We called this function here as well as on makeToDo b/c we wanted the function to count how tasks are left to do
}

function eliminateAll(){
  ul.className = "remove"
  ul.classList.toggle("remove")
  ul.innerText =""
}

function countTasks(){
  tasks = 0
  document.querySelectorAll('.line').forEach(li => tasks++)
  document.querySelectorAll('.crossOut').forEach(element => tasks--)
  document.querySelector('.tasks').innerText = `You have ${tasks} tasks left to complete.`

}

btn.addEventListener("click", makeToDo)
ul.addEventListener("click", crossOut)
clearList.addEventListener("click", eliminateAll)

