//Click Add button
//A new li is added to the ul.
//The li has a class of liDo
//Clicks enter to add the input to the list
//Count number of tasks/li and print/update to the dom


const input = document.querySelector('input')
const ul = document.querySelector('.ulDo')
const total = document.querySelector('.h2Total')

function addItem(){
    if (input.value === ""){
       return alert('please add task')
    }
    let li = document.createElement("li")
    li.classList.add('liDo')
    li.classList.add('liProg')

    li.innerText = input.value

    ul.appendChild(li)

    console.log(li)

    let checkbox = document.createElement('a')
    checkbox.classList.add('aFinish')

    checkbox.innerHTML = '<i class="far fa-check-square"></i>'
    
    li.appendChild(checkbox)

    console.log(checkbox)

    let deleteItem = document.createElement('a')
    deleteItem.classList.add('aDelete')

    deleteItem.innerHTML = '<i class="fas fa-times-circle"></i>'
    li.appendChild(deleteItem)

    input.value = ""

    updateCount()

    checkbox.addEventListener('click', strikethrough)

    deleteItem.addEventListener('click', deleteTask)

}

function clearAll(){
    while(ul.lastChild){
        ul.removeChild(ul.lastChild)
    }

    updateCount()
    
}

function strikethrough(e){
    
    let tar = e.target 

    let closestLi = tar.closest('.liDo')

    console.log(tar)
    console.log(closestLi)

    closestLi.classList.add('liStyle')
    closestLi.classList.add('completed')
    closestLi.classList.remove('liProg')


    countLi()
}

function countLi(){
    let numTasks = document.querySelectorAll('.liDo')
    
    numTasks.forEach((node) => {
        console.log(numTasks.length)
    }) 

    let tasksComp = document.querySelectorAll('.completed')

    tasksComp.forEach((node) => {
        console.log(tasksComp.length)
    })

    console.log(numTasks.length - tasksComp.length)

    total.innerText = (numTasks.length - tasksComp.length)
    
}



// function strikethrough(e){
//     if(e.target.classList.contains('liDo')){
//         e.target.style.textDecoration = "line-through"
//         e.target.className = 'completed'
//     } else {
//         e.target.style.textDecoration = "none"
//         e.target.className = "liDo"
//     }
    
// }

function clearCompleted(){

    let completedItems = document.querySelectorAll('.liDo.completed')

    // completedItems.forEach((node) => {
    //     node.remove()
    // })
    
    completedItems.forEach(removeItems)

    updateCount()
}

function removeItems(node){
    node.remove()
}

function deleteTask(e){
    let deleteIcon = e.target

    let closestLi = deleteIcon.closest('.liDo')

    console.log(closestLi)

    closestLi.remove()

    updateCount()
}

function updateCount(){

    let numTasks = document.querySelectorAll('.liProg')

    numTasks.forEach((node) => {
        console.log(numTasks.length)
    }) 

    total.innerText =(numTasks.length)
}

function noRefresh(e){
    if(e.keyCode === 13){
        e.preventDefault()
        addItem()
    }
    
}

document.querySelector('.buttAdd').addEventListener('click', addItem)
document.querySelector('.buttClear').addEventListener('click', clearAll)
document.querySelector('.buttComp').addEventListener('click', clearCompleted)
document.querySelector('.inpForm').addEventListener('keypress', noRefresh)




