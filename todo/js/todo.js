// code wars.. todo list and slot machine dus sunday night.. appending elements to the empty ul.. each to do it an li...transform css property to spin reel?

// I want to collect the data from input 
// I want to add it to the To Do list 
// I want to be able to clear the To Do list
// I want to be able to clear the To Do's that are completed

document.querySelector('#addLiBtn').addEventListener('click', addToDo)

  let ul = document.querySelector("#toDoList")
    
    

function addToDo(){
  // assigning the type of checkbox for checkBoxVariable
  let checkBox = document.createElement('input')
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener('click', markedDone)


  // grabbing user input
  let newToDoEntry = document.querySelector('#newToDoEntry').value
  console.log(newToDoEntry)
  
  // creating text for the li
  let toDoTxt = document.createTextNode(newToDoEntry);
  // creating li and checkbox element
  let liItem = document.createElement('li', 'checkbox')
  let liItem2 = document.createElement('span')
  // adding the checkbox element to the li
  liItem.appendChild(checkBox)
  // adding txt to li element
  liItem2.appendChild(toDoTxt)
  liItem.appendChild(liItem2)
  ul.appendChild(liItem)

  displayToDoLeft()
}

document.querySelector('#clearList').addEventListener('click', clearList)

function clearList(){
  // console.log(hello)
  ul.innerHTML=''
}

function markedDone(event){
  console.log(event.target.tagName)
  event.target.nextSibling.classList.toggle('strikeThrough')
  event.target.parentElement.classList.toggle('strikeThrough')
  displayToDoLeft()
}

document.querySelector('#clearCompletedBtn').addEventListener('click', deleteParentDone)

function deleteParentDone(){
  document.querySelectorAll('li.strikeThrough').forEach(element => element.style.display='none')
}


// let toDoLeftText = document.querySelector('#toDoLeftText')

// let strikeThoughAmount = document.querySelectorAll('.strikeThrough').length//.filter(element => !element.style.display == 'none')
// console.log("Strike Through Amount: ", strikeThoughAmount)
// toDoLeftText.innerText = strikeThoughAmount




// var count = 0;
//         var newToDoEntry = document.getElementById("addLiBtn");
//         var disp = document.getElementById("toDoLeftText");
  
//         newToDoEntry.onclick = function () {
//             count++;
//             disp.innerText = (`you have ${count} tods left`);
//         }



        // var filledInputs = $(':input[value]').length;

function displayToDoLeft() {
  let nonStrikeThroughAmount = [...document.querySelectorAll('li')].filter(element => !element.classList.contains("strikeThrough")).length
  console.log("Todo Left: ", nonStrikeThroughAmount)
  const toDoLeftText = document.querySelector("#toDoLeftText")
  toDoLeftText.innerText = `${nonStrikeThroughAmount}`
}