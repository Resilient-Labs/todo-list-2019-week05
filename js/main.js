
const taskItem = document.getElementById('task')
const taskList = document.getElementById('taskList')

document.querySelector('#addTask').addEventListener('click', addMyTask)



function addMyTask() {
    // I want to make it so when the user types in the input and presses the add button it adds the input value to the list but only if user inputs value
    if (taskItem.value === '') {
        document.getElementById('placeToCheck').innerText = 'You need to enter a task!'
    } else {
        /*let input = document.createElement('input')
        let addThatJawn = '<li>' + taskItem.value + '</li>'
        input.setAttribute('type', 'checkbox')
        input.innerHTML = addThatJawn
        taskList.appendChild(input)*/
        let li = document.createElement('li')
        let addThatJawn = '<input type = "checkbox" class = "delete">' + taskItem.value
        li.innerHTML = addThatJawn
        taskList.appendChild(li)
        //let addedTasks = document.querySelectorAll('.delete') // Anais helped me with this code
       /* for (i = 0; i < addedTasks.length; i++){ // Anais helped with this code
            addedTasks[i].addEventListener('click', removeTask) // Anais help me with this code
        }*/
        //li.classList.toggle('clear')
        //I want to make it so each time a checkbox is checked it clears the list item
        /*let checkBox = document.querySelectorAll('.delete')
        console.log(checkBox)
        if (checkBox.checked) {
            checkBox.forEach(() =>{
                li.classList.toggle('clear')
            })
        } else {
            li.style.display = 'block'
        }*/
    }
    taskItem.value = ''

}


taskList.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete')) {
        removeTask(e.target)
    }
})

/*function deleteMyTask(){ 
    if(task.target.tagName === "LI"){
        console.log(srrer)
        task.target.classList.toggle('clear')
    }
}*/


function removeTask(completed){
    completed.parentElement.remove()
    console.log(completed)
}

//document.querySelector('ul').addEventListener('click', removeTask)

/*function removeTask(click){
    if(click.target.classList.contains('delete')){
        let completed = document.querySelector('.delete')
        completed.className = 'active'

        if(completed.className === 'active'){
            completed.parentNode.className = 'active' ///This is not my code Anais helped me with thisss!! The Best!!
        }
    }

    let completedTasks = document.querySelectorAll('.active')
    Array.from(completedTasks).forEach(element => element.remove())
    console.log(completedTasks) 
    //console.log(e)
    //const removeItems = document.querySelectorAll('.delete')
   // let li = document.querySelector('li')
    //removeItems.forEach((item) => {
        //if(item.checked === true) {
       //     li.classList.add('clear')
   // } 
   // })
}*/

/*const ul = document.querySelector('ul')

ul.addEventListener('click', (e) => {
    e.preventDefault()
    let li = document.querySelectorAll('li')

    let completed = [];
    document.querySelectorAll('[type = "checkbox"]').forEach(item =>{
        if(item.checked === true) {
            completed.push(item.value)
            li.classList.toggle('clear')
        }
    })
    console.log(completed)
})*/



/*function removeTask(taskDelete){
    if((taskDelete.target.tagName === 'LI') || (taskDelete.target.tagName === 'INPUT')) {
        taskDelete.target.classList.toggle('clear')
    }
}*/

//I want to make it so whenever a checked box registers as checked, it clears the list item
//function deleteMyTask() {
    //let checkBox = document.querySelectorAll('.delete')
    //console.log(checkBox)
    //let clear = document.querySelector('.clear')
    // if(checkBox.checked === true){
    //console.log('checked')
    //clear.style.display = 'none'
    //console.log("clear")
    //} else{
    //clear.style.display = 'block'
    // }
//}

//deleteMyTask()



//document.querySelectorAll('#delete').addEventListener('change', deleteMyTask)

//let complete = document.querySelectorAll('#delete')
//console.log (complete.checked)

//.addEventListener('change', deleteMyTask)

/*function deleteMyTask(){ 
    let checkBox = document.e('.delete')
    if(checkBox.checked){
        console.log('checked')
    }
}*/


//if (currentTarget.checked) {
// console.log("Checkbox is checked..");
//} else {
// console.log("Checkbox is not checked..");
// }
// SO i want for when the checkbox input is checked, the list element is cleared...

//function() {
// if(this.checked){
//  console.log("Checkbox is checked..");
// } else {
//     console.log("Checkbox is not checked..");
// }

//}

