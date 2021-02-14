// Variables
let totalToDo = 0



let userInput = document.querySelector(".userInput")
let addListItem = document.querySelector(".addListItem")
let listStart = document.querySelector(".listStart")

//Event Listeners
addListItem.addEventListener("click", addTodo)

document.querySelector(".clearAllListItems").addEventListener("click", clearAll)

document.querySelector(".clearCompletedListItems").addEventListener("click", () =>{
    let completedItem = document.querySelector(".crossOff")
  listStart.appendChild(completedItem);
  completedItem.classList.add("remove")
  document.querySelector(".currentCount").innerText = totalToDo
  console.log(completedItem);
})
document.querySelector(".listStart").addEventListener("click", (e) =>{
  e.target.classList.add("crossOff")
})

//Functions
function addTodo(event) {
    event.preventDefault();
    addToCount()
    let newListItem = document.createElement("li");
    newListItem.innerText = userInput.value;

    listStart.appendChild(newListItem);
    newListItem.classList.add("amListItem")
    if(userInput.value === ""){
        alert("Please enter an Item")
    }

}

function clearAll(){

     let node = document.querySelector(".listStart")
     while (node.firstChild) {
  node.removeChild(node.firstChild);
  document.querySelector(".currentCount").innerText = ""
}


}


function addToCount(){
    totalToDo = totalToDo + 1
    document.querySelector(".currentCount").innerText = totalToDo
    console.log(totalToDo);
}
