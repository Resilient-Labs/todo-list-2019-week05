const item = document.querySelector('#addItem')
const list = document.querySelector('#taskList')
const clearDone = document.querySelector('.clearCompleted')
num = 0

document.querySelector('#addBtn').addEventListener('click', addToList)
list.addEventListener('click', crossOut)

function increaseTasks() {
    num++
    return num
}

function addToList(e) {
    e.preventDefault()
    if(item.value === '') {
        return
    }
    const li = document.createElement('li')
    li.innerText = item.value
    list.appendChild(li)
    li.className = 'list'
    item.value = ''
    increaseTasks()
    document.querySelector('#leftOver').innerText = num
}

function crossOut(e) {
    if (e.target.classList.contains('list')) {
        e.target.classList.add('lineTime')
        if (num > 0) {
            num--
            document.querySelector('#leftOver').innerText = num
        } 
    }
}

document.querySelector('.clearList').addEventListener('click', sweepAll)
clearDone.addEventListener('click', tidyUp) 

function sweepAll() {
    list.innerText =""
    num = 0
    document.querySelector('#leftOver').innerText = num
}

function tidyUp() {
    document.querySelectorAll('.lineTime').forEach(li => {li.remove() })
}