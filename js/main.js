document.querySelector('#add').addEventListener('click', taskT)
document.querySelector('#clear').addEventListener('click', clear)


function taskT() {
    let entry = document.querySelector('#task').value
    if (entry !== '') {
    let taskList = document.querySelector('#taskList')
    //build an li and add it to the ul
    let newItem = document.createElement('li')
    //stuff text into li
    newItem.innerHTML = entry
    // puts a child into an element
    taskList.appendChild(newItem)
    document.querySelector('#task').value = ''
}
}
// removing all the child elements
function clear() {
    document.querySelector('#taskList').replaceChildren()
}

// delete one item
// add a click handler to the ul line 10
// the event handler has to know which li was clicked on - can take an event