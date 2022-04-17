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
}

function lineThruToDoTask(e){
  if(e.target.classList.contains("line")){
    e.target.classList.toggle("strikeThrough")
  }
}

function eraseTask(){
  let removeElems = document.querySelectorAll(".strikeThrough")
  for(let i=0; i<removeElems.length; i++){
    removeElems[i].remove()
  }   
}

function removeWholeList(){
  ul.innerText =""
}

btn.addEventListener("click", makeToDo)
ul.addEventListener("click", lineThruToDoTask)
clearList.addEventListener("click", removeWholeList)
document.querySelector("#byeByeTask").addEventListener("click", eraseTask)

//A collaboration: Dennis Trujillo, Mandy Wong, Travora Senecharles, Alexandra Harley, Daniela Morin 
