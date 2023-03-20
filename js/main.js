const createList = document.querySelector('#addButton')
const clearChecked = document.querySelector('#clearChecked')
const total = document.querySelector('#total')
const list = document.querySelector ('#list')
const count = document.querySelector('#count')

createList.addEventListener('click' , addTaskToList)

function addTaskToList() {
    const listInput= document.querySelector ('#taskList').value
    const newListItem = document.createElement('li')
    const text = document.createTextNode(listInput)
    newListItem.addEventListener('click' , lineThrough)
    newListItem.appendChild(text)
    list.appendChild(newListItem)

    totalTasks()
}

function lineThrough (e){
    e.currentTarget.classList.toggle('lineThrough')
    console.log('text')
}

function totalTasks(){
    const totalNumber = document.querySelectorAll('ul#list li')
    count.innerText = totalNumber.length
}

//function clearCheckedItems () {
//    let clearItems = ul.querySelector('.lineThrough')
//    for(i = 0; i;)
//}
//toggle checked items 

//total items on list counted 

//clear checked items