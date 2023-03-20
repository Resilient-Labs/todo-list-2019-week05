document.querySelector("#add").addEventListener("click", add)
document.querySelector("#clear").addEventListener("click", clear)
document.querySelector("#clearComplete").addEventListener("click", clearItems)
let items = document.querySelector("#items")
let numberTasks = document.querySelector("#numberTasks")

// create a function that will add items to your list
// using createElement create "li" for you "ul" which will add new tasks to your list
// create text that is not part of HTML using creatTextNode so that it goes from the input into the "li" position using appendChild
// the nodes are an appendChild of the "li"
// "li" is an appendChild of the "ul"
function add(){

    let tasks = document.querySelector("#tasks").value
    let newTasks = document.createElement("li")
    let createListItems = document.createTextNode(tasks)

    newTasks.appendChild(createListItems)
    items.appendChild(newTasks)
    
    newTasks.addEventListener("click", lineThrough)

    let listItems = items.querySelectorAll("*").length
    numberTasks.innerText = "You have " + listItems + " tasks remaining"



}


// create a function that will remove all items on the list
function clear(){

    document.querySelectorAll("li").forEach(li => li.remove())

    let listItems = items.querySelectorAll("*").length
    numberTasks.innerText = "You have " + listItems + " tasks remaining"
    
}


// create a function that will remove all items with a line through
function clearItems(){

    document.querySelectorAll(".strike").forEach(li => li.remove())

    let listItems = items.querySelectorAll("*").length
    numberTasks.innerText = "You have " + listItems + " tasks remaining"
    
}

// create a function that will strike the lines through list items
// e listens for click
function lineThrough(e){

    e.target.classList.toggle("strike")


    let removeCompletedItems = (items.querySelectorAll("*").length) - (document.querySelectorAll(".strike").length)


    numberTasks.innerText = "You have " + removeCompletedItems + " tasks remaining"

}

