const item = document.querySelector('#item')
const submit = document.querySelector('#submit')
const ul = document.querySelector('#list')
const todoLeft = document.querySelector('span')

//Create Todo.
submit.addEventListener('click', toDo => {
    toDo.preventDefault()
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
    item.value = ""
    letfTodo()
})

// Mark completed
ul.addEventListener('click', completed => {
    if (completed.target.tagName == 'LI') {
        completed.target.classList.toggle("completed")
    }
    letfTodo()
})

// Clear/Delete listItems
document.querySelectorAll('button').forEach(e => e.addEventListener('click', clear => {
    let whatToClear = clear.target.getAttribute('data-value')
    if (whatToClear == 'clear') {
        document.querySelectorAll('li').forEach(e => e.remove())
        letfTodo()
    } else {
        document.querySelectorAll('.completed').forEach(e => e.remove())
        letfTodo()
    }
}))

// left todo counter function
function letfTodo() {
    let listItems = ul.getElementsByTagName('li').length
    let completedItems = ul.getElementsByClassName('completed').length
    return todoLeft.innerText = listItems - completedItems > 1 ? `${listItems - completedItems} todos` : `${listItems - completedItems} todo`
}
