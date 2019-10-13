//Declairing variables from DOM to control the functions to each respective Button
document.querySelector("#addToListButton").onclick = addItemToList;
document.querySelector("#clearComplete").onclick = clearComplete
document.querySelector("#clearAll").onclick = clearList
let count = 0; //Represents Onclick starting point

// here I am validating what is in the form input section with the submit method
document.querySelector("form").addEventListener("submit",(el) =>{
  // I am calling the the value in the input to see if I should run it or not
  let item = document.querySelector("#itemInput").value;
  // the item in input is checked against if..else statment..also so that when the center
  // key is hit the item in input does not get deleted
  el.preventDefault()
  if (item == ""){
    alert("ooops looks like there's no item :(")
  } else {
    addTaskToList()
    document.querySelector("#addItem").innerHTML = ''
  }
})

// function add items into the the ul
function addItemToList(){
  // assigning the value of the input to item
  let item = document.querySelector("#itemInput").value
  let ul = document.querySelector("#toDoList")
  let textNode = document.createTextNode(item)
  let li = document.createElement("li")
  //input value, if string empty , alert
  if (item == ""){
    alert ("ooops looks like there's no item :(")
  }else {
    // add the text node from the input as a list item in the ul
    li.appendChild(textNode)
    //appendChild causes text to become child of the ul element
    ul.appendChild(li)
    count++
    // replace the input with an empty string
    document.querySelector("#itemInput").value = ""
    document.querySelector("#activeTasks").innerHTML = count
  }
}

let ul = document.querySelector("#toDoList")
// adding event listener to each element in the ul
ul.addEventListener("click", (el) => {
  // if the the tag name of what is being clicked is a list then perform if statment
  if (el.target.tagName === "LI"){
    // cross a line through el
    el.target.classList.toggle("clearCompletedItems")
    let completedNumber = document.getElementsByClassName("clearCompletedItems").length
    let totalNumber = count - completedNumber
    document.querySelector("#activeTasks").innerHTML = totalNumber
  }
})
// clicking on clear button removes all text and brings count to zero
function clearList (){
  ul.innerHTML = ""
  count = 0
  document.querySelector("#activeTasks").innerHTML = count
}

function clearComplete(){
  let completed = ul.querySelectorAll(".clearCompletedItems")
  completed.forEach((li) => {
    // from the DOM subtractone number for each text node that is completed. 
    count--
    ul.removeChild(li)
  })
}
