document.querySelector('#subInput').addEventListener('click', addListItem)
// document.querySelector('#clearBtn').addEventListener('click', clearList)

function addListItem (e) {
    e.preventDefault()
    // create a new li element
    const newLi = document.createElement('li')
    let listContent = document.createTextNode(document.querySelector('input').value)
    newLi.appendChild(listContent)
    const currentLi = document.getElementById('li')
    document.body.insertBefore(newLi, currentLi)
    document.getElementById('mainForm').reset();
}

// function clearList (){
//     let listItems = document.querySelectorAll('li')
//     listItems.classList.add('hidden')
// }

// function resetInput (){
//     //empty input for next list item
//     let form = document.querySelector('#todoInput');
//     form.reset()
//     console.log('reset function')
// }