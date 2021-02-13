
//TASK:
// Clear all items in list
// Show in the DOM  how many completed
//add list counter dom w/ button
//be able to check off each item

//ref https://freshman.tech/todo-list/

// //This is the array that holds to do toitems//
// let todoItems = [];
//
// // This function will create a new todo object based on the
// // text that was entered in the text input, and push it into
// // the `toDoItems` array
//
//

//lots of help from mentor Sam Lawton and alumni Shey and Ibrahim and  Professor Youtube/MDN

const input = document.querySelector(".input")
const ul= document.querySelector("#list")
// let count = 0

document.querySelector(".addTaskButton").addEventListener('click',addItem)
  function addItem(){
    if (input.value === "") return alert("Please add a 'To Do Item'")
    let node = document.createElement("li") //node is the text item in this case//
    var textnode = document.createTextNode(input.value) //taking the typed items "value" of the input and coping it into the textnode//
    node.className = "listItem"

    let trash = document.createElement("i")
      trash.classList.add("far")
      trash.classList.add("fa-window-close")
      trash.addEventListener("click", deletedListItem)
        node.appendChild(textnode) //adding the text inside the node//
        node.appendChild(trash)
    document.getElementById('list').appendChild(node)//node <li> is now in the list<ul>//
    input.value=""
  }


  function check(e){ // refers specifically to the box appended to the <li>
    console.log(e)
    if (e.target.className === "listItem"){
      e.target.style.textDecoration = "line-through"
      e.target.className = "completed"
      count()
    }else {
      e.target.style.textDecoration = "none"
      e.target.className = "listItem"
      count()
    }
  }

  function count(){
    let doneTotal = document.getElementsByClassName("completed").length  //we know is an array since we are getting getElements and its a list of items>
    document.querySelector("#total").innerText = doneTotal

  }

  document.querySelector("#deleteAll").addEventListener("click",deleteAll)

  function deletedListItem(e){
    const listItemToDelete = e.target.parentElement
    ul.removeChild(listItemToDelete)
    count() //call the count function again to make sure the count gets updated
  }

  function deleteAll(){  //Ibrahim helped//
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
        count()
      }
  }

document.querySelector("#list").addEventListener("click", check)
const deleteDone = document.querySelector("#deleteDone").addEventListener("click",doneItem)

function doneItem(){
  const completedStorage = document.querySelectorAll(".completed")
  console.log(completedStorage)
  for (let completed of completedStorage){ //Shey said cool kids loop //mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of      //t
    ul.removeChild(completed)
  }
  count()
}





  // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
