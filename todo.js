
document.querySelector('#add').addEventListener('click', add)
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('#complete').addEventListener('click', complete)
document.querySelector('#task-list').addEventListener('click', taskListUlItems)


//be able to add a task to the task list
function add(){

    const newLi = document.createElement("li");

    const newLiInputCheckbox = document.createElement("input")
    
    newLiInputCheckbox.type="checkbox"

    const userTask = document.querySelector('#addTask').value

    newLi.innerText = userTask
    
    const taskListUl = document.querySelector('#task-list')

    taskListUl.appendChild(newLi)

    newLi.appendChild(newLiInputCheckbox);

    document.querySelector('#addTask').value = ''

}
// need function to clear all tasks
function clear(){
    document.querySelector('#task-list').innerHTML = ''
}

function complete(){
    let doneTasks = document.querySelectorAll('.done')
    for (let i = 0; i < doneTasks.length; i++){
        doneTasks[i].remove()
    }
}

function taskListUlItems(e){
    // console.log(e.target.parentNode)
    e.target.parentNode.classList.toggle('done')

}

//want to be able to cross out certain task items and check them off as complete

//walking the dom 
//add eventlistener to checkbox 
//in function connect to that
//whenever element is clicked pass a click event to function
//event.target.parentnode to acces li element
//then apply style to list item