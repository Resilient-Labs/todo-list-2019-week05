document.querySelector('#submit').addEventListener('click', addToList)
document.querySelector('#clear').addEventListener('click', clearList)
document.querySelector('ul').addEventListener('click', crossOut)

document.querySelector('#complete').addEventListener('click', completed)

function addToList(e) {
    e.preventDefault()
    let listItem = document.querySelector('#textBox').value
    let li = document.createElement('li')
    let ul = document.querySelector('ul')
    if (listItem === ''){
        return
    }
    ul.appendChild(li).innerText = listItem
    document.querySelector('#textBox').value = ""
    countTasks()
}

function crossOut(event) {
    event.target.classList.toggle('crossOut')
    document.querySelector('span').innerText = numOfTask
    countTasks()
}

function clearList () {
    document.querySelectorAll('li').forEach(li => {
        li.remove()
    })
    countTasks()
}

function completed() {
    document.querySelectorAll('.crossOut').forEach(li => {
        li.remove() })
        countTasks()
}
// Thank you Kelly Cche 
function countTasks(){
    numOfTask = 0
    document.querySelectorAll('li').forEach( li => numOfTask++)
    document.querySelectorAll('crossOut').forEach(element => numOfTask--)
    document.querySelector('span').innerText = numOfTask
}



// 01 take input
// 02 change input to value
// 03 take that value and create li
// 04 innerText li into ul with appendChild()

// crossing an item to say you clear it