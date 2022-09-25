document.querySelector('#subInput').addEventListener('click', addListItem)
document.querySelector('#clearBtn').addEventListener('click', clearList)

function addListItem (e) {
    e.preventDefault()
    // create a new li element
    const newLi = document.createElement('li')
    

    // add list item via text node
    let listContent = document.createTextNode(document.querySelector('input').value)

    // add the text node to the li
    newLi.appendChild(listContent)

    // add the newly created element and its content into the DOM
    const currentLi = document.getElementById('li')
    document.body.insertBefore(newLi, currentLi)
    document.getElementById('mainForm').reset();
}

function clearList (){
    console.log('works')
    const listItems = document.querySelector(li)
    listItems.classList.add('hidden')
 
}

// function resetInput (){
//     //empty input for next list item
//     let form = document.querySelector('#todoInput');
//     form.reset()
//     console.log('reset function')
// }