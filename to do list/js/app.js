const input = document.querySelector('#todoInput')
const submit = document.querySelector('#submitBtn')
const ul = document.querySelector('#todoList')
const completed = document.querySelector('#clearCompleted')
const clearList = document.querySelector('#clearList')

function todoList(e){
    // prevents form's default action of refreshing on submit
    e.preventDefault()
    // assigning the variable text to the input value
    let text = input.value 
    // stops function from submitting empty striing
    if (text === ''){
        return
    }
    // creating an li element inside doc and assigning it to variable li
    const li = document.createElement('li')
    // assigning the text inside li to text value
    li.innerText = text 
    // adds li to ul 
    ul.appendChild(li)
    //assigns the number of lis to a variable
    let doThis = document.querySelectorAll('li').length
    let doneIt = document.querySelectorAll('.strike').length
    //assigns the number of items to do
    document.querySelector('#howMany').innerText = doThis - doneIt
    // resets input to empty after submitting
    input.value = ''
}
submit.addEventListener('click', todoList)


function crossOut(e){
    e.target.classList.toggle('strike')
    let doThis = document.querySelectorAll('li').length
    let doneIt = document.querySelectorAll('.strike').length
    //
    document.querySelector('#howMany').innerText = doThis - doneIt
}
ul.addEventListener('click', crossOut)



function eraseAll(e){
    document.querySelectorAll('li').forEach((li) => {
        li.remove()
    })
    document.querySelector('#howMany').innerText = 0
}
clearList.addEventListener('click', eraseAll)


function eraseComplete(e){
    document.querySelectorAll('.strike').forEach((li) => {
        li.remove() 
    })
    document.querySelector('#howMany').innerText = document.querySelectorAll('li').length
}
completed.addEventListener('click', eraseComplete)