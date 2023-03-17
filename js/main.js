// collect variables for ol, buttons, input
const list = document.querySelector('#list')
const enterBtn = document.querySelector('#enter')
const clearCheckedBtn = document.querySelector('#clearItem')
const clearAllBtn = document.querySelector('#clearAll')
const taskList = document.querySelector('#taskList')


//create a function that creates li's that are inserted into the ol
function enterTodo (){
  //create variables for tasklist input and li that 
  let items = taskList.value
  //convert tasklist into listOfText in HTML
  let listOfText = document.createTextNode(taskList)
  let li = document.createElement('li')
  li.appendChild(listOfText) //keeps li's as text
  list.appendChild(li)

  if (items != ''){
    //reset input
  }else{
    return 
  }
}

enterBtn.addEventListener('click', enterTodo)

//want the li to be able to click and crossout and click and uncross

//make sure enter button enters the li's and list below

//clear checked button needs to clear only checked li's

//clear all button needs to clear all li's