

                    //variables
const enterItem = document.getElementById("enterItem")
const addButton = document.getElementById("addButton")
const clearButton = document.getElementById("clearButton")
const removeCompletedButton = document.getElementById("removeCompletedButton")
const listContainer = document.getElementById("listContainer")

                    //functions
function newItem() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(enterItem.value))
    li.atextContent = enterItem.value;
    console.log(li)
    listContainer.appendChild(li)
}             

function strikeThrough(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("linethrough")
    } 
}
function clear(){
    document.querySelectorAll("li").forEach(e => e.remove());
}

function completeRemove(){
    document.querySelectorAll(".linethrough").forEach(e => e.remove());
}
                    //event listeners and function calls
addButton.addEventListener("click", newItem)
clearButton.addEventListener("click", clear)
removeCompletedButton.addEventListener("click", completeRemove)
listContainer.addEventListener("click", strikeThrough)