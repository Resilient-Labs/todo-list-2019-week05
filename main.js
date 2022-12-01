const input = document.querySelector('#inputToDo')
const addItem = document.querySelector('#addItem')
const ulForItems = document.querySelector('#ulForItems')


addItem.addEventListener('click' , itemAdd)
ulForItems.addEventListener('click', crossOutItem )

// clicking add to add inputed item to list
function itemAdd(e){
    e.preventDefault()
    let text = input.value
    if(text === ''){
        return
    }
    console.log(text, 'itemAdd function')
    appendListItem(text)
}

function appendListItem(text){
    const li = document.createElement('li')
    li.innerText = text
    ulForItems.appendChild(li)
    input.value = ''
}
// crossout or delete item when task is done
function crossOutItem(e){
    e.target.classList.add('crossout')
    console.log(e.target)
}