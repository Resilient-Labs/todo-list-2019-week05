// create a click event for the add to list
//     run function that transfers the input to a list element
//     return input to nothing

document.querySelector('#addToList').addEventListener('click', addToList)

function addToList() {
    let newListItem = document.querySelector('input').value
    let li = document.createElement('li')
    let listText = document.createTextNode(newListItem)

    li.appendChild(listText)

    li.addEventListener('click', toggleCompleted)

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value = ''

    amountOfTodos()
}

// create a click event for list items
//     run function that toggles the class "completed"
//         completed means the styling will put a line through and change color

function toggleCompleted(event) {
    event.target.classList.toggle('completed')
    amountOfTodos()
}


// create a counter for the "you have x todos left"
//  li.length - li(completed).length

function amountOfTodos() {
    let amount = document.querySelectorAll('li').length - document.querySelectorAll('.completed').length

    document.querySelector('h2').innerText = `You have ${amount} todos left. `
}

// create a click event for the clear list
//     run function that clears all list elements

document.querySelector('#clearList').addEventListener('click', clearList)

function clearList() {
    let ul = document.querySelector('ul')
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    amountOfTodos()
}

// create a click event for the clear completed
//     run function that clears all list elements with the class "completed"

document.querySelector('#clearCompleted').addEventListener('click', clearCompleted)

function clearCompleted() {
    let completed = document.querySelectorAll('.completed')

    completed.forEach(function(i) {
        i.remove()
        amountOfTodos()
    })
}


// create a click event for the add to list
//     run function that transfers the input to a list element
//     return input to nothing

// create a click event for list items
//     run function that toggles the class "completed"
//         completed means the styling will put a line through and change color

// create a counter for the "you have x todos left"
//  li.length - li(completed).length

// create a click event for the clear list
//     run function that clears all list elements

// create a click event for the clear completed
//     run function that clears all list elements with the class "completed"