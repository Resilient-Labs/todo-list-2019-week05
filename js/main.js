// collect variables for ol, buttons, input
const list = document.querySelector('#list')
const enterBtn = document.querySelector('#enter')
const clearCheckedBtn = document.querySelector('#clearItem')
const clearAllBtn = document.querySelector('#clearALL')
const taskList = document.querySelector('#taskList')
const form = document.querySelector('form')


//create a function that creates li's that are inserted into the ol
function enterTodo (event){
  event.preventDefault()//this stops page from refreshing when pressing enter
  //create variables for tasklist input and li that 
  let items = taskList.value
  //convert tasklist into listOfText in HTML

  let listOfText = document.createTextNode(items)
  let li = document.createElement('li')
  li.appendChild(listOfText) //keeps li's as text
  list.appendChild(li)

  if (items === ''){
    alert("Please enter Task")
  }else{
    form.reset()
  }

}
//make sure enter button enters the li's and list below
enterBtn.addEventListener('click', enterTodo)

//want the li to be able to click and crossout and click and uncross
function crossLi(event){
  const tasks = event.target
  const classes = tasks.classList
  const crossedTasks = classes.toggle('done')
  console.log(event)
}
list.addEventListener('click', crossLi)


//clear checked button needs to clear only checked li's
function clearDone(){
 let done = list.querySelectorAll('.done')
  done.forEach(crossing => {
    list.removeChild(crossing)

  })
}
clearCheckedBtn.addEventListener('click', clearDone)


//clear all function & button needs to clear all li's
function clearAll(){
  form.reset()
  list.innerText = ''
}

clearAllBtn.addEventListener('click', clearAll)