const form = document.querySelector("#todo-form")
const input = document.querySelector("#todo-input")
const todoList = document.querySelector("#todos-list")
const completedList = document.querySelector('#completed-list')
const todoCount = document.querySelector('#counter')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const todo = input.value

    const todoEl = document.createElement('div')
    todoEl.classList.add('todo')

    const todoContent = document.createElement('div')
    todoContent.classList.add('content')

    todoEl.appendChild(todoContent)

    const todoInput = document.createElement('p')
    todoInput.innerText = todo

    todoContent.appendChild(todoInput)

    const todoButton = document.createElement('div')
     todoButton.classList.add('button')

    const completeButton = document.createElement('button')
    completeButton.classList.add('complete')
    completeButton.innerText = 'Complete'

    const clearComplete = document.querySelector('#clear-button')
    todoButton.appendChild(completeButton)

    todoEl.appendChild(todoButton)

    todoList.appendChild(todoEl)

    input.value = ''
    
    completeButton.addEventListener('click', () => {
            todoList.removeChild(todoEl)
            todoEl.removeChild(todoButton)
            completedList.appendChild(todoEl)
    })
    clearComplete.addEventListener('click', () => {
        completedList.removeChild(todoEl)
});
})