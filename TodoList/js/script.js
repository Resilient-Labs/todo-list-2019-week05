// User input their task
// It receives and stores it into a variable which shows up on a list
// Make the variable clickable and have it be grey out and crossed
// Once it's a completed list, have two more buttons that can clear the current list and clear completed items.

let toDoLi = document.getElementById("lists")
let addToLi = document.getElementById("addstuff")
let clearCompleteLi = document.getElementById("clearcompleted")
let clearLi = document.getElementById("clearlist")
let inputText = document.getElementById("inputtext")
let toggleMe = document.getElementById("listitem")

let listCounter = 0

addToLi.addEventListener('click', function(){ // Add tasks to the list body
let newToDo = document.createElement('li')
newToDo.innerText = inputText.value
listCounter = listCounter + 1
document.querySelector('span').innerText = listCounter
toDoLi.appendChild(newToDo)

}
)

toDoLi.addEventListener("click", function(event) {
// console.log(event.path[1].childNodes.length)
    let aim = event.target
    aim.classList.toggle("crossout")
if(aim.classList.contains("crossout")){
    listCounter = listCounter - 1
    document.querySelector('span').innerText = listCounter
}
})

function counterChecker(){ // Increase the counter by 1 when you add a task
    listCounter = listCounter + 1
    listCounter.innerText = counter
}

clearCompleteLi.addEventListener('click', function(){ // Clears the crossed out task on the list.
    document.querySelectorAll('.crossout').forEach(items => {
        items.remove()
    })
})

clearLi.addEventListener('click', function(){ // Clears the entire todo list whether it's completed or not.
    document.querySelectorAll('li').forEach(items => {
        items.remove()
    }
    )
})

