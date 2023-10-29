//create varibales
const forTheUser = document.querySelector("#form")
//const toDoInput = document.querySelector("#toDo").value
const addButton = document.querySelector("#add")
const theList = document.querySelector("#theList")
const clearBttn = document.querySelector("#clear")
const compBttn = document.querySelector("#complete")
const taskInput = document.querySelector("#taskToDo")


//create functions 

function listed(e){
  e.preventDefault()
  const toDoInput = document.querySelector("#toDo").value
if (toDoInput === ''){
  //alert('please put item in list')
}
 let li= document.createElement('li')
let theText= document.createTextNode(toDoInput)
li.appendChild(theText)
theList.appendChild(li)
if (toDoInput != ''){

  forTheUser.reset()
}
}
count()

function count(){
  const callTheLi = document.querySelectorAll('li')
  taskInput.innerText=callTheLi.length
}

function clearList(){
  forTheUser.reset()
  theList.innerText = ''
  taskInput.innerText = ''
}


clearBttn.addEventListener('click', clearList)

function lineThrough(event){
 const callingLi = event.target
 const duhClass = callingLi.classList 
 const crossOff= duhClass.toggle ('lineThrough') //create in css 
}

 theList.addEventListener('click', lineThrough)

function listIsAllDone(){
  let allDone = theList.querySelectorAll('.lineThrough')
  allDone.forEach(toDo =>{
    theList.removeChild(toDo)
  }
  )
  count()
}

 compBttn.addEventListener('click',listIsAllDone)

addButton.addEventListener('click',listed)


//worked with jada, randy and ashley on creating the toDOList 

