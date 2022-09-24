// Keep track of the amount of li's created
let counter = 0;
let displayCounter = document.querySelector("#totalTaskLeft")

// When a new task is submitted run getValue function
let addToListBtn = document.querySelector("#addToList").addEventListener('click', getValue) 

// If clear completed button is clicked, i'll remove all li's that have the class of completed
let clearCompletedBtn = document.querySelector("#clearCompleted").addEventListener('click', removeCompleted)

// If the clear list button is clicked. I'll remove all the li elements from the DOM
let clearListBtn = document.querySelector("#clearList").addEventListener('click', removeList)


// Get the value from the input and create an li
function getValue() {

    // get the value from the input
    let userInput = document.querySelector("#inputItem").value
    if (userInput === "") {
        return;
    }

    // dynamically create a li and add them to the current ul created in html file
    let ul = document.querySelector("#list")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(userInput))

    ul.appendChild(li)

    // Update couter
    counter += 1;
    displayCounter.innerText = `You Have ${counter} tasks left`
}

// When li is clicked add class of completed
document.querySelector("#list").addEventListener('click', (e) => {

    // If we clicked on the ul and not an li, it would add the class of completed to the ul. This fixed that
    if (e.target.hasAttribute("id")) { // If the target has an id, which the ul does. It returns from the function and does nothing
        return;
    }

    // If the target li already contains the class of completed, let's remove it
    if (e.target.classList.contains("completed")) {
        e.target.classList.remove("completed")

        // Update counter
        counter += 1; // We can use the length property to find how many li's there are
        displayCounter.innerText = `You Have ${counter} tasks left`
    }else {

        // Add the class of completed to the li
        e.target.classList.add("completed")

        // Update counter
        counter -= 1; // We can use the length property to find how many li's there are
        displayCounter.innerText = `You Have ${counter} tasks left`
    }

})

function removeCompleted() {

    let listItems = Array.from(document.querySelectorAll("li")) // Creates a nodeList and adds all the li. Using Array.from will turn it into an array
    
    // Use a loop to go through every li and determine if they have the class of complete
    listItems.forEach(item => {
        if(item.classList.contains("completed")) {
            item.remove() // If the li has the class of complete, remove the element. 
        }
    })

}

function removeList() {

    let listItems = Array.from(document.querySelectorAll("li")) // Creates a nodeList and adds all the li. Using Array.from will turn it into an array

    // Use a loop to go through every li
    listItems.forEach(item => {
        item.remove() // Remove all the li's 
    })

    // Update counter
    counter = 0;
    displayCounter.innerText = `You Have ${counter} tasks left`

}