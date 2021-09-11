// Credit to Natasha and David for helping with the tasksLeft function.

let list = document.querySelector('#tasksHere')

// EVENT LISTENER 
document.querySelector('#addItem').addEventListener('click', addItem)
document.querySelector('#clearList').addEventListener('click', clearList)
document.getElementById('clearCompleted').addEventListener('click', clearCompleted)


// ADD TASKS FOR THE TO-DO LIST

function addItem() {
    let input = document.querySelector('#listEntry').value 
    let itemsOnList = document.createElement('li') // li in HTML
    itemsOnList.innerText = input
    document.querySelector('#tasksHere').appendChild(itemsOnList)

    itemsOnList.addEventListener('click', (e)=> {
        itemsOnList.classList.toggle('strikeThrough')
        tasksLeft()

    })

    tasksLeft()
}

// CLEAR LIST

function clearList() {
    let ul = document.querySelector('ul')
     ul.innerHTML = '';

     tasksLeft()

}

// REMOVE COMPLETED TASKS

function clearCompleted() {
    document.querySelectorAll('.strikeThrough').forEach(item =>{ 
        item.remove()
    }) 
}

// COUNT HOW MANY TASKS ARE LEFT

function tasksLeft() {
    let count = list.getElementsByTagName('li').length
    let completedList = list.getElementsByClassName('strikeThrough').length
    console.log(count, completedList)
    document.querySelector('#counter').innerHTML = count - completedList
  }
