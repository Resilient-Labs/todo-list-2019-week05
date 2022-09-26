//Goal: Make a to-do list
//Bonus: make it interesting
var tasks = []
//Task 1: We need a listener...a whole spy
document.querySelector('#mySubmit').addEventListener('click', addTask)
document.querySelector("#myDelete").addEventListener('click', deleteTask)

//I need a function to add task to To-Do list
function addTask(event) {
    event.preventDefault();
    //You know the drill: get input from the user XD
    task = document.querySelector('#addToList').value
    //Push that info to array 
    tasks.push(task)
    // stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
    const listItem = document.createElement("li")
    const areaSection = document.querySelector(".area")
    //remind me of fizzbuzz....oh yeah it adds stuff todo list
    for (let i=0; i <= tasks.length-1; i++)
     {
        //I took the list item and the other query out because it was repeating in loop
        listItem.innerHTML = tasks[i]
        areaSection.appendChild(listItem)
       
     }
}
document.querySelector(".area").addEventListener('click', crossOutTask)
//I need a task to cross task(s) off of the list
function crossOutTask(event) {
    //eventObject
    console.log(event.target)
    event.target.classList.toggle("strike")
    console.log(event.target)
    //Toggle the status of element 
    // document.querySelector("#task").classList.toggle('cross-out'
    // document.querySelector('li').style.textdecoration = "line-through"
    

    

}
//I need a function to delete a task on To-Do list 

function deleteTask(event) {
    event.preventDefault();
    //select event 
    //This got me hype @ 12:01AM Friday
    //yes, I put the date and time
    //https://stackoverflow.com/questions/52345918/get-html-element-style-with-javascript
    const areaSection = document.querySelector(".area")
    const li = document.querySelector(".strike")
    areaSection.removeChild(li)
   

}




