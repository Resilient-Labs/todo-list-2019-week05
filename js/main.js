
document.querySelector('.add').addEventListener('click', addItem)
document.querySelector('.clear').addEventListener('click', clearItem)

function addItem() {
    // learned how to correctly add list items from here https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
    let theToDoList = document.querySelector('.toDoList')
    const getValueToDo = document.querySelector('.toDoValue').value 
    let listItemEntry = document.createElement('li')
    listItemEntry.appendChild(document.createTextNode(getValueToDo))
    theToDoList.appendChild(listItemEntry)
    // remove items
    // ellie helped me with this
    listItemEntry.onclick = removeItem
    function removeItem() {
        const line = listItemEntry.classList
        line.add('marked')
    }
}

// hassan helped me with this
function clearItem() {
    document.querySelectorAll('.marked').forEach((task) => {
        task.remove();
    });
}

