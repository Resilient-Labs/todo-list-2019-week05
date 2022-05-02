const input = document.getElementById('toDoInput') // input
const button = document.getElementById('submitButton') // button
const ul = document.getElementById('toDoList') // ul
const clearDoneButton = document.getElementById('clearDone')
const clearAllButton = document.getElementById('clearAll')

// functions // 

function createListItem(e) {
    e.preventDefault()
    if(toDoInput.value === ''){
        return
    }

    // creating the lis 
    const li = document.createElement('li')
    const text = toDoInput.value
    li.innerText = text 
    ul.appendChild(li) //putting li in the ul 
    input.value = '' // clear the input

    li.addEventListener('click', function(){
        li.classList.toggle('completed')
        
    })
}

function clearAll(){
    let toDo = document.getElementById('toDoList')
    toDo.innerHTML = ''
}

function clearDone(){
    let toDoDone = document.querySelectorAll('.completed')
    for (let toDoItem of toDoDone){ 
        toDoItem.remove()
    }
}

button.addEventListener ('click', createListItem)
clearAllButton.addEventListener('click', clearAll)
clearDoneButton.addEventListener('click', clearDone)