document.getElementById('add').addEventListener('click', addItem)
document.getElementById('clearAll').addEventListener('click', clearAll)
document.getElementById('clearCompleted').addEventListener('click', clearCompleted)
let list = []
let finished = []

function addItem() {
    let item = document.querySelector('input').value
    list.push(item)
    item = document.createElement('li')
    document.getElementById('items').appendChild(item)
    item.innerText = list[list.length-1]
    item.setAttribute('id', list.indexOf(item.innerText))
    document.querySelector('h1').innerText =  `You have ${list.length} todos left.` 

    item.addEventListener('click', () => {
        if (item.classList != 'strike') {
            item.classList.add('strike')
            finished.push(item.innerText)
            document.querySelector('h1').innerText = `You have ${list.length-finished.length} todos left.`
        }else {
            item.classList.remove('strike')
            let removeIndex = finished.indexOf(item.innerText)   
            finished.splice(removeIndex, 1)
            document.querySelector('h1').innerText = `You have ${list.length-finished.length} todos left.`
        }
    })
}

function clearAll() {
    list.splice(0, list.length)
    document.getElementById('items').innerHTML = ''
    document.querySelector('h1').innerText = `You have ${list.length} todos left.`
}

function clearCompleted() {
    for (i = 0; i < finished.length; i++) {
       if (list.includes(finished[i]) === true) {
           let id = list.indexOf(finished[i])
           document.getElementById(id).remove()
           list.splice(id, 1)
       }
    }
    finished.splice(0, finished.length)
}

console.log(finished)
console.log(list)






