//Task code a to do list where users can input tasks, see their list, cross things off

//create an event listener to hear for user input
document.querySelector('#newTask').addEventListener('click', userAddsTask)

//create a function for that event listener (userAddsTask)
    //create a variable that will take in the user's input (taskEntry)
        //note at this pt i did doc.queryselector to print user input on dom. it worked. 
    //Figure out how to take each user input and create a list
        //ol element needs to exist in html, then with js you want to add a list element do document (to go into dom) and .createElement for the list element
        //now, take the exisiting ol do .appendChild() method to add a list each time button is clicked
        //the task Entry li element needs to be printed on dom.
let taskEntry = document.querySelector('#taskEntry').value 
        function userAddsTask() {
    let taskEntry = document.querySelector('#taskEntry').value 
    let ol = document.querySelector('#listBody')
    let li = document.createElement('li')
    li.innerHTML = taskEntry
    ol.appendChild(li)
}

//Now that list is generated, you need to be able to cross things off on click
document.querySelector('ol').addEventListener('click', removeTask)

function removeTask(taskEntry) {
    if(taskEntry.target.tagName === 'LI') {
        taskEntry.target.classList.toggle('hidden');
    }
}
//Jose helped me with this logic 
//https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName

//this function clears all
document.querySelector('#doneForDay').addEventListener('click', clearAll)

function clearAll(){
    document.querySelector('div').style.display = 'none'
}

//THINGS THAT DON'T WORK
// document.querySelectorAll('li').addEventListener('click', clearTask)

// function clearTask(){
//     let li = document.querySelector('li.innerText')
//     if(li.innerText = '') {
//         innerText.remove()
//     }
// }









    //if more time, add a date input section
    //if more time ask EIRs what would be the process of "saving" lists if the user wanted to reflect back on tasks

    //let taskArray = []
    // function addTask() {
    //     const taskEntry = document.querySelector('#taskEntry').value 
    //     // document.querySelector('#placeToSee').innerText = taskEntry
    //     taskArray.push(taskEntry)
    // }
    //console logged taskList after putting values in input; an array was made! now figure out how to display those array inputs on dom